import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from 'utils/constants';
import PlaylistScreen from './PlaylistScreen';

const PlaylistStack = createNativeStackNavigator();

export const getPlaylistStackNavigator = () => {
    return (
        <PlaylistStack.Navigator>
            <PlaylistStack.Screen
                name={ROUTES.PLAYLIST}
                component={PlaylistScreen}
                options={{ headerShown: false }}
            />
        </PlaylistStack.Navigator>
    );
};
