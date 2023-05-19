import {FlatList, StyleSheet, Text, View} from "react-native";
import Instruction from "./Instruction";

const Instructions = ({ instructions }) => {
    return (
        <View style={styles.instructions}>
            <Text style={styles.header}>Instruksjoner</Text>
            <FlatList
                data={instructions}
                renderItem={({ item, index }) => (
                    <Instruction
                        item={item}
                        index={index}
                        total={instructions.length}
                    />
                )}
                scrollEnabled={false}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    instructions: {
        marginVertical: 10,
        marginBottom: 30
    },
    header: {
        fontSize: 25,
        fontFamily: "Poppins-ExtraBold"
    }
})

export default Instructions;