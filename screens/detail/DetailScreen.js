import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { neutral } from 'styles/colors';
import { Fonts } from 'utils/enums';

const DetailScreen = () => {
    const { current: currentBook } = useSelector((state) => state.book);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={currentBook.poster} style={styles.poster} />
            <Text style={styles.title}>{currentBook.title}</Text>
            <Text style={styles.author}>{currentBook.author}</Text>
            <View style={styles.actions}>
                <Button title='Play Audio' />
                <Button title='Read Book' />
            </View>
        </ScrollView>
    );
};

export default DetailScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: neutral.white,
        padding: 16,
        alignItems: 'center'
    },
    poster: {
        width: 240,
        height: 240
    },
    title: {
        fontFamily: Fonts.Poppins_500Medium,
        fontSize: 20,
        lineHeight: 30
    },
    author: {
        fontFamily: Fonts.Poppins_400Regular,
        fontSize: 16,
        lineHeight: 24,
        color: neutral[50]
    },
    actions: {
        flexDirection: 'row',
        gap: 16
    }
});
