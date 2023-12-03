import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

import { CustomLoginButton } from 'components';
import { CustomLoginInput } from 'components';
import { LoginIconButton } from 'components';
import { LogoLight } from 'assets/icons/light';
import Logo from '../../assets/images/logo.png';
import GoogleLogo from '../../assets/images/Google.png';
import FacebookLogo from '../../assets/images/Facebook.png';
import TwitterLogo from '../../assets/images/Twitter.png';
import { Fonts } from 'utils/enums';

import { useNavigation } from '@react-navigation/native';

import Svg from 'react-native-svg';

export default function Login() {
    const navigation = useNavigation();
    return (
        <View style={styles.root}>
            <Svg height='200' width='200' viewBox='-5 -10 50 50'>
                <LogoLight />
            </Svg>

            <Text
                style={[
                    styles.text,
                    { alignSelf: 'flex-start'},
                    { textAlign: 'left' },
                    { marginBottom: 16},
                    { marginLeft: 60 },
                    { fontFamily: Fonts.Poppins_600SemiBold},
                ]}
            >
                Login to Your Account
            </Text>
            <CustomLoginInput placeholder='Email' onChangeText={''} />
            <CustomLoginInput placeholder='Password' onChangeText={''} />
            <View style={styles.row2}>
                <TouchableOpacity style={styles.checkbox}></TouchableOpacity>
                <Text
                    style={[      
                        {fontFamily: Fonts.Poppins_400Regular},
                        {fontSize: 12},
                    ]}
                >
                Remember me
                </Text>
            </View>
            <CustomLoginButton
                onPress={''}
                text='Login'
                bgColor='#4838D1'
                w={295}
                h={56}
                pad={15}
            />
            <CustomLoginButton
                onPress={''}
                text='Forget password ?'
                bgColor='#FFFFFF'
                fgColor='#F77A55'
                w={240}
                h={29}
                align='flex-end'
            />
            <Text
                    style={[
                        {fontFamily: Fonts.Poppins_400Regular},
                        {fontSize: 14},
                    ]}
            >
            Or login with
                </Text>
            <View style={styles.row}>
                <LoginIconButton onPress={''} bgColor='#FFFFFF' imgSrc={GoogleLogo} />
                <LoginIconButton onPress={''} bgColor='#FFFFFF' imgSrc={FacebookLogo} />
                <LoginIconButton onPress={''} bgColor='#FFFFFF' imgSrc={TwitterLogo} />
            </View>
            <View style={styles.row}>
                <Text
                    style={[
                        {fontFamily: Fonts.Poppins_400Regular},
                        {fontSize: 14},
                        {marginTop: 2}
                    ]}
            >
                Don’t have an account ?
            </Text>
                <CustomLoginButton
                    onPress={''}
                    text='Register'
                    bgColor='#ffffff'
                    fgColor='#F77A55'
                    w={70}
                    h={24}
                />
            </View>
            <View style={styles.cache}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    logo: {
        position: 'relative',
        marginTop: 50.4,
        marginBottom: 20.6,
        width: 100
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16
    },
    row2: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginLeft: 65,
        marginBottom: 16
    },
    cache: {
        width: 375,
        height: 200,
        backgroundColor: '#FFFFFF'
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#BBB1FA',
        borderRadius: 4,
        marginRight: 12
    },
    text: {
        fontStyle: 'normal',
        fontSize: 16,
        color: '#2E2E5D'
    }
});
