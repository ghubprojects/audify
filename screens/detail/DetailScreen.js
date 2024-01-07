import { useEffect, useRef, useState } from 'react';
import {
    Alert,
    Image,
    RefreshControl,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    ToastAndroid,
    TouchableOpacity,
    View
} from 'react-native';
import { useSelector } from 'react-redux';
import SyncStorage from 'sync-storage';

import { Badge, CustomButton } from 'components';
import { BookReview, StarRating } from 'features';

import * as assessService from 'services/assess';
import * as bookService from 'services/book';

import { DocumentIcon } from 'assets/icons';
import { PenIcon, PlayIcon, PlusIcon } from 'assets/icons/light';
import { neutral, primary } from 'styles/colors';
import { ROUTES } from 'utils/constants';
import { Fonts } from 'utils/enums';

const DetailScreen = ({ navigation }) => {
    const { current: currentBook } = useSelector((state) => state.book);

    const [refreshing, setRefreshing] = useState(false);
    const [bookData, setBookData] = useState({});
    const [comment, setComment] = useState('');
    const [userBookRate, setUserBookRate] = useState(0);
    const userRate = useRef(0);
    const isExistComment = useRef(false);

    const getBookData = () => {
        bookService
            .getByIdAsync(currentBook.bookId)
            .then((res) => {
                setBookData(res.data);
                console.log('Detail Screen: get book:', bookData);
            })
            .catch((err) => console.log(err));
    };

    const getAssessData = () => {
        assessService
            .getByBookIdAsync(currentBook.bookId, SyncStorage.get('authToken'))
            .then((res) => {
                console.log('Detail screen: get comment:', res.data);
                if (res.data.comment) {
                    isExistComment.current = true;
                    setComment(res.data.comment);
                    setUserBookRate(res.data.rate);
                }
            })
            .catch((err) => console.log(err));
    };

    const loadData = () => {
        getBookData();
        getAssessData();
    };

    // Lấy dữ liệu đầy đủ khi mounted
    useEffect(() => {
        console.log('Detail screen: current book id:', currentBook.bookId);
        loadData();
    }, [refreshing]);

    // Chuyển hướng đến Player Screen
    const navigateToPlayer = (book) => {
        navigation.navigate(ROUTES.PLAYER, { id: book.bookId, name: book.title });
    };

    /**
     * Handle Book Rating and Comment
     */

    // Update rate
    const updateRate = (rate) => {
        userRate.current = rate;
        console.log('updateRate', userRate.current);
    };

    // Tạo comment
    const handleCreateComment = () => {
        if (userRate.current === 0) {
            Alert.alert('Error', 'Please take a moment to rate it!', [
                { text: 'Close', onPress: () => {} }
            ]);
            return;
        }
        console.log('BookComment: create comment:', comment);
        assessService
            .addAsync(
                currentBook.bookId,
                comment,
                userRate.current,
                SyncStorage.get('authToken')
            )
            .then((res) => {
                ToastAndroid.show('Add comment successfully !', ToastAndroid.SHORT);
                setRefreshing(true);
                setTimeout(() => {
                    setRefreshing(false);
                }, 500);
            })
            .catch((err) => console.log(err));
    };

    // Cập nhật comment
    const handleUpdateComment = () => {
        if (userRate.current === 0) {
            Alert.alert('Error', 'Please take a moment to rate it!', [
                { text: 'Close', onPress: () => {} }
            ]);
            return;
        }
        console.log('BookComment: update comment:', comment);
        assessService
            .updateAsync(
                currentBook.bookId,
                comment,
                userRate.current,
                SyncStorage.get('authToken')
            )
            .then((res) => {
                ToastAndroid.show('Update comment successfully !', ToastAndroid.SHORT);
                setRefreshing(true);
                setTimeout(() => {
                    setRefreshing(false);
                }, 500);
            })
            .catch((err) => console.log(err));
    };

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={() => {
                        setRefreshing(true);
                        setTimeout(() => {
                            setRefreshing(false);
                        }, 500);
                    }}
                />
            }
        >
            <View style={styles.posterWrapper}>
                <Image source={{ uri: bookData.coverImgURL }} style={styles.poster} />
            </View>

            <View style={styles.titleAndAuthor}>
                <Text style={styles.title}>{bookData.title}</Text>
                <Text style={styles.author}>{bookData.author}</Text>
            </View>

            <View style={styles.ratingAndCategories}>
                <View style={styles.ratingWrapper}>
                    <StarRating rating={currentBook.rate} size={24} />
                    <Text style={styles.rating}>{bookData.rate}</Text>
                </View>

                <View style={styles.categories}>
                    <Badge title={bookData.category} />
                </View>
            </View>

            <View style={styles.actions}>
                <CustomButton
                    type='primary'
                    title='Play Audio'
                    onPress={() => navigateToPlayer(bookData)}
                    icon={<PlayIcon type='outline' color={neutral.white} size={20} />}
                />
                <CustomButton
                    type='outline'
                    title='Read Book'
                    onPress={() => console.log('Outline Button Pressed')}
                    icon={<DocumentIcon color={primary[50]} size={20} />}
                />
            </View>

            <View style={styles.summary}>
                <Text style={styles.summaryTitle}>Summary</Text>
                <Text style={styles.summaryText}>{bookData.description}</Text>
            </View>

            <View style={styles.review}>
                <Text style={styles.reviewTitle}>Review</Text>
                <BookReview data={bookData.assess ?? []} reload={refreshing} />
            </View>

            <View style={styles.summary}>
                <Text style={styles.summaryTitle}>Rating</Text>
                <StarRating rating={userBookRate} size={24} handleRate={updateRate} />
            </View>

            <View style={styles.review}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.commentTitle}>Comment</Text>
                    {isExistComment.current ? (
                        <TouchableOpacity onPress={handleUpdateComment}>
                            <PenIcon />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={handleCreateComment}>
                            <PlusIcon />
                        </TouchableOpacity>
                    )}
                </View>
                <View style={styles.wrapper}>
                    <TextInput
                        placeholder='Your comment...'
                        style={[styles.content, styles.input]}
                        value={comment}
                        onChangeText={(text) => setComment(text)}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default DetailScreen;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 32,
        backgroundColor: neutral.white
    },

    posterWrapper: {
        marginTop: 12,
        alignItems: 'center'
    },
    poster: {
        width: 240,
        height: 240,
        borderRadius: 12
    },

    titleAndAuthor: {
        gap: 4,
        marginTop: 28,
        marginBottom: 16
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

    ratingAndCategories: {
        gap: 10
    },
    ratingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12
    },
    rating: {
        fontFamily: Fonts.Poppins_400Regular,
        fontSize: 20,
        lineHeight: 30,
        color: neutral[50]
    },
    categories: {
        flexDirection: 'row',
        gap: 8
    },
    actions: {
        marginVertical: 32,
        flexDirection: 'row',
        gap: 16,
        justifyContent: 'center'
    },

    summary: {
        gap: 12
    },
    summaryTitle: {
        fontFamily: Fonts.Poppins_600SemiBold,
        fontSize: 14,
        lineHeight: 21,
        color: neutral[80]
    },
    summaryText: {
        fontFamily: Fonts.Poppins_400Regular,
        fontSize: 14,
        lineHeight: 21,
        color: neutral[60],
        textAlign: 'justify'
    },
    reviewTitle: {
        marginTop: 40,
        marginBottom: 20,
        fontFamily: Fonts.Poppins_600SemiBold,
        fontSize: 14,
        lineHeight: 21,
        color: neutral[80]
    },
    review: {
        marginBottom: 32
    },
    titleWrapper: {
        marginTop: 40,
        marginBottom: 20,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    commentTitle: {
        fontFamily: Fonts.Poppins_600SemiBold,
        fontSize: 14,
        lineHeight: 21,
        color: neutral[80]
    },

    // book comment styles
    wrapper: {
        gap: 16
    },
    header: {
        flexDirection: 'row',
        gap: 20
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 8
    },
    readerAndRating: {
        justifyContent: 'center'
    },
    reader: {
        fontFamily: Fonts.Poppins_500Medium,
        fontSize: 14,
        lineHeight: 21,
        color: neutral[80]
    },
    ratingDetail: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    ratingDate: {
        fontFamily: Fonts.Poppins_400Regular,
        fontSize: 10,
        lineHeight: 15,
        color: neutral[50]
    },
    content: {
        fontFamily: Fonts.Poppins_400Regular,
        fontSize: 14,
        lineHeight: 21,
        color: neutral[60]
    },
    input: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 8,

        fontFamily: Fonts.Poppins_500Medium,
        fontSize: 14,
        lineHeight: 20,

        backgroundColor: neutral[5]
    }
});
