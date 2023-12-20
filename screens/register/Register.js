import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { LogoLight } from 'assets/icons/light';
import { CustomLoginText } from 'components';
import { CustomLoginButton } from 'components';
import { CustomLoginInput } from 'components';

import Svg from 'react-native-svg';

import Logo from '../../assets/images/logo.png';
import { Fonts } from 'utils/enums';

export default function Register() {
    return (
        <View style={styles.root}>
            <Svg height='200' width='200' viewBox='-5 -10 50 50'>
                <LogoLight />
            </Svg>
            <Text
                style={[
                    { alignSelf: 'flex-start' },
                    { textAlign: 'left' },
                    { marginBottom: 10 },
                    { marginLeft: 60 },
                    { fontFamily: Fonts.Poppins_600SemiBold },
                    { fontSize: 16 }
                ]}
            >
                Register
            </Text>
            <CustomLoginInput placeholder='Email' />
            <CustomLoginInput placeholder='Password' />
            <CustomLoginInput placeholder='Date of Birth' />
            <Text style={styles.mainText}>
                By signing up, you agree to our
                <Text style={{ color: 'orange' }}> Terms</Text>
                <Text>, </Text>
                <Text style={{ color: 'orange' }}>Data Policy</Text>
                <Text> and </Text>
                <Text style={{ color: 'orange' }}>Cookies Policy.</Text>
            </Text>
            <CustomLoginButton
                onPress={''}
                text='Register'
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
        fontFamily: Fonts.Poppins_400Regular,
        fontSize: 12,
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
