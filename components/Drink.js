import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

const Drink = ({route}) => {
    const drink = route.params.drink;
    const drinkImage = route.params.drinkImage;

    return (
        <ScrollView
            style={styles.drinkPage}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.pictureContainer}>
                <Image source={drinkImage} style={styles.picture}/>
            </View>
            <Text style={styles.description}>{drink.description}</Text>

            <View style={styles.ing}>
                <Ingredients ingredients={drink.ingredients}/>
                <Instructions instructions={drink.instructions}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    drinkPage: {
        flex: 1,
        padding: 15,
        width: "100%",
    },
    pictureContainer: {
        width: "100%",
        height: undefined,
        aspectRatio: 1,
        position: 'relative',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        overflow: 'hidden'
    },
    picture: {
        width: "100%",
        height: "100%",
        aspectRatio: 1,
        resizeMode: 'cover'
    },
    description: {
        marginTop: 20,
        fontFamily: "Poppins-Regular"
    },
    ing: {
        marginTop: 20,
    }
})

export default Drink;