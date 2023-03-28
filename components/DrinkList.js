import {StyleSheet, FlatList, Text, View, Image} from "react-native";
import drinks from "./DrinkList.TestData.js";

const DrinkList = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={drinks}
                renderItem={
                    ({item}) => (
                        <View style={styles.item}>
                            <View style={styles.pictureContainer}>
                                <Image source={item.picture} style={styles.picture}></Image>
                            </View>
                            <View style={styles.text}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text numberOfLines={2} style={styles.description}>{item.description}</Text>
                            </View>
                        </View>
                    )
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        width: "100%",
    },
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

export default DrinkList;