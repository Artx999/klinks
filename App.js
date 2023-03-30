import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import DrinkList from "./components/DrinkList";

function HomeScreen({ navigation }) {
    const handleDrinkPress = (drinkName) => {
        navigation.navigate('DrinkDetails', { drinkName });
    };

    return (
        <View style={styles.container}>
            <DrinkList onDrinkPress={handleDrinkPress}></DrinkList>
            <StatusBar style="auto" />
        </View>
    );
}

function LikedDrinksScreen() {
    return (
        <View style={styles.container}>
            <Text>Liked Drinks</Text>
        </View>
    );
}

function ShoppingCartScreen() {
    return (
        <View style={styles.container}>
            <Text>Shopping Cart</Text>
        </View>
    );
}

function DrinkDetailsScreen({ route }) {
    const { drinkName } = route.params;

    return (
        <View style={styles.container}>
            <Text>{drinkName}</Text>
            <Text>Bilde av drinken</Text>
            <Text>Beskrivelse av drinken og ingrediensene</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="DrinkDetails" component={DrinkDetailsScreen} />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Liked Drinks') {
                            iconName = focused ? 'heart' : 'heart-outline';
                        } else if (route.name === 'Shopping Cart') {
                            iconName = focused ? 'cart' : 'cart-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: { height: 60 },
                })}>
                <Tab.Screen name="Shopping Cart" component={ShoppingCartScreen} />
                <Tab.Screen name="Home" component={HomeStack} />
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
