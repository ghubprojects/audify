import { useEffect, useRef, useState } from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Fonts } from 'utils/enums';

import {
    BookmarkIcon,
    DownloadIcon,
    MuteIcon,
    NextIcon,
    PaperIcon,
    PauseIcon,
    PlayIcon,
    PreviousIcon,
    Repeat1Icon,
    RepeatIcon,
    TimeSquareIcon,
    UnmuteIcon,
    UserHeadsetIcon
} from 'assets/icons/light';
import * as Speech from 'expo-speech';
import { neutral, primary } from 'styles/colors';
import { voices } from './voice.js';
import * as bookService from 'services/book';
import { setChapter } from 'slices/bookSlice.js';
import { ROUTES } from 'utils/constants.js';

const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

const PlayerScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [bookData, setBookData] = useState({});
    const { current: currentBook, chapter: currentChapter } = useSelector((state) => state.book);

    console.log(currentChapter);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isReplay, setIsReplay] = useState(false);

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
            .getFullBookInfo(currentBook.bookId)
            .then((res) => {
                console.log(res.data);
                setBookData(res.data);
                unReadText.current = res.data.chapter[currentChapter - 1].content;
                maxChapter = res.data.chapter.length;
            })
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
        unReadText.current = bookData.chapter[currentChapter - 1].content.slice(readLength.current);
        console.log(unReadText.current);

        if (Platform.OS === 'ios') Speech.pause();
        else Speech.stop();
        setIsPlaying(false);
    };

    const handlePrevious = () => {
        // Implement logic for previous track
    };

    const handleNext = () => {
        // Implement logic for next track
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

    return (
        <View style={styles.container}>
            <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
                <View style={styles.posterWrapper}>
                    <Image source={{ uri: bookData.coverImgURL }} style={styles.poster} />
                </View>

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
                <TouchableOpacity>
                    <UnmuteIcon />
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
        </View>
    );
};

export default PlayerScreen;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 32,
        backgroundColor: neutral.white
    },
    contentContainer: {
        height: 320,
        width: 620
    },

    posterWrapper: {
        marginTop: 12,
        alignItems: 'center'
    },
    poster: {
        width: 300,
        height: 300,
        borderRadius: 12
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
        marginTop: 28,
        marginBottom: 16
    },
    title: {
        fontFamily: Fonts.Poppins_500Medium,
        fontSize: 20,
        lineHeight: 30
    },
    author: {
        fontFamily: Fonts.Poppins_400Regular,
        fontSize: 16,
        lineHeight: 24,
        color: neutral[50]
    },

    progressBarContainer: {
        height: 2,
        backgroundColor: primary[10],
        borderRadius: 4,
        overflow: 'hidden',
        marginTop: 24,
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
        marginTop: 20
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
        marginTop: 32,
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
        marginTop: 10
    }
});
