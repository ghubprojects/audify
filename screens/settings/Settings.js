import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SyncStorage from 'sync-storage';

import * as userService from 'services/user';
import { neutral, primary } from 'styles/colors';
import { ROUTES } from 'utils/constants';
import { Fonts } from 'utils/enums';

export default function Settings() {
    const navigation = useNavigation();
    const [userName, setUserName] = useState('');
    const [imgProfile, setImgProfile] = useState('notNullString');

    useEffect(() => {
        userService
            .getUserInfo(SyncStorage.get('authToken'))
            .then((res) => {
                setUserName(res.data.firstName + ' ' + res.data.lastName);
                setImgProfile(res.data.imgURL);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }, [SyncStorage.get('authToken')]);
    return (
        <View style={styles.container}>
            <View style={styles.topSettingPage}>
                <Icon
                    name='chevron-back-outline'
                    size={22}
                    color='#ccc'
                    onPress={() => {
                        navigation.goBack();
                    }}
                    style={styles.iconGoBack}
                />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Settings</Text>
                </View>
            </View>

            <View style={styles.profileWrapper}>
                <Image
                    style={styles.img}
                    source={{
                        uri: imgProfile
                    }}
                />
                <View style={styles.infoWrapper}>
                    <Text style={styles.name}>{userName}</Text>
                    <Text
                        style={styles.viewProfile}
                        onPress={() => navigation.navigate(ROUTES.PROFILE)}
                    >
                        View Profile
                    </Text>
                </View>
            </View>

            <View style={styles.space}></View>

            <View style={styles.options}>
                <Text style={styles.nameOfOptions}>Notifications</Text>
            </View>

            <View style={styles.options}>
                <Text style={styles.nameOfOptions}>Data and Storages</Text>
            </View>

            <View style={styles.space}></View>

            <View style={styles.options}>
                <Text style={styles.nameOfOptions}>Register</Text>
            </View>

            <View style={styles.options}>
                <Text style={styles.nameOfOptions}>Linked Account</Text>
            </View>

            <View style={styles.space}></View>

            <View style={styles.options}>
                <Text style={styles.nameOfOptions}>About Audify</Text>
            </View>

            <View style={styles.logOutWrapper}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate(ROUTES.LOGIN)}
                >
                    <Text style={styles.text}>Log out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 46
    },
    titleContainer: {
        position: 'absolute',
        left: '25%',
        right: '25%',
        alignItems: 'center',
        paddingTop: 10
    },
    title: {
        fontFamily: Fonts.Poppins_600SemiBold,
        fontSize: 18,
        color: neutral[80]
    },
    topSettingPage: {
        paddingTop: 10,
        flexDirection: 'row',
        marginTop: 10
    },
    iconGoBack: {
        paddingLeft: 10
    },
    profileWrapper: {
        flexDirection: 'row',
        marginTop: 30,
        paddingLeft: 20,
        paddingBottom: 15,
        paddingTop: 15,
        borderTopWidth: 0.5,
        borderTopColor: '#ccc'
    },
    img: {
        height: 72,
        width: 72,
        borderRadius: 72 / 2,
        resizeMode: 'stretch'
    },
    infoWrapper: {
        justifyContent: 'center',
        paddingLeft: 20
    },
    name: {
        fontFamily: Fonts.Poppins_500Medium,
        fontSize: 16,
        color: neutral[80]
    },
    viewProfile: {
        fontFamily: Fonts.Poppins_400Regular,
        fontSize: 12,
        color: primary[50]
    },
    space: {
        backgroundColor: '#F5F5FA',
        height: '5%'
    },
    options: {
        height: 50,
        justifyContent: 'center',
        borderBottomColor: '#F5F5FA',
        borderBottomWidth: 1,
        paddingLeft: 30
    },
    nameOfOptions: {
        fontFamily: Fonts.Poppins_400Regular,
        fontSize: 14,
        color: neutral[80]
    },
    logOutWrapper: {
        marginTop: 40,
        alignItems: 'center'
    },
    btn: {
        height: 60,
        width: '90%',
        borderColor: '#F77A55',
        borderRadius: 8,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontFamily: Fonts.Poppins_500Medium,
        fontSize: 16,
        color: '#F77A55'
    }
});
