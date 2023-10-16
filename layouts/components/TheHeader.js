import { StyleSheet, Text, View } from 'react-native';

import { LogoLight, SettingLightIcon } from 'assets/icons/light';
import { accent, primary } from 'styles/colors';

const TheHeader = ({ style }) => {
    return (
        <View style={[style, styles.header]}>
            <View style={styles.appTitle}>
                <LogoLight />
                <View style={styles.appName}>
                    <Text style={styles.name}>Audify</Text>
                    <Text style={styles.dot}>.</Text>
                </View>
            </View>
            <SettingLightIcon />
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
