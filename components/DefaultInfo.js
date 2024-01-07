import { StyleSheet, Text, View } from 'react-native';
import { neutral } from 'styles/colors';
import { Fonts } from 'utils/enums';

const DefaultInfo = ({ onPress, constText }) => {
    return (
        <View style={styles.container}>
            <View style={styles.part}>
                <Text style={styles.text}>First Name</Text>
            </View>
            <View style={styles.part}>
                <Text style={styles.text}>Last Name</Text>
            </View>
            <View style={styles.part}>
                <Text style={styles.text}>Email</Text>
            </View>
            <View style={styles.part}>
                <Text style={styles.text}>Phone</Text>
            </View>
            <View style={styles.part}>
                <Text style={styles.text}>Date Birth</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 134
    },
    part: {
        height: 52,
        textAlign: 'center',
        borderBottomColor: '#F3F1FE',
        borderBottomWidth: 1
    },
    text: {
        fontFamily: Fonts.Poppins_600SemiBold,
        fontSize: 12,
        marginTop: 16,
        marginLeft: 28,
        color: neutral[80]
    }
});

export default DefaultInfo;
