import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { BookList } from 'features';
import TheHeader from 'layouts/components/TheHeader';
import { neutral } from 'styles/colors';
import { Fonts } from 'utils/enums';
import { useEffect, useState } from 'react';
import SyncStorage from 'sync-storage';
import * as bookService from 'services/book';

const RecentScreen = (route, navigation) => {
    const [newReleaseBooks, setNewReleaseBooks] = useState([]);

    useEffect(() => {
        bookService
            .getRecentBooksAsync(SyncStorage.get('authToken'))
            .then((res) => setNewReleaseBooks(res.data))
            .catch((err) => {
                console.log('HomeScreen: bookService: newReleases', err);
            });
    }, []);

    return (
        <ScrollView style={styles.container}>
            <TheHeader style={styles.header} />

            <View style={styles.mainContent}>
                <View>
                    <Text style={styles.pageTitle}>Your Recent Books</Text>
                </View>
                <BookList
                    list={newReleaseBooks}
                    wrapList={true}
                    wrapTitle={false}
                    showAuthor={true}
                />
            </View>
        </ScrollView>
    );
};

export default RecentScreen;

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
        lineHeight: 30
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
