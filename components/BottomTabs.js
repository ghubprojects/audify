import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

import { HomeScreen, LibraryScreen, SearchScreen } from 'screens';

import { HomeBoldIcon, LibraryBoldIcon, SearchBoldIcon } from 'assets/icons/bold';
import { HomeLightIcon, LibraryLightIcon, SearchLightIcon } from 'assets/icons/light';
import colors from 'styles/colors';

const Tab = createBottomTabNavigator();

const tabItems = [
    {
        name: "Home",
        lightIcon: <HomeLightIcon />,
        boldIcon: <HomeBoldIcon />,
        component: <HomeScreen />
    },
    {
        name: "Search",
        lightIcon: <SearchLightIcon />,
        boldIcon: <SearchBoldIcon />,
        component: <SearchScreen />
    },
    {
        name: "Library",
        lightIcon: <LibraryLightIcon />,
        boldIcon: <LibraryBoldIcon />,
        component: <LibraryScreen />
    }
]

const BottomTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    const currentItem = tabItems.find((item) => (item.name === route.name))
                    return focused && currentItem ? currentItem.boldIcon : currentItem.lightIcon
                },
                tabBarActiveTintColor: colors.primary[50],
                tabBarInactiveTintColor: colors.neutral[60],
            })} >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Library" component={LibraryScreen} />
        </Tab.Navigator>
    )
}

export default BottomTabs

const styles = StyleSheet.create({})