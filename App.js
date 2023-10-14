import {
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    useFonts
} from '@expo-google-fonts/poppins';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import { HomeBoldIcon, LibraryBoldIcon, SearchBoldIcon } from 'assets/icons/bold';
import { HomeLightIcon, LibraryLightIcon, SearchLightIcon } from 'assets/icons/light';
import { getHomeStackNavigator, getLibraryStackNavigator, getSearchStackNavigator } from 'screens';
import { neutral, primary } from 'styles/colors';
import { Fonts } from 'utils/enums';

const TABS = Object.freeze({
    HOME_TAB: 'HOME_TAB',
    SEARCH_TAB: 'SEARCH_TAB',
    LIBRARY_TAB: 'LIBRARY_TAB'
});

const Tab = createBottomTabNavigator();

const getTabLabel = (label, focused) => (
    <Text style={focused ? styles.tabLabelFocused : styles.tabLabel}>{label}</Text>
);

const getTabIcon = (focused, lightIcon, boldIcon) =>
    focused ? (
        <View style={styles.tabIcon}>{boldIcon}</View>
    ) : (
        <View style={styles.tabIcon}>{lightIcon}</View>
    );

function App() {
    const [fontsLoaded, fontError] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={() => ({
                    headerShown: false,
                    tabBarActiveTintColor: primary[50],
                    tabBarInactiveTintColor: neutral[60]
                })}
            >
                <Tab.Screen
                    name={TABS.HOME_TAB}
                    options={{
                        tabBarLabel: ({ focused }) => getTabLabel('Home', focused),
                        tabBarIcon: ({ focused }) =>
                            getTabIcon(focused, <HomeLightIcon />, <HomeBoldIcon />)
                    }}
                >
                    {getHomeStackNavigator}
                </Tab.Screen>
                <Tab.Screen
                    name={TABS.SEARCH_TAB}
                    options={{
                        tabBarLabel: ({ focused }) => getTabLabel('Search', focused),
                        tabBarIcon: ({ focused }) =>
                            getTabIcon(focused, <SearchLightIcon />, <SearchBoldIcon />)
                    }}
                >
                    {getSearchStackNavigator}
                </Tab.Screen>
                <Tab.Screen
                    name={TABS.LIBRARY_TAB}
                    options={{
                        tabBarLabel: ({ focused }) => getTabLabel('Library', focused),
                        tabBarIcon: ({ focused }) =>
                            getTabIcon(focused, <LibraryLightIcon />, <LibraryBoldIcon />)
                    }}
                >
                    {getLibraryStackNavigator}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;

const styles = StyleSheet.create({
    tabLabel: {
        fontFamily: Fonts.Poppins_400Regular,
        fontSize: 10,
        lineHeight: 15,
        color: neutral[60],
        marginTop: -4
    },
    tabLabelFocused: {
        fontFamily: Fonts.Poppins_500Medium,
        fontSize: 10,
        lineHeight: 15,
        color: primary[50],
        marginTop: -4
    },
    tabIcon: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
