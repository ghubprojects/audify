import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { LogoLight } from 'assets/icons/light';
import { CustomLoginText } from 'components';
import { CustomLoginButton } from 'components';
import { CustomLoginInput } from 'components';

import Svg from 'react-native-svg';

import Logo from '../../assets/images/logo.png';

export default function ForgetPassWord() {
    return (
        <View style={styles.root}>
            <Svg height='200' width='200' viewBox='-5 -10 50 50'>
                <LogoLight />
            </Svg>
            <CustomLoginText
                textValue='Forget Password'
                align='flex-start'
                marginVer={10}
                marginL={60}
                fweight={'bold'}
            />
            <CustomLoginText 
            textValue='Please fill email or phone number
            and we will send you a link to get back into your account. ' 
            width={290}
            fsize={15}
            marginVer={20} />
            <CustomLoginInput placeholder='Email/ Phone Number' />
            <CustomLoginButton
                onPress={''}
                text='Submit'
                bgColor='#4838D1'
                w={295}
                h={56}
                pad={15}
            />
            <CustomLoginButton
                onPress={''}
                text='Cancel'
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
        width: 300,
        height: 24,
        marginBottom: 10
    },
    row: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        alignItems: 'center',
        marginLeft: 60,
        marginBottom: 10
    },
});
