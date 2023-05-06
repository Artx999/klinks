import {StyleSheet, Text, View, Button} from "react-native";
import {FontAwesome5} from '@expo/vector-icons';
import * as AuthSession from "expo-auth-session";

const Logout = ({setUserInfo, token}) => {
    const logout = async () => {
        try {
            await AuthSession.revokeAsync(
                { token: token },
                { revocationEndpoint: "https://oauth2.googleapis.com/revoke?token={access_token}" }
            );
            setUserInfo(null);
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <FontAwesome5.Button onPress={logout}>
            <Text>Logout</Text>
        </FontAwesome5.Button>
    )
}

export default Logout;