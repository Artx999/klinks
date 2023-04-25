import DrinkList from "./DrinkList";
import {StyleSheet} from "react-native";
import Drink from "./Drink";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="DrinkList" component={DrinkList} navigation={navigation}/>
            <Stack.Screen name="Drink" component={Drink}/>
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen;