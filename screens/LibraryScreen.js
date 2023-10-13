import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { BookList } from 'features';
import { CategoryButton, LibraryItem } from 'layouts/components';
import TheHeader from 'layouts/components/TheHeader';

import { neutral } from 'styles/colors';
import {
    latestSearch,
    libraryBooks,
    recommendedCategories,
    searchResults
} from 'utils/homepage-data';
import { Fonts } from 'utils/enum';

const LibraryScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <TheHeader style={styles.header} />

            <View style={styles.mainContent}>
                <View>
                    <Text style={styles.pageTitle}>My Books</Text>
                    <TextInput placeholder='Search Book or Author...' style={styles.input} />
                </View>

                {/* Library Books Section */}
                <View style={styles.libraryBooks}>
                    {libraryBooks.map((book) => (
                        <LibraryItem key={book.id} book={book} />
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
