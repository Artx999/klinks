import "expo-dev-client";
import {StyleSheet} from "react-native";
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";
import LikedDrinksScreen from "./components/LikedDrinksScreen";
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useCallback} from "react";

SplashScreen.preventAutoHideAsync();
const Tab = createBottomTabNavigator();

const App = () => {
    const [fontsLoaded] = useFonts({
        "Poppins-Regular": require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
        "Poppins-Thin": require('./assets/fonts/Poppins/Poppins-Thin.ttf'),
        "Poppins-SemiBold": require('./assets/fonts/Poppins/Poppins-SemiBold.ttf'),
        "Poppins-ExtraBold": require('./assets/fonts/Poppins/Poppins-ExtraBold.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <NavigationContainer onReady={onLayoutRootView}>
            <StatusBar style="auto"/>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Liked Drinks') {
                            iconName = focused ? 'heart' : 'heart-outline';
                        } else if (route.name === 'Profile') {
                            iconName = focused ? 'person' : 'person-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#F2736A',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: { height: 60 },
                    headerShown: false,
                    tabBarShowLabel: false
                })}>
                <Tab.Screen name="Profile" component={ProfileScreen} />
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Liked Drinks" component={LikedDrinksScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;