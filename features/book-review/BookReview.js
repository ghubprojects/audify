import Carousel, { Pagination } from 'libs/snap-carousel';
import { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { accent, neutral, primary } from 'styles/colors';
import { Fonts } from 'utils/enums';
import BookReviewItem from './BookReviewItem';

const BookReview = ({ data }) => {
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <View style={styles.container}>
            <Carousel
                data={data}
                renderItem={BookReviewItem}
                sliderWidth={Dimensions.get('window').width - 64}
                itemWidth={Dimensions.get('window').width - 64}
                onSnapToItem={(index) => setActiveSlide(index)}
            />
            <View style={styles.footerReview}>
                <Pagination
                    dotsLength={data.length}
                    activeDotIndex={activeSlide}
                    containerStyle={styles.pagination}
                    dotStyle={styles.paginationDot}
                    inactiveDotStyle={styles.paginationInactiveDot}
                    inactiveDotScale={1}
                />
                <TouchableOpacity>
                    <Text style={styles.viewMore}>View More</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    carouselItem: {
        backgroundColor: 'lightgray',
        alignItems: 'center'
    },
    pagination: {
        marginLeft: -6
    },
    paginationDot: {
        width: 12,
        height: 12,
        borderRadius: 999,
        backgroundColor: primary[50]
    },
    paginationInactiveDot: {
        backgroundColor: neutral[20]
    },
    footerReview: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewMore: {
        fontFamily: Fonts.Poppins_500Medium,
        fontSize: 14,
        lineHeight: 21,
        color: accent[50]
    }
});

export default BookReview;
