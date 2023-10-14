import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailScreen from '../detail/DetailScreen';
import NewReleaseScreen from '../new-release/NewReleaseScreen';
import HomeScreen from './HomeScreen';

import { getDefaultHeaderWithTitle } from 'routes/utils/navigationOptions';
import { ROUTES } from 'utils/constants';

const HomeStack = createNativeStackNavigator();

export const getHomeStackNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name={ROUTES.HOME}
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen
                name={ROUTES.NEW_RELEASE}
                component={NewReleaseScreen}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen
                name={ROUTES.DETAIL}
                component={DetailScreen}
                options={({ route, navigation }) => getDefaultHeaderWithTitle(route, navigation)}
            />
        </HomeStack.Navigator>
    );
};
