import { useNavigation } from '@react-navigation/native';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { FacebookIcon, GoogleIcon, LogoLight, TwitterIcon } from 'assets/icons/light';
import { CustomButton, CustomInput } from 'components';
import { accent, neutral } from 'styles/colors';
import { ROUTES } from 'utils/constants';
import { Fonts } from 'utils/enums';
import { useEffect, useState } from 'react';

import * as userService from 'services/user';
import SyncStorage from 'sync-storage';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const handleLogin = (email, password) => {
    //     console.log(email, password);
    //     const response = userService.login(email, password);
    //     console.log(response);
    // };
    const login = async () => {
        try {
            const response = await userService.login(email, password);
            console.log("Login " +  response.status);
            if (response.status == 200) {
                console.log(response.data.accessToken);
                SyncStorage.set('authToken', response.data.accessToken);
                console.log(SyncStorage.get('authToken'));
                navigation.navigate('Root');
            }
            else {
                console.log(response.status);
            }
        } catch (error) {
            console.log('Failed to login', error);
            
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoWrapper}>
                <LogoLight size={120} />
            </View>

            <View style={styles.loginForm}>
                <Text style={styles.formTitle}>Login to Your Account</Text>

                <CustomInput
                    placeholder='Email'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <CustomInput
                    placeholder='Password'
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />

                {/* <CustomButton title='Login' onPress={() => navigation.navigate('Root')} /> */}

                <CustomButton title='Login' onPress={() => login()} />

                <TouchableOpacity
                    style={styles.forgetPasswordBtn}
                    onPress={() => navigation.navigate(ROUTES.FORGET_PASSWORD)}
                >
                    <Text style={styles.linkBtn}>Forget password ?</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.otherLoginTitle}>Or login with</Text>

            <View style={styles.otherLoginMethods}>
                <CustomButton type='outline' icon={<FacebookIcon />} />
                <CustomButton type='outline' icon={<GoogleIcon />} />
                <CustomButton type='outline' icon={<TwitterIcon />} />
            </View>

            <View style={styles.registerWrapper}>
                <Text style={styles.registerText}>Don’t have an account ? </Text>
                <TouchableOpacity
                    style={styles.registerBtn}
                    onPress={() => navigation.navigate(ROUTES.SIGN_UP)}
                >
                    <Text style={styles.linkBtn}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 40,
        backgroundColor: neutral.white,
        height: '100%'
    },
    logoWrapper: {
        marginTop: 60,
        marginBottom: 24
    },

    loginForm: {
        width: '100%',
        gap: 16
    },
    formTitle: {
        marginLeft: 8,
        color: '#2E2E5D',
        textAlign: 'left',
        fontFamily: Fonts.Poppins_600SemiBold,
        fontSize: 16
    },

    linkBtn: {
        fontFamily: Fonts.Poppins_500Medium,
        fontSize: 14,
        lineHeight: 20,
        color: accent[50]
    },
    forgetPasswordBtn: {
        textAlign: 'right',
        alignSelf: 'flex-end'
    },

    otherLoginTitle: {
        marginTop: 32,
        marginBottom: 20,
        fontFamily: Fonts.Poppins_400Regular,
        fontSize: 14,
        textAlign: 'center'
    },

    otherLoginMethods: {
        width: '100%',
        flexDirection: 'row',
        gap: 16
    },

    registerWrapper: {
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    registerText: {
        fontFamily: Fonts.Poppins_400Regular,
        fontSize: 14
    }
});

export default Login;
