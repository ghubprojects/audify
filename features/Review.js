import { Image, StyleSheet, Text, View } from 'react-native';
import StarRating from './StarRating';

const Review = ({ data }) => {
    return (
        <View>
            <View style={styles.header}>
                <View>
                    <Image source={data.avatar} style={styles.avatar} />
                </View>
                <View>
                    <Text>{data.reader}</Text>
                    <StarRating rating={data.rating} size={16} />
                </View>
            </View>
            <View>
                <Text>{data.content}</Text>
            </View>
        </View>
    );
};

export default Review;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        gap: 20,
        marginBottom: 16
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 8
    }
});
