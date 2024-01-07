import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { BookList } from 'features';
import { CategoryButton } from 'layouts/components';
import TheHeader from 'layouts/components/TheHeader';

import { useEffect, useState } from 'react';
import { neutral } from 'styles/colors';
import { Fonts } from 'utils/enums';

import * as bookService from 'services/book';
import * as categoryService from 'services/category';

const SearchScreen = () => {
    const [searchText, setSearchText] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [categories, setCategories] = useState([]);

    const getCategoryList = () => {
        categoryService
            .getAllAsync()
            .then((res) => setCategories(res.data.slice(0, 4)))
            .catch((err) => console.log(err));
    };

    const getSearchBooks = () => {
        bookService
            .searchBooks(searchText)
            .then((res) => setFilteredBooks(res.data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getCategoryList();
    }, []);

    useEffect(() => {
        getSearchBooks();
    }, [searchText]);

    return (
        <ScrollView style={styles.container}>
            <TheHeader style={styles.header} />

            <View style={styles.mainContent}>
                <View>
                    <Text style={styles.pageTitle}>Explore</Text>
                    <TextInput
                        placeholder='Search Book or Author...'
                        style={styles.input}
                        value={searchText}
                        onChangeText={(text) => setSearchText(text)}
                    />
                </View>

                {/* Categories Section */}
                <View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Recommended Categories</Text>
                    </View>

                    <View style={styles.contentContainer}>
                        {categories.map((category) => (
                            <CategoryButton
                                key={category.categoryId}
                                category={category.name}
                                wrapList={true}
                            />
                        ))}
                    </View>
                </View>

                {/* Search results Section */}
                <BookList
                    title='Search Results'
                    list={filteredBooks}
                    wrapList={true}
                    wrapTitle={false}
                    showAuthor={true}
                />
            </View>
        </ScrollView>
    );
};

export default SearchScreen;

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
        gap: 32,
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
    },

    //
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
