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
                <Image source={drinkImage} style={styles.picture} />
            </View>
            <View style={styles.text}>
                <Text style={styles.name}>{drink.name}</Text>
                <Text style={styles.description}>{drink.description}</Text>
            </View>
            <View style={styles.ing}>
                <Ingredients ingredients={drink.ingredients} />
                <Instructions instructions={drink.instructions} />
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
    text: {
        marginTop: 20,
        width: "100%",
    },
    name: {
        fontSize: 30,
        fontFamily: "Poppins-ExtraBold"
    },
    description: {
        fontFamily: "Poppins-Regular"
    },
    ing: {
        marginTop: 20,
    }
})

export default Drink;