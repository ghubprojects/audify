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

export default function ResetPass() {
    const resetPassToken = SyncStorage.get('resetPassToken');
    const navigation = useNavigation();
    const [password, setPassword] = useState();
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');

    const resetPassword = async () => {
        try {
            const response = await userService.resetPass(password, resetPassToken);
            console.log('ResetPassword ' + response.status);
            if (response.status == 200) {
                console.log(response.data);
                navigation.navigate(ROUTES.LOGIN);
            } else {
                console.log(response.status);
                console.log(response.data);
            }
        } catch (error) {
            console.log('Error: ', error);
            if (error.response && error.response.status == 400) {
                console.log('Error: ', error.response.data.message);
                setMessage(error.response.data.message);
                setVisible(true);
            } else {
                console.log('Failed to reset password', error);
                setMessage(error.response.status);
            }
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
                    { marginBottom: 10 },
                    { alignSelf: 'flex-start' },
                    { marginLeft: 60 }
                ]}
            >
                Reset Password
            </Text>
            <Text
                style={[
                    { width: 292 },
                    { fontFamily: Fonts.Poppins_400Regular },
                    { fontSize: 14 },
                    { marginBottom: 10 }
                ]}
            >
                Please enter your new password for
                <Text
                    style={[
                        { fontFamily: Fonts.Poppins_600SemiBold },
                        { fontSize: 14 },
                        { alignSelf: 'flex-start' },
                        { marginLeft: 60 },
                        { marginBottom: 10 }
                    ]}
                >
                    {SyncStorage.get('emailSent')}
                </Text>
                before login again.
            </Text>
            <CustomInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder='New password...'
                width={295}
                marginBottom={15}
            />
            <Text style={[{ color: 'red' }, { opacity: visible ? 1 : 0 }, { width: 295 }]}>
                {message}
            </Text>
            <CustomLoginButton
                onPress={() => resetPassword()}
                text='Submit'
                bgColor='#4838D1'
                w={295}
                h={56}
                pad={15}
            />
            <CustomLoginButton
                onPress={() => navigation.navigate(ROUTES.CONFIRM_EMAIL)}
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
