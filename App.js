import { Poppins_400Regular, useFonts } from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TheBottomTabsNavigation from 'layouts/components/TheBottomTabsNavigation';
import { NewReleasesScreen } from 'screens';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='TheBottomTabsNavigation' component={TheBottomTabsNavigation} />
                <Stack.Screen name='NewReleasesScreen' component={NewReleasesScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
