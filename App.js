import {
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    useFonts
} from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TheBottomTabsNavigation from 'layouts/components/TheBottomTabsNavigation';
import { NewReleasesScreen } from 'screens';

const Stack = createNativeStackNavigator();

function App() {
    const [fontsLoaded, fontError] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

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
