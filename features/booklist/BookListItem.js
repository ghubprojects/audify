import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { setCurrent } from 'slices/bookSlice';
import { primary } from 'styles/colors';
import { ROUTES } from 'utils/constants';
import { Fonts } from 'utils/enums';

const BookListItem = ({ book, wrapTitle, showAuthor }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    /**
     * Xử lý khi ấn vào sách
     * @param {object} book sách được lựa chọn
     */
    const handlePressBook = (book) => {
        dispatch(setCurrent(book));
        navigation.navigate(ROUTES.DETAIL, {
            id: book.id,
            name: book.title
        });
    };

    return (
        <TouchableOpacity onPress={() => handlePressBook(book)}>
            <Image source={book.poster} style={styles.poster} />
            <Text numberOfLines={wrapTitle ? 0 : 1} style={styles.title}>
                {book.title}
            </Text>
            {showAuthor && <Text style={styles.author}>{book.author}</Text>}
        </TouchableOpacity>
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
