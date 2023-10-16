import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { neutral, primary } from 'styles/colors';
import { Fonts } from 'utils/enums';

const Badge = ({ title, onPress }) => {
    const [isSelected, setIsSelected] = useState(false);

    const Component = onPress ? TouchableOpacity : View;

    const getWrapperStyle = () => {
        if (!onPress) return styles.plainWrapper;
        else if (isSelected) return styles.selectedWrapper;
        else return styles.unSelectedWrapper;
    };

    const getTitleStyle = () => {
        if (!onPress) return styles.plainTitle;
        else if (isSelected) return styles.selectedTitle;
        else return styles.unSelectedTitle;
    };

    const handlePress = () => {
        setIsSelected(!isSelected);
    };

    return (
        <Component style={[styles.wrapper, getWrapperStyle()]} onPress={handlePress}>
            <Text style={[styles.title, getTitleStyle()]}>{title}</Text>
        </Component>
    );
};

export default Badge;

const styles = StyleSheet.create({
    wrapper: {
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderRadius: 24
    },
    title: {
        fontFamily: Fonts.Poppins_500Medium,
        fontSize: 14,
        lineHeight: 21
    },
    plainWrapper: {
        borderColor: neutral[60]
    },
    plainTitle: {
        color: neutral[60]
    },
    selectedWrapper: {
        borderColor: primary[50],
        backgroundColor: primary[50]
    },
    selectedTitle: {
        color: neutral.white
    },
    unSelectedWrapper: {
        borderColor: primary[50]
    },
    unSelectedTitle: {
        color: primary[50]
    }
});
