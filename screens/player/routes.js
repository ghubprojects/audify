import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { getDefaultHeaderWithTitle } from 'routes/utils/navigationOptions';
import DetailScreen from 'screens/detail/DetailScreen';
import PlayerScreen from 'screens/player/PlayerScreen';
import { ROUTES } from 'utils/constants';

const PlayerStack = createNativeStackNavigator();

export const getPlayerStackNavigator = () => {
    return (
        <PlayerStack.Navigator>
            <PlayerStack.Screen
                name={ROUTES.PLAYER}
                component={PlayerScreen}
                options={({ route, navigation }) => getDefaultHeaderWithTitle(route, navigation)}
            />
            <PlayerStack.Screen
                name={ROUTES.DETAIL}
                component={DetailScreen}
                options={({ route, navigation }) => getDefaultHeaderWithTitle(route, navigation)}
            />
        </PlayerStack.Navigator>
    );
};
