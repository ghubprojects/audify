import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';

import { HomeScreen, LibraryScreen, SearchScreen } from 'screens';

import { HomeBoldIcon, LibraryBoldIcon, SearchBoldIcon } from 'assets/icons/bold';
import { HomeLightIcon, LibraryLightIcon, SearchLightIcon } from 'assets/icons/light';
import { neutral, primary } from 'styles/colors';
import { Fonts } from 'utils/enum';

const Tab = createBottomTabNavigator();

const TheBottomTabsNavigation = () => {
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
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <View style={styles.tabIcon}>
                                <HomeBoldIcon />
                            </View>
                        ) : (
                            <View style={styles.tabIcon}>
                                <HomeLightIcon />
                            </View>
                        )
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
                        focused ? (
                            <View style={styles.tabIcon}>
                                <SearchBoldIcon />
                            </View>
                        ) : (
                            <View style={styles.tabIcon}>
                                <SearchLightIcon />
                            </View>
                        )
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
                        focused ? (
                            <View style={styles.tabIcon}>
                                <LibraryBoldIcon />
                            </View>
                        ) : (
                            <View style={styles.tabIcon}>
                                <LibraryLightIcon />
                            </View>
                        )
                }}
            />
        </Tab.Navigator>
    );
};

export default TheBottomTabsNavigation;

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
