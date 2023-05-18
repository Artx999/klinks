import {StyleSheet, Text, View, Button, Pressable} from "react-native";
import {FontAwesome5} from '@expo/vector-icons';
import * as AuthSession from "expo-auth-session";

const Logout = ({setUserInfo, token}) => {
    const logout = async () => {
        try {
            await AuthSession.revokeAsync(
                {token: token},
                {revocationEndpoint: "https://oauth2.googleapis.com/revoke?token={access_token}"}
            );
            setUserInfo(null);
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <Pressable style={styles.logoutButton} onPress={logout}>
            <Text style={styles.logoutButtonText}>Logg ut</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    logoutButton: {
        top: 44.5,
        right: 15,
        paddingTop: 5,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 7,
        position: "absolute",
        backgroundColor: "rgba(255, 255, 255, 0)"
    },
    logoutButtonText: {
        color: "#fff",
        fontSize: 18
    }
});

export default Logout;