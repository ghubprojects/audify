import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Badge, CustomButton } from 'components';
import { BookReview, StarRating } from 'features';

import { Fonts } from 'utils/enums';
import { reviewData } from 'utils/homepage-data';

import { DocumentIcon } from 'assets/icons';
import { PlayIcon } from 'assets/icons/light';
import { neutral, primary } from 'styles/colors';

const DetailScreen = () => {
    const { current: currentBook } = useSelector((state) => state.book);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.posterWrapper}>
                <Image source={currentBook.poster} style={styles.poster} />
            </View>

            <View style={styles.titleAndAuthor}>
                <Text style={styles.title}>{currentBook.title}</Text>
                <Text style={styles.author}>{currentBook.author}</Text>
            </View>

            <View style={styles.ratingAndCategories}>
                <View style={styles.ratingWrapper}>
                    <StarRating rating={currentBook.rating} size={24} />
                    <Text style={styles.rating}>{currentBook.rating.toPrecision(2)}</Text>
                </View>

                <View style={styles.categories}>
                    {currentBook.categories.map((category, index) => (
                        <Badge key={index} title={category} />
                    ))}
                </View>
            </View>

            <View style={styles.actions}>
                <CustomButton
                    type='primary'
                    title='Play Audio'
                    onPress={() => console.log('Primary Button Pressed')}
                    icon={<PlayIcon color={neutral.white} size={20} />}
                />
                <CustomButton
                    type='outline'
                    title='Read Book'
                    onPress={() => console.log('Outline Button Pressed')}
                    icon={<DocumentIcon color={primary[50]} size={20} />}
                />
            </View>

            <View style={styles.summary}>
                <Text style={styles.summaryTitle}>Summary</Text>
                <Text style={styles.summaryText}>
                    {`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.\nMollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.\nVelit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`}
                </Text>
            </View>

            <View style={styles.review}>
                <Text style={styles.reviewTitle}>Review</Text>
                <BookReview data={reviewData} />
            </View>
        </ScrollView>
    );
};

export default DetailScreen;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 32,
        backgroundColor: neutral.white
    },

    posterWrapper: {
        marginTop: 12,
        alignItems: 'center'
    },
    poster: {
        width: 240,
        height: 240
    },

    titleAndAuthor: {
        gap: 4,
        marginTop: 28,
        marginBottom: 16
    },
    title: {
        fontFamily: Fonts.Poppins_500Medium,
        fontSize: 20,
        lineHeight: 30
    },
    author: {
        fontFamily: Fonts.Poppins_400Regular,
        fontSize: 16,
        lineHeight: 24,
        color: neutral[50]
    },

    ratingAndCategories: {
        gap: 10
    },
    ratingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12
    },
    rating: {
        fontFamily: Fonts.Poppins_400Regular,
        fontSize: 20,
        lineHeight: 30,
        color: neutral[50]
    },
    categories: {
        flexDirection: 'row',
        gap: 8
    },
    actions: {
        marginVertical: 32,
        flexDirection: 'row',
        gap: 16,
        justifyContent: 'center'
    },

    summary: {
        gap: 12
    },
    summaryTitle: {
        fontFamily: Fonts.Poppins_600SemiBold,
        fontSize: 14,
        lineHeight: 21,
        color: neutral[80]
    },
    summaryText: {
        fontFamily: Fonts.Poppins_400Regular,
        fontSize: 14,
        lineHeight: 21,
        color: neutral[60],
        textAlign: 'justify'
    },
    reviewTitle: {
        marginTop: 40,
        marginBottom: 20,
        fontFamily: Fonts.Poppins_600SemiBold,
        fontSize: 14,
        lineHeight: 21,
        color: neutral[80]
    },
    review: {
        marginBottom: 32
    }
});
