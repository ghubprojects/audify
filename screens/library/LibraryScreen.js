import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { LibraryItem } from 'layouts/components';
import TheHeader from 'layouts/components/TheHeader';

import { neutral } from 'styles/colors';
import { Fonts } from 'utils/enums';

import * as bookService from 'services/book';

const LibraryScreen = () => {
    const [searchText, setSearchText] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);

    useEffect(() => {
        bookService
            .searchBooks(searchText)
            .then((res) => setFilteredBooks(res.data))
            .catch((err) => console.log(err));
    }, [searchText]);

    return (
        <ScrollView style={styles.container}>
            <TheHeader style={styles.header} />

            <View style={styles.mainContent}>
                <View>
                    <Text style={styles.pageTitle}>My Books</Text>
                    <TextInput
                        placeholder='Search Book or Author...'
                        style={styles.input}
                        value={searchText}
                        onChangeText={(text) => setSearchText(text)}
                    />
                </View>

                {/* Library Books Section */}
                <View style={styles.libraryBooks}>
                    {filteredBooks.map((book) => (
                        <LibraryItem key={book.bookId} book={book} />
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

    //
    pageTitle: {
        fontFamily: Fonts.Poppins_600SemiBold,
        fontSize: 24,
        lineHeight: 36,
        marginBottom: 12
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
