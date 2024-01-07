import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SyncStorage from 'sync-storage';

import { BookList } from 'features';
import TheHeader from 'layouts/components/TheHeader';

import { useEffect, useState } from 'react';
import { neutral } from 'styles/colors';
import { Fonts } from 'utils/enums';

import * as playlistService from 'services/playlist';

const PlaylistScreen = ({ route, navigation }) => {
    const currentPlaylist = route.params;
    console.log('playlist scr', currentPlaylist);

    const [playlistBooks, setPlaylistBooks] = useState([]);

    useEffect(() => {
        playlistService
            .getBooksAsync(currentPlaylist.id, SyncStorage.get('authToken'))
            .then((res) => {
                setPlaylistBooks(res.data[0].books);
                console.log(res.data[0].books);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <ScrollView style={styles.container}>
            <TheHeader style={styles.header} />

            <View style={styles.mainContent}>
                <View>
                    <Text style={styles.pageTitle}>{currentPlaylist.name}</Text>
                </View>
                <BookList
                    list={playlistBooks}
                    wrapList={true}
                    wrapTitle={false}
                    showAuthor={true}
                />
            </View>
        </ScrollView>
    );
};

export default PlaylistScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: neutral.white
    },
    header: {
        marginTop: 46
    },
    mainContent: {
        marginVertical: 40
    },

    pageTitle: {
        fontFamily: Fonts.Poppins_600SemiBold,
        fontSize: 24,
        lineHeight: 36,
        marginBottom: 12
    },

    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16
    },
    title: {
        fontFamily: Fonts.Poppins_600SemiBold,
        fontSize: 16,
        lineHeight: 24
    },
    //
    contentContainer: {
        flexDirection: 'row',
        gap: 16,
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    poster: {
        width: 200,
        height: 300
    },

    bestItem: {
        flexDirection: 'row',
        gap: 16,
        padding: 12,
        borderRadius: 12,
        backgroundColor: neutral[5]
    },
    bestDetails: {
        justifyContent: 'space-between'
    },
    moreDetails: {
        gap: 8,
        marginBottom: 4
    },

    bestImage: {
        width: 120,
        height: 120,
        borderRadius: 4
    },

    titleAndAuthor: {
        gap: 4,
        marginTop: 4
    },
    author: {
        fontFamily: Fonts.Poppins_400Regular,
        fontSize: 12,
        lineHeight: 18,
        color: neutral[60]
    },

    starRatingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },

    bottomTitle: {
        width: 120,
        marginTop: 12,
        fontFamily: Fonts.Poppins_500Medium,
        fontSize: 16,
        lineHeight: 24,
        color: neutral[80]
    }
});
