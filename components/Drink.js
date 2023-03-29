import {Image, StyleSheet, Text, View} from "react-native";

const Drink = ({route}) => {
    return (
        <View style={styles.drinkPage}>
            <View style={styles.pictureContainer}>
                <Image source={route.params.picture} style={styles.picture}></Image>
            </View>
            <View style={styles.text}>
                <Text style={styles.name}>{route.params.name}</Text>
                <Text style={styles.description}>{route.params.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    drinkPage: {
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
    },
    name: {
        padding: 10,
        fontSize: 18,
    },
    description: {
        paddingHorizontal: 10,
    },
})

export default Drink;