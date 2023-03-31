import {Image, StyleSheet, Text, View} from "react-native";
import Ingredients from "./Ingredients";

const Drink = ({route}) => {
    const drink = route.params.drink;

    return (
        <View>
            <View style={styles.text}>
                <Text style={styles.name}>{drink.name}</Text>
                <Text style={styles.description}>{drink.description}</Text>
            </View>
            <Ingredients ingredients={drink.ingredients}></Ingredients>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
    },
    name: {
        fontSize: 18,
    },
    description: {
    },
})

export default Drink;