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
    /*
        item: {
            marginVertical: 15,
            width: "100%",
            height: undefined,
            aspectRatio: 1,
            flexDirection: "row",
            borderRadius: 20,
            overflow: 'hidden'
        },
        pictureContainer: {
            width: "100%",
            height: undefined,
            aspectRatio: 1,
            position: 'relative',
            alignItems: "center",
            justifyContent: "center",
            overflow: 'hidden'
        },
        picture: {
            width: "100%",
            height: "100%",
            aspectRatio: 1,
            resizeMode: 'cover'
        },
        overlay: {
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.35)",
            zIndex: 3
        },
        text: {
            padding: 20,
            bottom: 0,
            position: "absolute",
            overflow: "hidden",
            zIndex: 5
        },
        name: {
            lineHeight: 30,
            paddingLeft: 5,
            fontSize: 26,
            color: "#fff",
            fontFamily: "Poppins-ExtraBold"
        },
        description: {
            display: "none",
            paddingLeft: 5,
            fontSize: 14,
            color: "#fff",
            fontFamily: "Poppins-Regular"
        }
         */
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