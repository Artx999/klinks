import { Image, StyleSheet, Text, View } from "react-native";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import LikeButton from "./LikeButton";

const Drink = ({route}) => {
    const drink = route.params.drink;
    const drinkImage = route.params.drinkImage;

    return (
        <View style={styles.drinkPage}>
            <View style={styles.top}>
                <View style={styles.pictureContainer}>
                    <Image source={drinkImage} style={styles.picture} />
                </View>
                <View style={styles.text}>
                    <Text style={styles.name}>{drink.name}</Text>
                    <Text style={styles.description}>{drink.description}</Text>
                </View>
            </View>
            <LikeButton drink={drink} />
            <Ingredients ingredients={drink.ingredients} />
            <Instructions instructions={drink.instructions} />
        </View>
    );
}

const styles = StyleSheet.create({
    drinkPage: {
        flex: 1,
        flexDirection: "column",
        width: "100%",
    },
    top: {
        width: "100%",
        flexDirection: "row"
    },
    pictureContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    picture: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: "cover",
        aspectRatio: 1,
        left: 0,
    },
    text: {
        flex: 2,
        marginHorizontal: 10
    },
    name: {
        fontSize: 30
    },
    description: {
    },
});

export default Drink;
