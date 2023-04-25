import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from "./LoginScreen";

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <LoginScreen />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default ProfileScreen;