import { StyleSheet, View } from 'react-native';
import { StarFilledIcon, StarOutlinedIcon } from 'assets/icons';

const StarRating = ({ rating, size }) => {
    const starRatings = Math.floor(rating);
    const maxRatings = 5;

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < starRatings; i++) {
            stars.push(<StarFilledIcon key={i} size={size} />);
        }

        if (starRatings < maxRatings)
            for (let i = starRatings; i < maxRatings; i++) {
                stars.push(<StarOutlinedIcon key={i} size={size} />);
            }

        return stars;
    };

    return <View style={styles.wrapper}>{renderStars()}</View>;
};

export default StarRating;

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    }
});
