import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {getStorage, getDownloadURL, ref} from "firebase/storage";
import {useEffect, useState} from "react";

const DrinkListItem = ({drink, navigation}) => {
    const [drinkImage, setDrinkImage] = useState(require("../assets/default-drink.jpg"));

    useEffect(() => {
        if (typeof drink.image == "undefined") return;

        const storage = getStorage();
        getDownloadURL(ref(storage, "assets/drinks/" + drink.image))
            .then((url) => {
                setDrinkImage({uri: url});
            })
            .catch((error) => {
                console.log(error)
            });
    }, [])

    return (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Drink", {drink: drink, drinkImage: drinkImage})}>
            <View style={styles.pictureContainer}>
                <Image source={drinkImage} style={styles.picture} />
            </View>
            <View style={styles.overlay}></View>
            <View style={styles.text}>
                <Text style={styles.name}>{drink.name}</Text>
                <Text numberOfLines={2} style={styles.description}>{drink.description}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        marginVertical: 5,
        width: "100%",
        height: 100,
        flexDirection: "row",
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
        borderRadius: 10,
        left: 0,
    },
    text: {
        flex: 4,
        overflow: "hidden"
    },
    name: {
        paddingTop: 10,
        paddingLeft: 10,
        fontSize: 18,
        fontFamily: "Poppins-SemiBold"
    },
    description: {
        paddingTop: 10,
        paddingLeft: 10,
        fontFamily: "Poppins-Regular"
    }
})

export default DrinkListItem;