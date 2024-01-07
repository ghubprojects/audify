import * as Speech from 'expo-speech';
import { useEffect, useRef, useState } from 'react';
import {
    Image,
    Modal,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    ToastAndroid,
    TouchableOpacity,
    View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import SyncStorage from 'sync-storage';

import { Fonts } from 'utils/enums';

import * as bookService from 'services/book';
import * as playlistService from 'services/playlist';

import { setChapter } from 'slices/bookSlice.js';
import { neutral, primary } from 'styles/colors';
import { ROUTES } from 'utils/constants.js';
import { voices } from './voice.js';

import {
    BookmarkIcon,
    ListMusicIcon,
    NextIcon,
    PaperIcon,
    PauseIcon,
    PlayIcon,
    PreviousIcon,
    Repeat1Icon,
    RepeatIcon,
    TimeSquareIcon,
    UserHeadsetIcon
} from 'assets/icons/light';

/* import TrackPlayer, {
    Capability,
    Event,
    State,
    usePlaybackState,
    useProgress,
    useTrackPlayerEvents
} from 'react-native-track-player';
import podcasts from 'assets/data'; */

const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

const PlayerScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [bookData, setBookData] = useState({});
    const { current: currentBook, chapter: currentChapter } = useSelector(
        (state) => state.book
    );

    console.log(currentChapter);

    const [isPlaying, setIsPlaying] = useState(false);
    const [isReplay, setIsReplay] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [playlists, setPlaylists] = useState([]);

    const speed = useRef(1);

    let maxChapter;

    const readLength = useRef(0);
    const unReadText = useRef('');

    const wordRef = useRef({
        text: '',
        index: 0,
        length: 0
    });

    const totalTime = 300; // Replace with the total duration of your audio in seconds
    const currentTime = useRef(0);
    const [progressWidth, setProgressWidth] = useState(0);

    const currentVoice = useRef(0);

    useEffect(() => {
        Speech.getAvailableVoicesAsync();
        console.log(123456, currentBook);
        bookService
            .getFullBookInfo(currentBook.bookId, SyncStorage.get('authToken'))
            .then((res) => {
                console.log(res.data);
                setBookData(res.data);
                unReadText.current = res.data.chapter[currentChapter - 1].content;
                maxChapter = res.data.chapter.length;
            })
            .catch((err) => console.log(err));

        playlistService
            .getAllAsync(SyncStorage.get('authToken'))
            .then((res) => setPlaylists(res.data))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        // Simulate audio playback progress
        const intervalId = setInterval(() => {
            if (isPlaying && currentTime.current < totalTime) {
                console.log('running');
                currentTime.current++;
                setProgressWidth((currentTime.current / totalTime) * 100);
            }
        }, 1000 / speed.current);

        return () => clearInterval(intervalId);
    }, [isPlaying, currentTime.current]);

    /**
     * Handle play audio
     */
    const speakText = async (text) => {
        Speech.stop();
        Speech.speak(text, {
            language: 'en-US',
            rate: speed.current,
            voice: voices[currentVoice.current],
            onStart: () => setIsPlaying(true),
            onDone: () => {
                if (!isReplay) setIsPlaying(false);
                else speakText(bookData.chapter[currentChapter - 1].content);
            },
            onError: (error) => {
                console.error('Speech error:', error);
                setIsPlaying(false);
            },
            onBoundary: ({ charIndex, charLength }) => {
                wordRef.current.index = charIndex;
                wordRef.current.length = charLength;
                wordRef.current.text = text.slice(charIndex, charIndex + charLength);
                console.log(wordRef.current);
            }
        });
    };

    /**
     * Handle pause audio
     */
    const pauseSpeech = () => {
        readLength.current += wordRef.current.index;
        unReadText.current = bookData.chapter[currentChapter - 1].content.slice(
            readLength.current
        );
        console.log(unReadText.current);

        if (Platform.OS === 'ios') Speech.pause();
        else Speech.stop();
        setIsPlaying(false);
    };

    const handlePrevious = () => {
        Speech.stop();
        setIsPlaying(false);
        if (currentChapter >= maxChapter) dispatch(setChapter(1));
        else dispatch(setChapter(currentChapter - 1));
        navigateToDetail(bookData);
        navigateToPlayer(bookData);
    };

    const handleNext = () => {
        Speech.stop();
        setIsPlaying(false);
        if (currentChapter >= maxChapter) dispatch(setChapter(1));
        else dispatch(setChapter(currentChapter + 1));
        navigateToDetail(bookData);
        navigateToPlayer(bookData);
    };

    const handleReplay = () => {
        setIsReplay((prevState) => !prevState);
    };

    /**
     * Handle on press tool button
     */
    const setBookmark = () => {};

    const navigateToPlayer = (book) => {
        navigation.navigate(ROUTES.PLAYER, {
            id: book.bookId,
            name: book.title
        });
    };
    const navigateToDetail = (book) => {
        navigation.navigate(ROUTES.DETAIL, {
            id: book.bookId,
            name: book.title
        });
    };

    /**
     * Change chapter
     */
    const changeChapter = () => {
        Speech.stop();
        setIsPlaying(false);
        if (currentChapter >= maxChapter) dispatch(setChapter(1));
        else dispatch(setChapter(currentChapter + 1));
        navigateToDetail(bookData);
        navigateToPlayer(bookData);
    };

    /**
     * Change speed
     */
    const speedStep = 0.25;
    const maxSpeed = 3;
    const changeSpeed = () => {
        pauseSpeech();
        if (speed.current >= maxSpeed) speed.current = 0.25;
        else speed.current += speedStep;
        speakText(unReadText.current);
    };

    const maxVoices = 50;
    const handleChangeVoice = () => {
        pauseSpeech();
        if (currentVoice.current >= maxVoices) currentVoice.current = 0;
        else currentVoice.current++;
        speakText(unReadText.current);
    };

    /**
     * Add audio to playlist
     */
    const handleAddToPlaylist = async (playlist) => {
        console.log(playlist);
        await playlistService
            .addBookAsync(
                playlist.playlistId,
                currentBook.bookId,
                SyncStorage.get('authToken')
            )
            .then((res) => {
                console.log('player screen', currentBook.bookId, res.data);
                ToastAndroid.show('Add to playlist successfully !', ToastAndroid.SHORT);
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setModalVisible(false);
            });
    };

    /* const podcastsCount = podcasts.length;
    const [trackIndex, setTrackIndex] = useState(0);
    const [trackTitle, setTrackTitle] = useState();
    const [trackArtist, setTrackArtist] = useState();
    const [trackArtwork, setTrackArtwork] = useState();

    const playBackState = usePlaybackState();
    const progress = useProgress();

    const setupPlayer = async () => {
        try {
            await TrackPlayer.setupPlayer();
            await TrackPlayer.updateOptions({
                capabilities: [
                    Capability.Play,
                    Capability.Pause,
                    Capability.SkipToNext,
                    Capability.SkipToPrevious
                ]
            });
            await TrackPlayer.add(podcasts);
            await gettrackdata();
            await TrackPlayer.play();
        } catch (error) {
            console.log(error);
        }
    };

    useTrackPlayerEvents([Event.PlaybackTrackChanged], async (event) => {
        if (event.type === Event.PlaybackTrackChanged && event.nextTrack !== null) {
            const track = await TrackPlayer.getTrack(event.nextTrack);
            const { title, artwork, artist } = track;
            console.log(event.nextTrack);
            setTrackIndex(event.nextTrack);
            setTrackTitle(title);
            setTrackArtist(artist);
            setTrackArtwork(artwork);
        }
    });

    const gettrackdata = async () => {
        let trackIndex = await TrackPlayer.getCurrentTrack();
        let trackObject = await TrackPlayer.getTrack(trackIndex);
        console.log(trackIndex);
        setTrackIndex(trackIndex);
        setTrackTitle(trackObject.title);
        setTrackArtist(trackObject.artist);
        setTrackArtwork(trackObject.artwork);
    };

    const togglePlayBack = async (playBackState) => {
        const currentTrack = await TrackPlayer.getCurrentTrack();
        if (currentTrack != null) {
            if ((playBackState == State.Paused) | (playBackState == State.Ready)) {
                await TrackPlayer.play();
            } else {
                await TrackPlayer.pause();
            }
        }
    };

    const nexttrack = async () => {
        if (trackIndex < podcastsCount - 1) {
            await TrackPlayer.skipToNext();
            gettrackdata();
        }
    };

    const previoustrack = async () => {
        if (trackIndex > 0) {
            await TrackPlayer.skipToPrevious();
            gettrackdata();
        }
    };

    useEffect(() => {
        setupPlayer();
    }, []); */

    return (
        <View style={styles.container}>
            <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
                <View style={styles.posterWrapper}>
                    <Image source={{ uri: bookData.coverImgURL }} style={styles.poster} />
                </View>

                {/* <View style={styles.container}>
                    <StatusBar barStyle='light-content' />
                    <SafeAreaView style={styles.container}>
                        <View style={styles.mainContainer}>
                            <View style={styles.mainWrapper}>
                                <Image source={trackArtwork} style={styles.imageWrapper} />
                            </View>
                            <View style={styles.songText}>
                                <Text
                                    style={[styles.songContent, styles.songTitle]}
                                    numberOfLines={3}
                                >
                                    {trackTitle}
                                </Text>
                                <Text
                                    style={[styles.songContent, styles.songArtist]}
                                    numberOfLines={2}
                                >
                                    {trackArtist}
                                </Text>
                            </View>
                            <View>
                                <Slider
                                    style={styles.progressBar}
                                    value={progress.position}
                                    minimumValue={0}
                                    maximumValue={progress.duration}
                                    thumbTintColor='#FFD369'
                                    minimumTrackTintColor='#FFD369'
                                    maximumTrackTintColor='#fff'
                                    onSlidingComplete={async (value) =>
                                        await TrackPlayer.seekTo(value)
                                    }
                                />
                                <View style={styles.progressLevelDuraiton}>
                                    <Text style={styles.progressLabelText}>
                                        {new Date(progress.position * 1000)
                                            .toLocaleTimeString()
                                            .substring(3)}
                                    </Text>
                                    <Text style={styles.progressLabelText}>
                                        {new Date((progress.duration - progress.position) * 1000)
                                            .toLocaleTimeString()
                                            .substring(3)}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.musicControlsContainer}>
                                <TouchableOpacity onPress={previoustrack}>
                                    <Ionicons
                                        name='play-skip-back-outline'
                                        size={35}
                                        color='#FFD369'
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => togglePlayBack(playBackState)}>
                                    <Ionicons
                                        name={
                                            playBackState === State.Playing
                                                ? 'ios-pause-circle'
                                                : playBackState === State.Connecting
                                                ? 'ios-caret-down-circle'
                                                : 'ios-play-circle'
                                        }
                                        size={75}
                                        color='#FFD369'
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={nexttrack}>
                                    <Ionicons
                                        name='play-skip-forward-outline'
                                        size={35}
                                        color='#FFD369'
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </SafeAreaView>
                </View> */}

                <ScrollView>
                    <Text style={styles.summaryText}>
                        {bookData.chapter ? bookData.chapter[currentChapter - 1].content : ''}
                    </Text>
                </ScrollView>
            </ScrollView>

            <View style={styles.titleAndAuthor}>
                <Text style={styles.title}>{bookData.title}</Text>
                <Text style={styles.author}>{bookData.author}</Text>
            </View>

            {/* Custom Progress Bar */}
            <View style={styles.progressBarContainer}>
                <View style={[styles.progressBar, { width: `${progressWidth}%` }]} />
            </View>

            <View style={styles.timeContainer}>
                <Text style={styles.timeText}>{formatTime(currentTime.current)}</Text>
                <Text style={styles.timeText}>{formatTime(totalTime)}</Text>
            </View>

            {/* Action Buttons */}
            <View style={styles.actionButtonContainer}>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <ListMusicIcon />
                </TouchableOpacity>
                <View style={styles.playerManager}>
                    <TouchableOpacity onPress={handlePrevious}>
                        <PreviousIcon />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.playButton}
                        onPress={isPlaying ? pauseSpeech : () => speakText(unReadText.current)}
                    >
                        {isPlaying ? <PauseIcon size={72} /> : <PlayIcon size={72} />}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleNext}>
                        <NextIcon />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={handleReplay}>
                    {isReplay ? <Repeat1Icon /> : <RepeatIcon />}
                </TouchableOpacity>
            </View>

            {/* Tool Buttons */}
            <View style={styles.toolButtonContainer}>
                <TouchableOpacity onPress={setBookmark} style={styles.toolButton}>
                    <BookmarkIcon />
                    <Text style={styles.toolTitle}> Bookmark </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={changeChapter} style={styles.toolButton}>
                    <PaperIcon />
                    <Text style={styles.toolTitle}> Chapter {currentChapter} </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={changeSpeed} style={styles.toolButton}>
                    <TimeSquareIcon />
                    <Text style={styles.toolTitle}> Speed x{speed.current} </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleChangeVoice} style={styles.toolButton}>
                    <UserHeadsetIcon />
                    <Text style={styles.toolTitle}> Voice {currentVoice.current} </Text>
                </TouchableOpacity>
            </View>

            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Save to playlist</Text>
                        {playlists.map((playlist) => (
                            <Pressable
                                key={playlist.playlistId}
                                style={styles.playlistWrapper}
                                onPress={() => handleAddToPlaylist(playlist)}
                            >
                                <Image
                                    source={require('assets/images/playlistDefault.jpg')}
                                    style={styles.posterPlaylist}
                                />
                                <Text style={styles.textStyle}>{playlist.name}</Text>
                            </Pressable>
                        ))}
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default PlayerScreen;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 28,
        backgroundColor: neutral.white
    },
    contentContainer: {
        height: 320,
        width: 630
    },

    posterWrapper: {
        marginTop: 12,
        alignItems: 'center'
    },
    poster: {
        width: 300,
        height: 300,
        borderRadius: 12,
        marginRight: 2
    },
    summaryText: {
        fontFamily: Fonts.Poppins_400Regular,
        fontSize: 14,
        lineHeight: 21,
        color: neutral[60],
        textAlign: 'justify',
        marginLeft: 24
    },
    titleAndAuthor: {
        gap: 4,
        marginTop: 20,
        marginBottom: 12
    },
    title: {
        fontFamily: Fonts.Poppins_500Medium,
        fontSize: 20,
        lineHeight: 24,
        height: 48
    },
    author: {
        fontFamily: Fonts.Poppins_400Regular,
        fontSize: 16,
        lineHeight: 20,
        color: neutral[50]
    },

    progressBarContainer: {
        height: 2,
        backgroundColor: primary[10],
        borderRadius: 4,
        overflow: 'hidden',
        marginTop: 20,
        marginBottom: 12
    },
    progressBar: {
        height: '100%',
        backgroundColor: primary[50],
        borderRadius: 4
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    timeText: {
        color: primary[20],
        fontFamily: Fonts.Poppins_400Regular,
        fontSize: 12
    },

    actionButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16
    },
    playerManager: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    playButton: {},

    toolButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 28,
        marginBottom: 24
    },

    toolButton: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    toolTitle: {
        fontFamily: Fonts.Poppins_400Regular,
        fontSize: 12,
        lineHeight: 16,
        marginTop: 8
    },

    /* container: {
        flex: 1,
        backgroundColor: '#222831'
    },
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainWrapper: {
        width: width,
        height: width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageWrapper: {
        alignSelf: 'center',
        width: '90%',
        height: '90%',
        borderRadius: 15
    },
    songText: {
        marginTop: 2,
        height: 70
    },
    songContent: {
        textAlign: 'center',
        color: '#EEEEEE'
    },
    songTitle: {
        fontSize: 18,
        fontWeight: '600'
    },
    songArtist: {
        fontSize: 16,
        fontWeight: '300'
    },
    progressBar: {
        alignSelf: 'stretch',
        marginTop: 40,
        marginLeft: 5,
        marginRight: 5
    },
    progressLevelDuraiton: {
        width: width,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    progressLabelText: {
        color: '#FFF'
    },
    musicControlsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        width: '60%'
    } */
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        width: 240,
        minHeight: 200,
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 20,
        paddingHorizontal: 24,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    textStyle: {
        fontFamily: Fonts.Poppins_500Medium,
        fontSize: 16,
        lineHeight: 24
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        color: neutral[90],
        fontFamily: Fonts.Poppins_400Regular,
        fontSize: 16
    },
    playlistWrapper: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
        marginBottom: 12
    },
    posterPlaylist: {
        width: 32,
        height: 32,
        borderRadius: 4
    }
});
