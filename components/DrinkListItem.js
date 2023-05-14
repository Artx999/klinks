import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getStorage, getDownloadURL, ref } from 'firebase/storage';
import LikeButton from './LikeButton';

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
            <View style={styles.text}>
                <Text style={styles.name}>{drink.name}</Text>
                <Text numberOfLines={2} style={styles.description}>{drink.description}</Text>
                <LikeButton drink={drink} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        height: 100,
        width: "100%",
        marginVertical: 5,
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
        flex: 4,
        overflow: "hidden"
    },
    name: {
        padding: 10,
        fontSize: 18,
    },
    description: {
        paddingHorizontal: 10,
    },
})

export default DrinkListItem;
