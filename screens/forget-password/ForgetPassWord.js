import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { LogoLight } from 'assets/icons/light';
import { CustomLoginButton } from 'components';
import { CustomLoginInput } from 'components';
import { Fonts } from 'utils/enums';

import Svg from 'react-native-svg';

import Logo from '../../assets/images/logo.png';

export default function ForgetPassWord() {
    return (
        <View style={styles.root}>
            <Svg height='200' width='200' viewBox='-5 -10 50 50'>
                <LogoLight />
            </Svg>
            <Text
                style={[
                    {fontFamily: Fonts.Poppins_600SemiBold},
                    {fontSize: 16},
                    {marginBottom: 16},
                    {alignSelf: 'flex-start'},
                    {marginLeft: 60},

                ]}
            >
                Forget Password
            </Text>
            <Text
                style={[
                    {width: 292},
                    {fontFamily: Fonts.Poppins_400Regular},
                    {fontSize: 14},
                    {marginBottom: 10}
                ]}
            >
                Please fill email or phone number
            and we will send you a link to get back into your account. 
            </Text>
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
