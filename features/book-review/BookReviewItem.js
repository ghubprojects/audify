import StarRating from 'features/StarRating';
import { Image, StyleSheet, Text, View } from 'react-native';
import { neutral } from 'styles/colors';
import { Fonts } from 'utils/enums';

const getRelativeTimeDifference = (date1, date2) => {
    console.log(date1, date2);
    const timeDifference = date2 - date1;
    const secondsDifference = timeDifference / 1000;

    if (secondsDifference < 60) {
        const seconds = Math.floor(secondsDifference);
        return `${seconds} ${seconds === 1 ? 'second' : 'seconds'} ago`;
    } else if (secondsDifference < 3600) {
        const minutes = Math.floor(secondsDifference / 60);
        return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    } else if (secondsDifference < 86400) {
        const hours = Math.floor(secondsDifference / 3600);
        return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else {
        const days = Math.floor(secondsDifference / 86400);
        return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    }
};

const BookReviewItem = ({ item, index }) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.header}>
                <View>
                    <Image
                        source={require('assets/images/avatar.jpg')}
                        style={styles.avatar}
                    />
                </View>
                <View style={styles.readerAndRating}>
                    <Text style={styles.reader}>{`${item.firstName} ${item.lastName}`}</Text>
                    <View style={styles.ratingDetail}>
                        <StarRating rating={item.rate} size={16} />
                    </View>
                </View>
            </View>
            <Text style={styles.content}>{item.comment}</Text>
        </View>
    );
};

export default BookReviewItem;

const styles = StyleSheet.create({
    wrapper: {
        gap: 16
    },
    header: {
        flexDirection: 'row',
        gap: 20
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 8
    },
    readerAndRating: {
        justifyContent: 'center'
    },
    reader: {
        fontFamily: Fonts.Poppins_500Medium,
        fontSize: 14,
        lineHeight: 21,
        color: neutral[80]
    },
    ratingDetail: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    ratingDate: {
        fontFamily: Fonts.Poppins_400Regular,
        fontSize: 10,
        lineHeight: 15,
        color: neutral[50]
    },
    content: {
        fontFamily: Fonts.Poppins_400Regular,
        fontSize: 14,
        lineHeight: 21,
        color: neutral[60]
    }
});
