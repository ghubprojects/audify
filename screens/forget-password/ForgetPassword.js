import { LogoLight } from 'assets/icons/light';
import { CustomInput, CustomLoginButton } from 'components';
import { StyleSheet, Text, View } from 'react-native';
import { neutral } from 'styles/colors';
import { Fonts } from 'utils/enums';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ROUTES } from 'utils/constants';
import * as userService from 'services/user';
import { Alert } from 'react-native';
import SyncStorage from 'sync-storage';

export default function ForgetPassWord() {
    const navigation = useNavigation();
    const [email, setEmail] = useState();
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');
    const sendMail = async () => {
        try {
            const response = await userService.sendResetCode(email);
            console.log('ResetCode ' + response.status);
            if (response.status == 200) {
                SyncStorage.set('emailSent', email);
                console.log(response.data);
                navigation.navigate(ROUTES.CONFIRM_EMAIL);
            } else {
                console.log(response.status);
                console.log(response.data);
            }
        } catch (error) {
            console.log('Failed to login', error);
            if (error.response && error.response.status == 400) {
                setMessage(error.response.data.message);
                setVisible(true);
            } else {
                console.log('Failed to send reset code', error);
                setMessage(error.response.status);
            }
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.logoWrapper}>
                <LogoLight size={120} />
            </View>

            <Text
                style={[
                    { fontFamily: Fonts.Poppins_600SemiBold },
                    { fontSize: 16 },
                    { marginBottom: 16 },
                    { alignSelf: 'flex-start' },
                    { marginLeft: 60 }
                ]}
            >
                Forget Password
            </Text>
            <Text
                style={[
                    { width: 292 },
                    { fontFamily: Fonts.Poppins_400Regular },
                    { fontSize: 13 },
                    { marginBottom: 10 }
                ]}
            >
                Please fill email or phone number and we will send you a code to reset your
                password.
            </Text>
            <CustomInput
                width={295}
                placeholder='Fill your email...'
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <Text style={[{ color: 'red' }, { opacity: visible ? 1 : 0 }]}>{message}</Text>
            <CustomLoginButton
                onPress={() => sendMail()}
                text='Submit'
                bgColor='#4838D1'
                w={295}
                h={56}
                pad={15}
            />
            <CustomLoginButton
                onPress={() => navigation.navigate(ROUTES.LOGIN)}
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
    container: {
        paddingHorizontal: 50,
        backgroundColor: neutral.white,
        height: '100%'
    },
    logoWrapper: {
        marginTop: 60,
        marginBottom: 24
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
