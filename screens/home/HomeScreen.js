import { useEffect, useState } from 'react';
import {
    Image,
    RefreshControl,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { useDispatch } from 'react-redux';
import SyncStorage from 'sync-storage';

import { BookList, StarRating } from 'features';
import { CategoryButton } from 'layouts/components';
import TheHeader from 'layouts/components/TheHeader';

import { setCurrent } from 'slices/bookSlice';
import { neutral, primary } from 'styles/colors';
import { ROUTES } from 'utils/constants';
import { Fonts } from 'utils/enums';

import * as bookService from 'services/book';
import * as categoryService from 'services/category';

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [refreshing, setRefreshing] = useState(false);
    const [categories, setCategories] = useState([]);
    const [recommendedBooks, setRecommendedBooks] = useState([]);
    const [bestSellerBooks, setBestSellerBooks] = useState([]);
    const [recentBooks, setRecentBooks] = useState([]);
    const [newReleaseBooks, setNewReleaseBooks] = useState([]);
    const [trendingNowBooks, setTrendingNowBooks] = useState([]);

    const getCategoryList = () => {
        categoryService
            .getAllAsync()
            .then((res) => setCategories(res.data))
            .catch((err) => {
                console.log('HomeScreen: categoryService', err);
            });
    };

    const getRecommendBook = () => {
        bookService
            .getRecommendBooksAsync(SyncStorage.get('authToken'))
            .then((res) => setRecommendedBooks(res.data))
            .catch((err) => {
                console.log('HomeScreen: bookService: recommendBooks', err);
            });
    };

    const getBestSellerBooks = () => {
        bookService
            .getBestSellerAsync()
            .then((res) => setBestSellerBooks(res.data))
            .catch((err) => {
                console.log('HomeScreen: bookService: bestSellers', err);
            });
    };

    const getRecentBooks = () => {
        bookService
            .getRecentBooksAsync(SyncStorage.get('authToken'))
            .then((res) => setRecentBooks(res.data))
            .catch((err) => {
                console.log('HomeScreen: bookService: recentBooks', err);
            });
    };

    const getNewReleasesBooks = () => {
        bookService
            .getNewReleasesAsync()
            .then((res) => setNewReleaseBooks(res.data))
            .catch((err) => {
                console.log('HomeScreen: bookService: newReleases', err);
            });
    };

    const getTrendingBooks = () => {
        bookService
            .getTrendingBooksAsync()
            .then((res) => setTrendingNowBooks(res.data))
            .catch((err) => {
                console.log('HomeScreen: bookService: trendingNows', err);
            });
    };

    const loadData = () => {
        getCategoryList();
        getRecommendBook();
        getBestSellerBooks();
        getRecentBooks();
        getNewReleasesBooks();
        getTrendingBooks();
    };

    useEffect(() => {
        loadData();
    }, []);

    /**
     * Xử lý khi ấn vào sách
     * @param {object} book sách được lựa chọn
     */
    const handlePressBook = (book) => {
        dispatch(setCurrent(book));
        navigation.navigate(ROUTES.DETAIL, { id: book.bookId, name: book.title });
    };

    return (
        <ScrollView
            style={styles.container}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={() => {
                        setRefreshing(true);
                        loadData();
                        setTimeout(() => setRefreshing(false), 500);
                    }}
                />
            }
        >
            <TheHeader style={styles.header} />

            <View style={styles.mainContent}>
                {/* Categories Section */}
                <View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Categories</Text>
                        {/* <TouchableOpacity>
                            <Text style={styles.seeMore}>See more</Text>
                        </TouchableOpacity> */}
                    </View>

                    <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
                        {categories.map((category) => (
                            <CategoryButton
                                key={category['categoryId']}
                                category={category['name']}
                                wrapList={false}
                            />
                        ))}
                    </ScrollView>
                </View>

                {/* Recommended Section */}
                <View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Recommended For You</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(ROUTES.RECOMMEND_BOOKS)}
                        >
                            <Text style={styles.seeMore}>See more</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
                        {recommendedBooks.map((book) => (
                            <TouchableOpacity
                                key={book.bookId}
                                onPress={() => handlePressBook(book)}
                            >
                                <Image
                                    source={{ uri: book.coverImgURL }}
                                    style={styles.poster}
                                />
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* BestSeller Section */}
                <View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Best Seller</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(ROUTES.BEST_SELLER)}
                        >
                            <Text style={styles.seeMore}>See more</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
                        {bestSellerBooks.map((book) => (
                            <TouchableOpacity
                                style={styles.bestItem}
                                key={book.bookId}
                                onPress={() => handlePressBook(book)}
                            >
                                <Image
                                    source={{ uri: book.coverImgURL }}
                                    style={styles.bestImage}
                                />
                                <View style={styles.bestDetails}>
                                    <View style={styles.titleAndAuthor}>
                                        <Text style={styles.title}>{book.title}</Text>
                                        <Text style={styles.author}>{book.author}</Text>
                                    </View>
                                    <View style={styles.moreDetails}>
                                        <StarRating rating={book.rate} />
                                        <Text style={styles.author}>
                                            {book.view}+ Listeners
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* Recent Books Section */}
                <BookList
                    title='Your Recent Books'
                    list={recentBooks}
                    seeMoreUrl={ROUTES.RECENT_BOOKS}
                />

                {/* New Releases Section */}
                <BookList
                    title='New Releases'
                    list={newReleaseBooks}
                    seeMoreUrl={ROUTES.NEW_RELEASE}
                />

                {/* Trending Section */}
                <BookList
                    title='Trending Now'
                    list={trendingNowBooks}
                    seeMoreUrl={ROUTES.TRENDING_NOW}
                />
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
