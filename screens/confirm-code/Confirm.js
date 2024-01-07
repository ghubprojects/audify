import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg from 'react-native-svg';
import SyncStorage from 'sync-storage';

import { LogoLight } from 'assets/icons/light';
import { CustomInput, CustomLoginButton } from 'components';
import * as userService from 'services/user';
import { ROUTES } from 'utils/constants';
import { Fonts } from 'utils/enums';

export default function Confirm() {
    const navigation = useNavigation();
    const [code, setCode] = useState();
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');

    const verifyCode = async () => {
        try {
            const response = await userService.verifyResetCode(SyncStorage.get('emailSent'), code);
            console.log('VerifyResetCode ' + response.status);
            if (response.status == 200) {
                console.log(response.data);
                SyncStorage.set('resetPassToken', response.data.accessToken);
                setVisible(false);
                navigation.navigate(ROUTES.RESET_PASSWORD);
            } else {
                console.log(response.status);
                console.log(response.data);
            }
        } catch (error) {
            console.log('Error: ', error);
            if (error.response && error.response.status == 400) {
                setMessage(error.response.data.message);
                setVisible(true);
            } else {
                console.log('Failed to verify reset code', error);
                setMessage(error.response.status);
            }
        }
    };
    const resendCode = async () => {
        try {
            const response = await userService.sendResetCode(SyncStorage.get('emailSent'));
            console.log('Resend code ' + response.status);
            if (response.status == 200) {
                console.log(response.data);
                setMessage(response.data.message);
                setVisible(true);
            } else {
                console.log(response.status);
                console.log(response.data);
            }
        } catch (error) {
            console.log('Failed to login', error);
        }
    };
    return (
        <View style={styles.root}>
            <Svg height='200' width='200' viewBox='-5 -10 50 50'>
                <LogoLight />
            </Svg>
            <Text
                style={[
                    { fontFamily: Fonts.Poppins_600SemiBold },
                    { fontSize: 16 },
                    { marginBottom: 16 },
                    { alignSelf: 'flex-start' },
                    { marginLeft: 60 }
                ]}
            >
                Confirmation Code
            </Text>
            <Text
                style={[
                    { fontFamily: Fonts.Poppins_400Regular },
                    { fontSize: 14 },
                    { marginTop: 5 }
                ]}
            >
                Enter the confirmation code we sent to
            </Text>
            <Text
                style={[
                    { fontFamily: Fonts.Poppins_600SemiBold },
                    { fontSize: 14 },
                    { alignSelf: 'flex-start' },
                    { marginLeft: 60 },
                    { marginBottom: 10 }
                ]}
            >
                {SyncStorage.get('emailSent')}.
            </Text>
            <CustomInput
                value={code}
                onChangeText={(text) => setCode(text)}
                placeholder='Confirmation Code'
                width={295}
                marginBottom={15}
            />
            <Text style={[{ color: 'red' }, { opacity: visible ? 1 : 0 }, { width: 295 }]}>
                {message}
            </Text>
            <View style={styles.row}>
                <Text
                    style={[
                        { height: 20 },
                        { fontFamily: Fonts.Poppins_400Regular },
                        { marginRight: 2 }
                    ]}
                >
                    Didn’t receive the code?
                </Text>
                <CustomLoginButton
                    onPress={() => resendCode()}
                    text='Resend'
                    bgColor='#FFFFFF'
                    fgColor='#F77A55'
                    w={60}
                    h={20}
                />
            </View>
            <CustomLoginButton
                onPress={() => verifyCode()}
                text='Submit'
                bgColor='#4838D1'
                w={295}
                h={56}
                pad={15}
            />
            <CustomLoginButton
                onPress={() => navigation.navigate(ROUTES.FORGET_PASSWORD)}
                text='Back'
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
    }
});
