import { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { neutral } from 'styles/colors';
import { ROUTES } from 'utils/constants';

const CategoryButton = ({ category, icon, wrapList }) => {
    const navigation = useNavigation();

    const categoryClass = wrapList
        ? { ...styles.wrapper, ...styles.wrapList }
        : styles.wrapper;
    const titleClass = icon ? { ...styles.title, ...styles.titleHasIcon } : styles.title;

    return (
        <TouchableOpacity
            style={categoryClass}
            onPress={() => navigation.navigate(ROUTES.CATEGORY_BOOKS, { name: category })}
        >
            {icon}
            <Text numberOfLines={1} style={titleClass}>
                {category}
            </Text>
        </TouchableOpacity>
    );
};

export default CategoryButton;

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        paddingVertical: 8,
        paddingHorizontal: 16,

        borderRadius: 12,
        backgroundColor: neutral[5]
    },
    wrapList: {
        width: 156
    },
    title: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
        lineHeight: 24,
        color: neutral[80]
    },
    titleHasIcon: {
        marginLeft: 8
    }
});
