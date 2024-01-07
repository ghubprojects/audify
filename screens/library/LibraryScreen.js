import { useEffect, useState } from 'react';
import {
    RefreshControl,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    ToastAndroid,
    TouchableOpacity,
    View
} from 'react-native';
import SyncStorage from 'sync-storage';

import { LibraryItem } from 'layouts/components';
import TheHeader from 'layouts/components/TheHeader';

import { PlusIcon } from 'assets/icons/light';
import { neutral } from 'styles/colors';
import { Fonts } from 'utils/enums';

import * as playlistService from 'services/playlist';

const LibraryScreen = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [newPlaylist, setNewPlaylist] = useState('');
    const [playlists, setPlaylists] = useState([]);

    const loadData = () => {
        playlistService
            .getAllAsync(SyncStorage.get('authToken'))
            .then((res) => setPlaylists(res.data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        loadData();
    }, [refreshing]);

    const handleCreatePlaylist = () => {
        if (newPlaylist.trim() !== '') {
            playlistService
                .addAsync(newPlaylist, SyncStorage.get('authToken'))
                .then((res) => {
                    if (res.status === 200) {
                        ToastAndroid.show(
                            'Create playlist successfully !',
                            ToastAndroid.SHORT
                        );
                        loadData();
                    }
                })
                .catch((err) => console.log(err))
                .finally(() => setNewPlaylist(''));
        }
    };

    return (
        <ScrollView
            style={styles.container}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={() => {
                        setRefreshing(true);
                        setTimeout(() => {
                            setRefreshing(false);
                        }, 500);
                    }}
                />
            }
        >
            <TheHeader style={styles.header} />

            <View style={styles.mainContent}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.pageTitle}>My Playlists</Text>
                    <TouchableOpacity onPress={handleCreatePlaylist}>
                        <PlusIcon />
                    </TouchableOpacity>
                </View>

                <TextInput
                    placeholder='Create new playlist...'
                    style={styles.input}
                    value={newPlaylist}
                    onChangeText={(text) => setNewPlaylist(text)}
                />

                <View style={styles.libraryBooks}>
                    {playlists.map((playlist) => (
                        <LibraryItem
                            key={playlist.playlistId}
                            playlist={playlist}
                            reload={refreshing}
                        />
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

export default LibraryScreen;

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
        gap: 16,
        marginVertical: 40
    },
    titleWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    //
    pageTitle: {
        fontFamily: Fonts.Poppins_600SemiBold,
        fontSize: 24,
        lineHeight: 36
    },
    input: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 8,

        fontFamily: Fonts.Poppins_500Medium,
        fontSize: 14,
        lineHeight: 20,

        backgroundColor: neutral[5]
        // color: neutral[40]
    },
    libraryBooks: {
        gap: 4
    }
});
