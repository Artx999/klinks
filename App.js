import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./components/HomeScreen";
import Drink from "./components/Drink";
import {Alert} from "react-native";
import React from "react";


const Stack = createNativeStackNavigator();

const App = () => {
    Alert.alert(
        "Remember!",
        "Do safe alcohol consumption",
        [
            {
                text: "OK"
            }
        ],
        {cancelable: false}
    );
    return (
        <NavigationContainer>
            <StatusBar style="auto"/>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Drink" component={Drink}/>
            </Stack.Navigator>

        </NavigationContainer>
    );
}

export default App;