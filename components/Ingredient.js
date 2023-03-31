import {StyleSheet, Text} from "react-native";

const Ingredient = ({item}) => {
    const prefix = (typeof item.amount === "undefined" ? "" : item.amount.size + " " + item.amount.unit + " ");

    return (
        <Text style={styles.ingredient}><Text style={styles.prefix}>{prefix}</Text>{item.ingredient}</Text>
    )
}

const styles = StyleSheet.create({
    ingredient: {
        marginVertical: 2
    },
    prefix: {
        fontWeight: "bold"
    }
})

export default Ingredient;