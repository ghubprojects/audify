import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { FacebookIcon, GoogleIcon, LogoLight, TwitterIcon } from 'assets/icons/light';
import { CustomButton, CustomInput } from 'components';
import { accent, neutral } from 'styles/colors';
import { ROUTES } from 'utils/constants';
import { Fonts } from 'utils/enums';

const Login = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.logoWrapper}>
                <LogoLight size={120} />
            </View>

            <View style={styles.loginForm}>
                <Text style={styles.formTitle}>Login to Your Account</Text>

                <CustomInput placeholder='Email' onChangeText={() => {}} />
                <CustomInput placeholder='Password' onChangeText={() => {}} />

                <CustomButton title='Login' onPress={() => navigation.navigate('Root')} />

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
