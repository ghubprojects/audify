import {
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    useFonts
} from '@expo-google-fonts/poppins';
import { useNavigation } from '@react-navigation/native';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import TheHeader from 'layouts/components/TheHeader';

import { StarFilledIcon, StarOutlinedIcon } from 'assets/icons/light';
import { neutral, primary } from 'styles/colors';
import {
    bestSellers,
    categories,
    newReleases,
    recommendedBooks,
    trendings
} from 'utils/homepage-data';

const StarRating = ({ rating }) => {
    const starRatings = Math.floor(rating);
    const maxRatings = 5;

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < starRatings; i++) {
            stars.push(<StarFilledIcon key={i} />);
        }

        if (starRatings < maxRatings)
            for (let i = starRatings; i < maxRatings; i++) {
                stars.push(<StarOutlinedIcon key={i} />);
            }

        return stars;
    };

    return <View style={styles.starRatingContainer}>{renderStars()}</View>;
};

const HomeScreen = ({ navigation }) => {
    const [fontsLoaded, fontError] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <ScrollView style={styles.container}>
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
                            <TouchableOpacity key={category.id} style={styles.category}>
                                <Text style={styles.categoryName}>{category.name}</Text>
                            </TouchableOpacity>
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
                            <Image key={book.id} source={book.image} style={styles.poster} />
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
                            <View style={styles.bestItem} key={book.id}>
                                <Image source={book.image} style={styles.bestImage} />
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
                            </View>
                        ))}
                    </ScrollView>
                </View>

                {/* New Releases Section */}
                <View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>New Releases</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('NewReleasesScreen')}>
                            <Text style={styles.seeMore}>See more</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
                        {newReleases.map((book) => (
                            <View key={book.id} style={styles.releaseItem}>
                                <Image source={book.image} style={styles.bestImage} />
                                <Text style={styles.bottomTitle}>{book.title}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                {/* Trending Section */}
                <View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Trending Now</Text>
                        <TouchableOpacity>
                            <Text style={styles.seeMore}>See more</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
                        {trendings.map((book) => (
                            <View key={book.id} style={styles.trendingItem}>
                                <Image source={book.image} style={styles.bestImage} />
                                <Text style={styles.bottomTitle}>{book.title}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
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
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 16,
        lineHeight: 24
    },
    seeMore: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 14,
        lineHeight: 20,
        color: primary[50]
    },
    //
    contentContainer: {
        flexDirection: 'row',
        gap: 16
    },
    category: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 12,
        backgroundColor: neutral[5]
    },
    categoryName: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
        lineHeight: 24,
        color: neutral[80]
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
        fontFamily: 'Poppins_400Regular',
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
        fontFamily: 'Poppins_500Medium',
        fontSize: 16,
        lineHeight: 24,
        color: neutral[80]
    }
});

export default HomeScreen;
