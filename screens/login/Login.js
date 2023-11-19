import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { CustomLoginText } from "components";
import { CustomLoginButton } from "components";
import { CustomLoginInput } from "components";
import { LoginIconButton } from "components";

import Logo from '../../assets/images/logo.png';
import GoogleLogo from "../../assets/images/Google.png";
import FacebookLogo from "../../assets/images/Facebook.png"
import TwitterLogo from "../../assets/images/Twitter.png"

import {useNavigation} from '@react-navigation/native';



export default function Login() {
    const navigation = useNavigation(); 
    return (
        <View style={styles.root}>
            <Image
                source={Logo}
                style={styles.logo}
            />
            <CustomLoginText
                textValue='Thông tin tài khoản'
                weight={600}
                marginVer={16}
                align='flex-start'
                marginL={60}
            />
            <CustomLoginInput
                placeholder="Email"
            />
            <CustomLoginInput
                placeholder="Mật khẩu"
            />
            <View style={styles.row2}>
                <TouchableOpacity style={styles.checkbox}>
                </TouchableOpacity>
                <CustomLoginText
                    textValue={'Ghi nhớ đăng nhập'}
                />
            </View>
            <CustomLoginButton
                onPress={() => navigation.navigate('BottomTabNavigator')}
                text='Đăng nhập'
                bgColor='#4838D1'
                w={295}
                h={56}
                pad={15}
            />
            <CustomLoginButton
                onPress={''}
                text='Quên mật khẩu ?'
                bgColor='#FFFFFF'
                fgColor='#F77A55'
                w={295}
                h={29}
                align='flex-end'
            />
            <CustomLoginText
                textValue='Hoặc đăng nhập bằng'
            />
            <View style={styles.row}>
                <LoginIconButton
                    onPress={''}
                    bgColor='#FFFFFF'
                    imgSrc={GoogleLogo}
                />
                <LoginIconButton
                    onPress={''}
                    bgColor='#FFFFFF'
                    imgSrc={FacebookLogo}
                />
                <LoginIconButton
                    onPress={''}
                    bgColor='#FFFFFF'
                    imgSrc={TwitterLogo}
                />
            </View>
            <View style={styles.row}>
                <CustomLoginText
                    textValue='Bạn chưa có tài khoản ? '
                />
                <CustomLoginButton
                    onPress={''}
                    text='Đăng ký tại đây'
                    bgColor='#FFFFFF'
                    fgColor='#F77A55'
                    w={100}
                    h={21}
                />
            </View>
            <View style={styles.cache}>

            </View>
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
        width: 100,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    row2: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginLeft: 65,
        marginBottom: 16,
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
        marginRight: 12,
    }
});