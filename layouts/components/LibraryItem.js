import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { primary } from 'styles/colors';
import { ROUTES } from 'utils/constants';
import { Fonts } from 'utils/enums';

const LibraryItem = ({ book }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.wrapper}
            onPress={() => navigation.navigate(ROUTES.DETAIL, { name: book.title })}
        >
            <Image source={book.poster} style={styles.poster} />
            <View style={styles.titleAndAuthor}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>{book.author}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default LibraryItem;

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        gap: 16,
        padding: 12
    },
    poster: {
        width: 100,
        height: 100,
        borderRadius: 4
    },
    titleAndAuthor: {},
    title: {
        marginTop: 12,

        fontFamily: Fonts.Poppins_500Medium,
        fontSize: 16,
        lineHeight: 24
    },
    author: {
        fontFamily: Fonts.Poppins_400Regular,
        fontSize: 12,
        lineHeight: 18,
        color: primary[50]
    }
});
