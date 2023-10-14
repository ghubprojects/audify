import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getDefaultHeaderWithTitle } from 'routes/utils/navigationOptions';
import { ROUTES } from 'utils/constants';
import DetailScreen from '../detail/DetailScreen';
import SearchScreen from './SearchScreen';

const SearchStack = createNativeStackNavigator();

export const getSearchStackNavigator = () => {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen
                name={ROUTES.SEARCH}
                component={SearchScreen}
                options={{ headerShown: false }}
            />
            <SearchStack.Screen
                name={ROUTES.DETAIL}
                component={DetailScreen}
                options={({ route, navigation }) => getDefaultHeaderWithTitle(route, navigation)}
            />
        </SearchStack.Navigator>
    );
};
