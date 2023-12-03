import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { LogoLight } from 'assets/icons/light';
import { CustomLoginButton } from 'components';
import { CustomLoginInput } from 'components';

import { Fonts } from 'utils/enums';
import Svg from 'react-native-svg';

import Logo from '../../assets/images/logo.png';

export default function Confirm() {
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
                Confirmation Code
            </Text>
            <Text
                style={[
                    {fontFamily: Fonts.Poppins_400Regular},
                    {fontSize: 14},
                    {marginTop: 5}
                ]}
            >
                Enter the confirmation code we sent to 
            </Text>
            <Text
                style={[
                    {fontFamily: Fonts.Poppins_600SemiBold},
                    {fontSize: 14},
                    {alignSelf: 'flex-start'},
                    {marginLeft: 60},
                    {marginBottom: 10}
                ]}
            >
                your@mail.com.
            </Text>
            <CustomLoginInput placeholder='Confirmation Code' />
            <View style={styles.row}>
                <Text
                style={[
                    {height: 20}, 
                    {fontFamily: Fonts.Poppins_400Regular},
                    {marginRight: 2}
                ]} 
                >
                Didn’t receive the code?
                </Text>
                <CustomLoginButton
                    onPress={''}
                    text='Resend'
                    bgColor='#FFFFFF'
                    fgColor='#F77A55'
                    w={60}
                    h={20}
                />
            </View>
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
