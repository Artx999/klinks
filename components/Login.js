import {useEffect, useState} from "react";
import {StyleSheet, Text, View, Button} from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import {FontAwesome5} from '@expo/vector-icons';
import * as AuthSession from "expo-auth-session";


WebBrowser.maybeCompleteAuthSession();

const Login = ({setUserInfo, setToken, token}) => {
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
                    headers: {Authorization: `Bearer ${token}`},
                }
            );

            const user = await response.json();
            setUserInfo(user);
        } catch (error) {
            // Add your own error handler here
        }
    };

    return (
        <FontAwesome5.Button disabled={!request} name="google" onPress={() => {
            promptAsync()
        }}>
            <Text style={styles.loginButtonText}>Log In With Google</Text>
        </FontAwesome5.Button>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButtonText: {
        color: "white",
        fontWeight: "bold"
    }
});


export default Login;