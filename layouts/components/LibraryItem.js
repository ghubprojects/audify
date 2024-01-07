import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SyncStorage from 'sync-storage';

import { primary } from 'styles/colors';
import { ROUTES } from 'utils/constants';
import { Fonts } from 'utils/enums';

import * as playlistService from 'services/playlist';

const LibraryItem = ({ playlist, reload }) => {
    const navigation = useNavigation();
    const [playlistBooks, setPlaylistBooks] = useState([]);

    useEffect(() => {
        playlistService
            .getBooksAsync(playlist.playlistId, SyncStorage.get('authToken'))
            .then((res) => setPlaylistBooks(res.data[0].books))
            .catch((err) => console.log(err));
    }, [reload]);

    const handlePressPlaylist = (playlist) => {
        navigation.navigate(ROUTES.PLAYLIST, {
            id: playlist.playlistId,
            name: playlist.name
        });
    };

    return (
        <TouchableOpacity style={styles.wrapper} onPress={() => handlePressPlaylist(playlist)}>
            <Image
                source={
                    playlistBooks[playlistBooks.length - 1]
                        ? { uri: playlistBooks[playlistBooks.length - 1].coverImgURL }
                        : require('assets/images/playlistDefault.jpg')
                }
                style={styles.poster}
            />
            <View>
                <Text style={styles.name}>{playlist.name}</Text>
                <Text style={styles.book}>{playlistBooks.length} books</Text>
            </View>
        </TouchableOpacity>
    );
};

export default LibraryItem;

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        paddingVertical: 12
    },
    poster: {
        width: 80,
        height: 80,
        borderRadius: 4
    },
    name: {
        marginTop: 12,

        fontFamily: Fonts.Poppins_500Medium,
        fontSize: 16,
        lineHeight: 24
    },
    book: {
        fontFamily: Fonts.Poppins_400Regular,
        fontSize: 12,
        lineHeight: 18,
        color: primary[50]
    }
});
