import {Button, StyleSheet, View} from "react-native";

const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button title="Login with google"></Button>
            <Button title="Home screen" onPress={() => navigation.navigate('Home')}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default LoginScreen