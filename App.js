import "expo-dev-client";
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./components/HomeScreen";
import Drink from "./components/Drink";
import LoginScreen from "./components/LoginScreen";


const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <StatusBar style="auto"/>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Drink" component={Drink}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;