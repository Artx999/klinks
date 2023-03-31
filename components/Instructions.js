import {FlatList, StyleSheet, Text, View} from "react-native";
import Instruction from "./Instruction";

const Instructions = ({instructions}) => {
    return (
        <View style={styles.instructions}>
            <Text style={styles.header}>Instruksjoner</Text>
            <FlatList
                data={instructions}
                renderItem={
                    ({item}) => (
                        <Instruction item={item} />
                    )
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    instructions: {
        marginVertical: 10
    },
    header: {
        fontSize: 25
    }
})

export default Instructions;