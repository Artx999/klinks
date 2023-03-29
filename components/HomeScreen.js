import DrinkList from "./DrinkList";
import {StyleSheet, View} from "react-native";

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <DrinkList navigation={navigation}></DrinkList>
        </View>
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