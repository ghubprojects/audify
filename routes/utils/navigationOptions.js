import { ArrowLeftIcon, MoreIcon } from 'assets/icons/light';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Fonts } from 'utils/enums';

export const getDefaultHeaderWithTitle = (route, navigation) => ({
    title:
        route.params.name.length > 30
            ? route.params.name.slice(0, 30) + '...'
            : route.params.name,
    headerTitleAlign: 'center',
    headerTitleStyle: styles.title,
    headerShadowVisible: false,
    headerLeft: () => (
        <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
            <ArrowLeftIcon />
        </TouchableOpacity>
    ),
    headerRight: () => (
        <TouchableOpacity style={styles.icon}>
            <MoreIcon />
        </TouchableOpacity>
    )
});

const styles = StyleSheet.create({
    title: {
        fontFamily: Fonts.Poppins_500Medium,
        fontSize: 16
    },
    icon: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
