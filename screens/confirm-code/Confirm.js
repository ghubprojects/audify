import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { LogoLight } from 'assets/icons/light';
import { CustomLoginText } from 'components';
import { CustomLoginButton } from 'components';
import { CustomLoginInput } from 'components';

import Svg from 'react-native-svg';

import Logo from '../../assets/images/logo.png';

export default function Confirm() {
    return (
        <View style={styles.root}>
            <Svg height='200' width='200' viewBox='-5 -10 50 50'>
                <LogoLight />
            </Svg>
            <CustomLoginText
                textValue='Confirmation Code'
                marginVer={16}
                align='flex-start'
                marginL={60}
                fweight={"bold"}
            />
            <CustomLoginText 
            textValue='Enter the confirmation code we sent to ' 
            width={290}
            fsize={15} />
            <CustomLoginText 
            textValue='your@mail.com.' 
            width={290} 
            marginVer={12}
            fsize={15}
            fweight={"bold"} />
            <CustomLoginInput placeholder='Confirmation Code' />
            <View style={styles.row}>
                <Text height = {20}>
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
