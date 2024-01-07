import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg from 'react-native-svg';

import { CustomInput, CustomLoginButton } from 'components';
import * as userService from 'services/user';

import { LogoLight } from 'assets/icons/light';
import { ROUTES } from 'utils/constants';
import { Fonts } from 'utils/enums';

export default function Register() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('');
    const [visible, setVisible] = useState(false);

    const register = async () => {
        try {
            const response = await userService.register(email, password, firstName, lastName);
            console.log('Register ' + response.status);
            if (response.status == 200) {
                console.log(response.data);
                setVisible(false);
                navigation.navigate(ROUTES.LOGIN);
            }
        } catch (error) {
            if (error.response && error.response.status == 400) {
                setMessage(error.response.data.message);
                console.log('Failed to register:', message);
                setVisible(true);
            } else {
                console.log('Failed to register', error);
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
            <CustomInput
                marginBottom={10}
                width={295}
                placeholder='Email'
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <CustomInput
                marginBottom={10}
                width={295}
                placeholder='Password'
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <View
                style={[
                    { width: 295 },
                    { flexDirection: 'row' },
                    { justifyContent: 'space-between' }
                ]}
            >
                <CustomInput
                    marginBottom={10}
                    width={140}
                    placeholder='First Name'
                    value={firstName}
                    onChangeText={(text) => setFirstName(text)}
                />
                <CustomInput
                    marginBottom={10}
                    width={140}
                    placeholder='Last Name'
                    value={lastName}
                    onChangeText={(text) => setLastName(text)}
                />
            </View>
            <Text
                style={[
                    { color: 'red' },
                    { opacity: visible ? 1 : 0 },
                    { width: 290 },
                    { justifyContent: 'flex-start' }
                ]}
            >
                {message}
            </Text>
            <Text style={styles.mainText}>
                By signing up, you agree to our
                <Text style={{ color: 'orange' }}> Terms</Text>
                <Text>, </Text>
                <Text style={{ color: 'orange' }}>Data Policy</Text>
                <Text> and </Text>
                <Text style={{ color: 'orange' }}>Cookies Policy.</Text>
            </Text>
            <CustomLoginButton
                onPress={() => register()}
                text='Register'
                bgColor='#4838D1'
                w={295}
                h={56}
                pad={15}
            />
            <CustomLoginButton
                onPress={() => navigation.navigate(ROUTES.LOGIN)}
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
