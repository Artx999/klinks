import {StyleSheet, FlatList, View, ActivityIndicator, Text} from "react-native";
import {useEffect, useState} from "react";
import {collection, getDocs, limit, orderBy, query, startAfter} from "firebase/firestore";
import {db} from "../firebaseConfig";
import DrinkListItem from "./DrinkListItem";

const DrinkList = ({navigation}) => {
    const [drinks, setDrinks] = useState([]);
    const [limitLoad, setLimitLoad] = useState(7); // TODO: Use other number later. Maybe dynamic?
    const [lastVisible, setLastVisible] = useState(null);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const retrieveData = async () => {
        try {
            setLoading(true);
            console.log('Retrieving Data');

            const initialQuery = query(
                collection(db, "drinks"),
                orderBy("name"),
                limit(limitLoad)
            );
            const docSnap = await getDocs(initialQuery);
            const docData = docSnap.docs.map(document => document.data());

            setDrinks(docData);
            setLastVisible(docData[docData.length - 1].name);
            setLoading(false);
        }
        catch (error) {
            console.log(error);
        }
    }

    const retrieveMoreData = async () => {
        try {
            setRefreshing(true);
            console.log('Retrieving additional Data');

            const additionalQuery = query(
                collection(db, "drinks"),
                orderBy("name"),
                startAfter(lastVisible),
                limit(limitLoad)
            );
            const docSnap = await getDocs(additionalQuery);
            const docData = docSnap.docs.map(document => document.data());

            setDrinks([...drinks, ...docData]);
            setLastVisible(docData[docData.length - 1].name);
            setRefreshing(false);
        }
        catch (error) {
            console.log(error)
        }
    }

    const renderFooter = () => {
        try {
            if (loading) return (<ActivityIndicator />)
            else return null;
        }
        catch (error) {
            console.log(error)
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
                        <DrinkListItem drink={item} navigation={navigation} />
                    )
                }

                ListFooterComponent={renderFooter}

                onEndReached={() => {
                    retrieveMoreData();
                }}

                refreshing={refreshing}
                showsVerticalScrollIndicator={false}

            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 15,
        paddingRight: 15,
        width: "100%"
    },
})

export default DrinkList;