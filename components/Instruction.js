import {StyleSheet, Text} from "react-native";

const Instruction = ({item}) => {
    return (
        <Text style={styles.instruction}>{item}</Text>
    )
}

const styles = StyleSheet.create({
    instruction: {
        marginVertical: 10,
        fontFamily: "Poppins-Regular"
    }
})

export default Instruction;