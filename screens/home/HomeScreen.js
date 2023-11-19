import { useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { BookList, StarRating } from 'features';
import { CategoryButton } from 'layouts/components';
import TheHeader from 'layouts/components/TheHeader';

import { getListAll, setCurrent } from 'slices/bookSlice';
import { neutral, primary } from 'styles/colors';
import { ROUTES } from 'utils/constants';
import { Fonts } from 'utils/enums';
import {
    bestSellers,
    categories,
    newReleases,
    recommendedBooks,
    trendings
} from 'utils/homepage-data';

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListAll());
    }, []);

    /**
     * Xử lý khi ấn vào sách
     * @param {object} book sách được lựa chọn
     */
    const handlePressBook = (book) => {
        dispatch(setCurrent(book));
        navigation.navigate(ROUTES.DETAIL, {
            id: book.id,
            name: book.title
        });
    };

    return (
        <ScrollView style={styles.container}>
        <Text>Hello</Text>
            <TheHeader style={styles.header} />

            <View style={styles.mainContent}>
                {/* Categories Section */}
                <View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Categories</Text>
                        <TouchableOpacity>
                            <Text style={styles.seeMore}>See more</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
                        {categories.map((category) => (
                            <CategoryButton
                                key={category.id}
                                category={category}
                                wrapList={false}
                            />
                        ))}
                    </ScrollView>
                </View>

                {/* Recommended Section */}
                <View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Recommended For You</Text>
                        <TouchableOpacity>
                            <Text style={styles.seeMore}>See more</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
                        {recommendedBooks.map((book) => (
                            <TouchableOpacity key={book.id} onPress={() => handlePressBook(book)}>
                                <Image source={book.poster} style={styles.poster} />
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* BestSeller Section */}
                <View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Best Seller</Text>
                        <TouchableOpacity>
                            <Text style={styles.seeMore}>See more</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
                        {bestSellers.map((book) => (
                            <TouchableOpacity
                                style={styles.bestItem}
                                key={book.id}
                                onPress={() => handlePressBook(book)}
                            >
                                <Image source={book.poster} style={styles.bestImage} />
                                <View style={styles.bestDetails}>
                                    <View style={styles.titleAndAuthor}>
                                        <Text style={styles.title}>{book.title}</Text>
                                        <Text style={styles.author}>{book.author}</Text>
                                    </View>
                                    <View style={styles.moreDetails}>
                                        <StarRating rating={book.rating} />
                                        <Text style={styles.author}>
                                            {book.listenersNumber}+ Listeners
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* New Releases Section */}
                <BookList title='New Releases' list={newReleases} seeMoreUrl={ROUTES.NEW_RELEASE} />

                {/* Trending Section */}
                <BookList title='Trending Now' list={trendings} />
            </View>
        </ScrollView>
    );
};

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
    seeMore: {
        fontFamily: Fonts.Poppins_500Medium,
        fontSize: 14,
        lineHeight: 20,
        color: primary[50]
    },
    //
    contentContainer: {
        flexDirection: 'row',
        gap: 16
    },
    poster: {
        width: 200,
        height: 300,
        borderRadius: 8
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

    bottomTitle: {
        width: 120,
        marginTop: 12,
        fontFamily: Fonts.Poppins_500Medium,
        fontSize: 16,
        lineHeight: 24,
        color: neutral[80]
    }
});

export default HomeScreen;
