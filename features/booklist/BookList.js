import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { primary } from 'styles/colors';
import { Fonts } from 'utils/enums';
import BookListItem from './BookListItem';

const BookList = ({ title, seeMoreUrl, list, wrapList, wrapTitle = true, showAuthor }) => {
    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                {seeMoreUrl && (
                    <TouchableOpacity onPress={() => navigation.navigate(seeMoreUrl)}>
                        <Text style={styles.seeMore}>See more</Text>
                    </TouchableOpacity>
                )}
            </View>
            <ScrollView horizontal={!wrapList} contentContainerStyle={styles.bookList}>
                {list.map((book) => (
                    <BookListItem
                        key={book.bookId}
                        book={book}
                        wrapTitle={wrapTitle}
                        showAuthor={showAuthor}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export default BookList;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16
    },
    title: {
        fontFamily: Fonts.Poppins_600SemiBold,
        fontSize: 16,
        lineHeight: 24
    },
    seeMore: {
        fontFamily: Fonts.Poppins_500Medium,
        fontSize: 14,
        lineHeight: 20,
        color: primary[50]
    },
    bookList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 16
    }
});
