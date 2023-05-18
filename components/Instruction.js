import {StyleSheet, Text} from "react-native";

const Instruction = ({ item, index, total }) => {
    const step = index + 1;
    const title = `Steg ${step}/${total}`;

    return (
        <>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.instruction}>{item}</Text>
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        marginTop: 20,
        marginBottom: 2,
        color: "#F2736A",
        fontFamily: "Poppins-SemiBold",
        fontSize: 15
    },
    instruction: {
        fontFamily: "Poppins-Regular"
    }
})

export default Instruction;