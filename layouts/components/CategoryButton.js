import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { neutral } from 'styles/colors';

const CategoryButton = ({ category, icon, wrapList }) => {
    const categoryClass = wrapList ? { ...styles.wrapper, ...styles.wrapList } : styles.wrapper;
    const titleClass = icon ? { ...styles.title, ...styles.titleHasIcon } : styles.title;

    return (
        <TouchableOpacity style={categoryClass}>
            {icon}
            <Text numberOfLines={1} style={titleClass}>
                {category.name}
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
