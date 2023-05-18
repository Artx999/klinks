import {useEffect} from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import {FontAwesome5} from '@expo/vector-icons';
import Logout from "./Logout";


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
        <>
            <View style={styles.header}>
                <Text style={styles.title}>Login</Text>
            </View>
            <View style={styles.content}>
                <FontAwesome5.Button disabled={!request} name="google" onPress={() => {
                    promptAsync()
                }}>
                    <Text style={styles.loginButtonText}>Log In With Google</Text>
                </FontAwesome5.Button>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    loginButtonText: {
        color: "white",
        fontWeight: "bold"
    },
    header: {
        width: '100%',
        height: 235,
        position: "relative",
        backgroundColor: '#F2736A',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    title: {
        marginTop: 40,
        color: '#fff',
        fontSize: 30
    },
    profilePictureWrapper: {
        bottom: -45,
        position: "absolute",
        borderRadius: 65, // Half of height and width + borderWidth
        borderStyle: "solid",
        borderWidth: 5,
        borderColor: "#fff",
        overflow: "hidden"
    },
    profilePicture: {
        width: 120,
        height: 120,
    },
    content: {
        marginTop: 60,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 20
    }
});


export default Login;