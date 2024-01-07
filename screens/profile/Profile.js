import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import SyncStorage from 'sync-storage';

import DefaultInfo from 'components/DefaultInfo';
import Icon from 'react-native-vector-icons/Ionicons';
import * as userService from 'services/user';
import { neutral, primary } from 'styles/colors';
import { ROUTES } from 'utils/constants';
import { Fonts } from 'utils/enums';

export default function Profile() {
    const navigation = useNavigation();
    const [userData, setUserData] = useState({});
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('0987654321');
    const [dateBirth, setDateBirth] = useState('01/01/2002');

    useEffect(() => {
        userService
            .getUserInfo(SyncStorage.get('authToken'))
            .then((res) => {
                setUserData(res.data);
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setEmail(res.data.email);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }, [SyncStorage.get('authToken')]);

    const save = () => {
        Alert.alert(
            'Confirmation',
            'Want update your information? \nYou will be navigated to homepage after updating',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                { text: 'OK', onPress: () => update() }
            ]
        );
    };

    const update = async () => {
        try {
            const response = await userService.changeUserInfo(
                firstName,
                lastName,
                SyncStorage.get('authToken')
            );
            if (response.status == 200) {
                console.log('Update the information successfully');
                navigation.navigate(ROUTES.HOME);
            }
        } catch (error) {
            console.log('Failed to update', error);
        }
    };

    return (
        <View style={styles.root}>
            <View style={styles.header}>
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
                    <Text style={styles.title}>Profile</Text>
                </View>
                <TouchableOpacity onPress={() => save()}>
                    <Text style={styles.save}>Save</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.imageHolder}>
                <Image
                    style={{ borderRadius: 20, width: 160, height: 160 }}
                    source={{
                        uri: userData['imgURL']
                    }}
                />
            </View>
            <View style={styles.profileInfo}>
                <DefaultInfo />
                <View style={styles.UserContainer}>
                    <View style={styles.UserPart}>
                        <TextInput
                            style={styles.UserText}
                            value={firstName}
                            onChangeText={(text) => setFirstName(text)}
                        ></TextInput>
                    </View>
                    <View style={styles.UserPart}>
                        <TextInput
                            style={styles.UserText}
                            value={lastName}
                            onChangeText={(text) => setLastName(text)}
                        ></TextInput>
                    </View>
                    <View style={styles.UserPart}>
                        <TextInput
                            style={styles.UserText}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        ></TextInput>
                    </View>
                    <View style={styles.UserPart}>
                        <TextInput
                            style={styles.UserText}
                            value={phone}
                            onChangeText={(text) => setPhone(text)}
                        ></TextInput>
                    </View>
                    <View style={styles.UserPart}>
                        <TextInput
                            style={styles.UserText}
                            value={dateBirth}
                            onChangeText={(text) => setDateBirth(text)}
                        ></TextInput>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    header: {
        width: 360,
        height: 88,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#F3F1FE',
        borderBottomWidth: 1,
        marginTop: 46,
        paddingHorizontal: 16
    },
    imageHolder: {
        width: 375,
        height: 232,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#F3F1FE',
        borderBottomWidth: 1
    },
    profileInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: Fonts.Poppins_600SemiBold,
        fontSize: 18,
        color: neutral[80]
    },
    save: {
        fontFamily: Fonts.Poppins_500Medium,
        fontSize: 14,
        lineHeight: 20,
        color: primary[50]
    },
    UserContainer: {
        width: 223
    },
    UserPart: {
        height: 52,
        textAlign: 'center',
        borderBottomColor: '#F3F1FE',
        borderBottomWidth: 1
    },
    UserText: {
        fontFamily: Fonts.Poppins_400Regular,
        fontSize: 12,
        marginTop: 14,
        marginLeft: 12,
        color: neutral[80]
    }
});
