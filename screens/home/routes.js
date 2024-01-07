import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailScreen from '../detail/DetailScreen';
import NewReleaseScreen from '../new-release/NewReleaseScreen';
import HomeScreen from './HomeScreen';

import { getDefaultHeaderWithTitle } from 'routes/utils/navigationOptions';
import { ROUTES } from 'utils/constants';
import BestSellerScreen from 'screens/best-seller/BestSellerScreen';
import TrendingNowScreen from 'screens/trending-now/TrendingNowScreen';
import RecentScreen from 'screens/recents/RecentScreen';
import RecommendScreen from 'screens/recommends/RecommendScreen';

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
                name={ROUTES.BEST_SELLER}
                component={BestSellerScreen}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen
                name={ROUTES.TRENDING_NOW}
                component={TrendingNowScreen}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen
                name={ROUTES.RECENT_BOOKS}
                component={RecentScreen}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen
                name={ROUTES.RECOMMEND_BOOKS}
                component={RecommendScreen}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen
                name={ROUTES.DETAIL}
                component={DetailScreen}
                options={({ route, navigation }) =>
                    getDefaultHeaderWithTitle(route, navigation)
                }
            />
        </HomeStack.Navigator>
    );
};
