import {FlatList, StyleSheet, Text, View} from "react-native";
import Ingredient from "./Ingredient";

const Ingredients = ({ingredients}) => {
    return (
        <View style={styles.ingredients}>
            <Text style={styles.header}>Ingredienser</Text>
            <FlatList
                data={ingredients}
                renderItem={
                    ({item}) => (
                        <Ingredient item={item}/>
                    )
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    ingredients: {
        marginVertical: 10
    },
    header: {
        fontSize: 30
    }
})

export default Ingredients;