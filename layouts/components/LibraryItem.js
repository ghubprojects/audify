import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { setCurrent } from 'slices/bookSlice';
import { primary } from 'styles/colors';
import { ROUTES } from 'utils/constants';
import { Fonts } from 'utils/enums';

const LibraryItem = ({ book }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    /**
     * Xử lý khi ấn vào sách
     * @param {object} book sách được lựa chọn
     */
    const handlePressBook = (book) => {
        dispatch(setCurrent(book));
        navigation.navigate(ROUTES.DETAIL, {
            id: book.bookId,
            name: book.title
        });
    };

    return (
        <TouchableOpacity style={styles.wrapper} onPress={() => handlePressBook(book)}>
            <Image source={{ uri: book.coverImgURL }} style={styles.poster} />
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
