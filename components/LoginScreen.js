import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { FontAwesome5 } from '@expo/vector-icons';
import * as AuthSession from "expo-auth-session";

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
    const [token, setToken] = useState("");
    const [userInfo, setUserInfo] = useState(null);

    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: "488317155424-og3ekdvksu4snuirldrbd5oo0ns2spkn.apps.googleusercontent.com",
        androidClientId: "488317155424-0uqgr0t2qcluc47vavt2ue1rea26c701.apps.googleusercontent.com"
    });

    useEffect(() => {
        if (response?.type === "success") {
            setToken(response.authentication.accessToken);
            getUserInfo();
        }
    }, [response, token]);

    const getUserInfo = async () => {
        try {
            const response = await fetch(
                "https://www.googleapis.com/userinfo/v2/me",
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            const user = await response.json();
            setUserInfo(user);
        } catch (error) {
            // Add your own error handler here
        }
    };

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


    /*const logout = () => {
        setToken("")
        setUserInfo(null);
    }*/

    return (
        <View style={styles.container}>
            {userInfo === null ? (
                <FontAwesome5.Button  disabled={!request} name="google" onPress={() => {promptAsync()}}>
                    <Text>Log In With Google</Text>
                </FontAwesome5.Button>
            ) : (
                <FontAwesome5.Button onPress={logout}>
                    <Text>Logout {userInfo.name}</Text>
                </FontAwesome5.Button>
            )}
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