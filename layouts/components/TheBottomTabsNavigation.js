import {
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    useFonts
} from '@expo-google-fonts/poppins';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text } from 'react-native';

import { HomeScreen, LibraryScreen, SearchScreen } from 'screens';

import { HomeBoldIcon, LibraryBoldIcon, SearchBoldIcon } from 'assets/icons/bold';
import { HomeLightIcon, LibraryLightIcon, SearchLightIcon } from 'assets/icons/light';
import { neutral, primary } from 'styles/colors';

const Tab = createBottomTabNavigator();

const tabItems = [
    {
        name: 'Home',
        lightIcon: <HomeLightIcon />,
        boldIcon: <HomeBoldIcon />,
        component: <HomeScreen />
    },
    {
        name: 'Search',
        lightIcon: <SearchLightIcon />,
        boldIcon: <SearchBoldIcon />,
        component: <SearchScreen />
    },
    {
        name: 'Library',
        lightIcon: <LibraryLightIcon />,
        boldIcon: <LibraryBoldIcon />,
        component: <LibraryScreen />
    }
];

const TheBottomTabsNavigation = () => {
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
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={() => ({
                tabBarActiveTintColor: primary[50],
                tabBarInactiveTintColor: neutral[60],
                headerShown: false
            })}
        >
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={focused ? styles.tabLabelFocused : styles.tabLabel}>Home</Text>
                    ),
                    tabBarIcon: ({ focused }) => (focused ? <HomeBoldIcon /> : <HomeLightIcon />)
                }}
            />
            <Tab.Screen
                name='Search'
                component={SearchScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={focused ? styles.tabLabelFocused : styles.tabLabel}>
                            Search
                        </Text>
                    ),
                    tabBarIcon: ({ focused }) =>
                        focused ? <SearchBoldIcon /> : <SearchLightIcon />
                }}
            />
            <Tab.Screen
                name='Library'
                component={LibraryScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={focused ? styles.tabLabelFocused : styles.tabLabel}>
                            Library
                        </Text>
                    ),
                    tabBarIcon: ({ focused }) =>
                        focused ? <LibraryBoldIcon /> : <LibraryLightIcon />
                }}
            />
        </Tab.Navigator>
    );
};

export default TheBottomTabsNavigation;

const styles = StyleSheet.create({
    tabLabel: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 10,
        lineHeight: 15,
        color: neutral[60],
        marginTop: -4
    },
    tabLabelFocused: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 10,
        lineHeight: 15,
        color: primary[50],
        marginTop: -4
    }
});
