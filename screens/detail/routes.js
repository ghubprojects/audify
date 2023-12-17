import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { getDefaultHeaderWithTitle } from 'routes/utils/navigationOptions';
import PlayerScreen from 'screens/player/PlayerScreen';
import { ROUTES } from 'utils/constants';

const DetailStack = createNativeStackNavigator();

export const getDetailStackNavigator = () => {
    return (
        <DetailStack.Navigator>
            <DetailStack.Screen
                name={ROUTES.PLAYER}
                component={PlayerScreen}
                options={({ route, navigation }) => getDefaultHeaderWithTitle(route, navigation)}
            />
        </DetailStack.Navigator>
    );
};
