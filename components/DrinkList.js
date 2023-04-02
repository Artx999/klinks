import {StyleSheet, FlatList, Text, View, Image, TouchableOpacity} from "react-native";
import {useEffect, useState} from "react";
import {collection, getDocs, query} from "firebase/firestore";
import {db} from "../firebaseConfig";

const DrinkList = ({navigation}) => {
    const [drinks, setDrinks] = useState([]);
    const [limit, setLimit] = useState(9);
    const [lastVisible, setLastVisible] = useState(null);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const retrieveData = async () => {
        try {
            setLoading(true);
            console.log('Retrieving Data');

            const initialQuery = query(collection(db, "drinks"));

            let docSnap = await getDocs(initialQuery);

            let docData = docSnap.docs.map(document => document.data());

            setDrinks(docData);
            setLastVisible(docData[docData.length - 1].id);
            setLoading(false);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        retrieveData();
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={drinks}

                renderItem={
                    ({item}) => (
                        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Drink", {drink: item})}>
                            <View style={styles.pictureContainer}>
                                <Image source={item.picture} style={styles.picture} />
                            </View>
                            <View style={styles.text}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text numberOfLines={2} style={styles.description}>{item.description}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }

                onEndReached={() => {
                    console.log("Should lazy load now!")
                }}

                refreshing={refreshing}
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