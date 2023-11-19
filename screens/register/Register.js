import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { LogoLight } from 'assets/icons/light';
import { CustomLoginText } from 'components';
import { CustomLoginButton } from 'components';
import { CustomLoginInput } from 'components';

import Svg from 'react-native-svg';

import Logo from '../../assets/images/logo.png';

export default function Register() {
    return (
        <View style={styles.root}>
            <Svg height='200' width='200' viewBox='-5 -10 50 50'>
                <LogoLight />
            </Svg>
            <CustomLoginText textValue='Đăng ký' weight={600} marginVer={16} />
            <CustomLoginInput placeholder='Email' />
            <CustomLoginInput placeholder='Mật khẩu' />
            <CustomLoginInput placeholder='Ngày tháng năm sinh' />
            <Text style={styles.mainText}>
                Bằng việc đồng ý đăng ký, bạn đã đồng ý với
                <Text style={{ color: 'orange', fontSize: 14 }}> Điều khoản</Text>
                <Text>, </Text>
                <Text style={{ color: 'orange', fontSize: 14 }}>Chính sách bảo mật</Text>
                <Text> và </Text>
                <Text style={{ color: 'orange', fontSize: 14 }}>Chính sách cookies.</Text>
            </Text>
            <CustomLoginButton
                onPress={''}
                text='Đăng ký'
                bgColor='#4838D1'
                w={295}
                h={56}
                pad={15}
            />
            <CustomLoginButton
                onPress={''}
                text='Hủy'
                bgColor='#FFFFFF'
                fgColor='#4838D1'
                w={295}
                h={56}
                bColor='#4838D1'
                bWidth={2}
            />
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
    mainText: {
        width: 267,
        height: 60,
        marginVertical: 10
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    }
});
