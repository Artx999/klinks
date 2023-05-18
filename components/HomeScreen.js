import DrinkList from "./DrinkList";
import {StyleSheet} from "react-native";
import Drink from "./Drink";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { Image, View } from 'react-native';

const Stack = createNativeStackNavigator();

function LogoTitle() {
    return (
        <View style={styles.tab}>
            <Image
                style={styles.tabImage}
                source={require('../assets/klinks-logo-trimmed.png')}
            />
        </View>
    );
}

const HomeScreen = ({navigation}) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: {
                    color: '#F2736A',
                },
                headerTitleAlign: "center"
            }}
        >
            <Stack.Screen
                name="DrinkList"
                component={DrinkList}
                options={{
                    headerTitle: () => <LogoTitle navigation={navigation} />,
                }}
                navigation={navigation}
            />
            <Stack.Screen
                name="Drink"
                component={Drink}
                options={({ route }) => ({ title: route.params.drink.name })}
            />
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
    tab: {
        paddingRight: 25,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabImage: {
        width: 50,
        height: 50
    }
});

export default HomeScreen;