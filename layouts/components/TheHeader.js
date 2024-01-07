import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { LogoLight, SettingLightIcon } from 'assets/icons/light';
import { accent, primary } from 'styles/colors';
import { ROUTES } from 'utils/constants';

const TheHeader = ({ style }) => {
    const navigation = useNavigation();
    const settings = () => {
        navigation.navigate(ROUTES.SETTINGS);
    };
    return (
        <View style={[style, styles.header]}>
            <View style={styles.appTitle}>
                <LogoLight />
                <View style={styles.appName}>
                    <Text style={styles.name}>Audify</Text>
                    <Text style={styles.dot}>.</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => settings()}>
                <SettingLightIcon />
            </TouchableOpacity>
        </View>
    );
};

export default TheHeader;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    appTitle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    appName: {
        flexDirection: 'row',
        marginLeft: 8
    },
    name: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 24,
        lineHeight: 30,
        color: primary[50]
    },
    dot: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 24,
        lineHeight: 30,
        color: accent[50]
    }
});
