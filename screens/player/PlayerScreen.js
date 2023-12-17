import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

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
    TimeSquareIcon,
    UnmuteIcon,
    UploadIcon
} from 'assets/icons/light';
import { Button } from 'react-native';
import * as Speech from 'expo-speech';
import { neutral, primary } from 'styles/colors';

const PlayerScreen = () => {
    const { current: currentBook } = useSelector((state) => state.book);

    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const totalTime = 300; // Replace with the total duration of your audio in seconds

    const [progressWidth, setProgressWidth] = useState(0);

    useEffect(() => {
        // Simulate audio playback progress
        const intervalId = setInterval(() => {
            if (isPlaying && currentTime < totalTime) {
                setCurrentTime((prevTime) => prevTime + 1);
                setProgressWidth((currentTime / totalTime) * 100);
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [isPlaying, currentTime]);

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const togglePlayPause = () => {
        console.log(isPlaying);
        setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    };

    const toggleMute = () => {
        console.log(isMuted);
        setIsMuted((prevIsMuted) => {
            console.log(prevIsMuted);
            return !prevIsMuted;
        });
    };

    const handlePrevious = () => {
        // Implement logic for previous track
    };

    const handleNext = () => {
        // Implement logic for next track
    };

    const handleReplay = () => {
        // Implement logic for replaying the current track
    };

    /**
     * Handle on press tool button
     */
    const setBookmark = () => {};

    const changeChapter = () => {};

    const changeSpeed = () => {};

    const download = () => {};

    const [text, setText] = useState(currentBook.text);

    const speakText = async () => {
        Speech.stop(); // Stop any ongoing speech
        Speech.speak(text, {
            language: 'en-US',
            onStart: () => setIsPlaying(true),
            onDone: () => setIsPlaying(false),
            onError: (error) => {
                console.error('Speech error:', error);
                setIsPlaying(false);
            }
        });
        console.log(Speech, isPlaying);
    };

    const pauseSpeech = () => {
        if (Platform.OS === 'ios') {
            Speech.pause();
        } else {
            // Implement the pause logic for Android
            // You can stop the speech using Speech.stop() for simplicity
            Speech.stop();
        }
        setIsPlaying(false);
    };

    return (
        <View style={styles.container}>
            <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
                <View style={styles.posterWrapper}>
                    <Image source={currentBook.poster} style={styles.poster} />
                </View>

                <ScrollView>
                    <Text style={styles.summaryText}>{currentBook.text}</Text>
                </ScrollView>
            </ScrollView>

            <View style={styles.titleAndAuthor}>
                <Text style={styles.title}>{currentBook.title}</Text>
                <Text style={styles.author}>{currentBook.author}</Text>
            </View>

            {/* Custom Progress Bar */}
            <View style={styles.progressBarContainer}>
                <View style={[styles.progressBar, { width: `${progressWidth}%` }]} />
            </View>

            <View style={styles.timeContainer}>
                <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
                <Text style={styles.timeText}>{formatTime(totalTime)}</Text>
            </View>

            {/* Action Buttons */}
            <View style={styles.actionButtonContainer}>
                <TouchableOpacity onPress={toggleMute}>
                    {isMuted ? <MuteIcon /> : <UnmuteIcon />}
                </TouchableOpacity>
                <View style={styles.playerManager}>
                    <TouchableOpacity onPress={handlePrevious}>
                        <PreviousIcon />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.playButton}
                        onPress={isPlaying ? pauseSpeech : speakText}
                    >
                        {isPlaying ? <PauseIcon size={72} /> : <PlayIcon size={72} />}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleNext}>
                        <NextIcon />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={handleReplay}>
                    <UploadIcon />
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
                    <Text style={styles.toolTitle}> Chapter 1 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={changeSpeed} style={styles.toolButton}>
                    <TimeSquareIcon />
                    <Text style={styles.toolTitle}> Speed 1x </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={download} style={styles.toolButton}>
                    <DownloadIcon />
                    <Text style={styles.toolTitle}> Download </Text>
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
