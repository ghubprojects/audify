import { StarFilledIcon, StarOutlinedIcon } from 'assets/icons';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const StarRating = ({ rating, size, handleRate }) => {
    const maxRatings = 5;
    const [ratingStars, setRatingStars] = useState(Math.floor(rating) ?? 0);

    const handlePressStar = (starCount) => {
        setRatingStars(starCount);
        handleRate(starCount);
    };

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < ratingStars; i++) {
            stars.push(
                <TouchableOpacity key={i} onPress={() => handlePressStar(i + 1)}>
                    <StarFilledIcon size={size} />
                </TouchableOpacity>
            );
        }

        if (ratingStars < maxRatings)
            for (let i = ratingStars; i < maxRatings; i++) {
                stars.push(
                    <TouchableOpacity key={i} onPress={() => handlePressStar(i + 1)}>
                        <StarOutlinedIcon size={size} />
                    </TouchableOpacity>
                );
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
