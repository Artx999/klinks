import {FlatList, StyleSheet, Text, View} from "react-native";
import Instruction from "./Instruction";

const Instructions = ({ instructions }) => {
    return (
        <View style={styles.instructions}>
            <Text style={styles.header}>Instructions</Text>
            <FlatList
                data={instructions}
                renderItem={({ item }) => (
                    <Instruction item={item} />
                )}
                scrollEnabled={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    instructions: {
        marginVertical: 10
    },
    header: {
        fontSize: 25,
        fontFamily: "Poppins-ExtraBold"
    }
})

export default Instructions;