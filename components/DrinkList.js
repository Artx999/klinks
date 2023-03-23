import {StyleSheet, FlatList, Text, View} from "react-native";
import drinks from "./DrinkList.TestData.js";

const DrinkList = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={drinks}
                renderItem={
                    ({item}) => (
                        <View>
                            <Text style={styles.item}>{item}</Text>
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
        paddingTop: 22,
        width: "100%",
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
})

export default DrinkList;