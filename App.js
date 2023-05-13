import "expo-dev-client";
import {StyleSheet} from "react-native";
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";
import LikedDrinksScreen from "./components/LikedDrinksScreen";
import { Ionicons } from '@expo/vector-icons';
import { LikedDrinksProvider } from './components/LikedDrinksContext';


const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <LikedDrinksProvider>
            <NavigationContainer>
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
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: { height: 60 },
                    headerShown: false
                })}>
                <Tab.Screen name="Profile" component={ProfileScreen} />
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Liked Drinks" component={LikedDrinksScreen} />
            </Tab.Navigator>
        </NavigationContainer>
        </LikedDrinksProvider>

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