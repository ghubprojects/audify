import { Image, StyleSheet, Text, View } from 'react-native';
import { primary } from 'styles/colors';
import { Fonts } from 'utils/enum';

const BookListItem = ({ book, wrapTitle, showAuthor }) => {
    return (
        <View>
            <Image source={book.poster} style={styles.poster} />
            <Text numberOfLines={wrapTitle ? 0 : 1} style={styles.title}>
                {book.title}
            </Text>
            {showAuthor && <Text style={styles.author}>{book.author}</Text>}
        </View>
    );
};

export default BookListItem;

const styles = StyleSheet.create({
    poster: {
        width: 156,
        height: 156,
        borderRadius: 4
    },
    title: {
        width: 120,
        marginTop: 12,

        fontFamily: Fonts.Poppins_500Medium,
        fontSize: 15,
        lineHeight: 24
    },
    author: {
        fontFamily: Fonts.Poppins_400Regular,
        fontSize: 12,
        lineHeight: 18,
        color: primary[50]
    }
});
