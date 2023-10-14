import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getDefaultHeaderWithTitle } from 'routes/utils/navigationOptions';
import { ROUTES } from 'utils/constants';
import DetailScreen from '../detail/DetailScreen';
import LibraryScreen from './LibraryScreen';

const LibraryStack = createNativeStackNavigator();

export const getLibraryStackNavigator = () => {
    return (
        <LibraryStack.Navigator>
            <LibraryStack.Screen
                name={ROUTES.LIBRARY}
                component={LibraryScreen}
                options={{ headerShown: false }}
            />
            <LibraryStack.Screen
                name={ROUTES.DETAIL}
                component={DetailScreen}
                options={({ route, navigation }) => getDefaultHeaderWithTitle(route, navigation)}
            />
        </LibraryStack.Navigator>
    );
};
