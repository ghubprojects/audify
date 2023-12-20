import { LogoLight } from 'assets/icons/light';
import { CustomInput, CustomLoginButton } from 'components';
import { StyleSheet, Text, View } from 'react-native';
import { neutral } from 'styles/colors';
import { Fonts } from 'utils/enums';

export default function ForgetPassWord() {
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
                    { fontSize: 14 },
                    { marginBottom: 10 }
                ]}
            >
                Please fill email or phone number and we will send you a link to get back into your
                account.
            </Text>
            <CustomInput placeholder='Email/ Phone Number' />
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
    container: {
        paddingHorizontal: 40,
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
