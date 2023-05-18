import {StyleSheet, Text, View} from 'react-native';
import {useState} from "react";
import Login from "./Login";
import Profile from "./Profile";

const ProfileScreen = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [token, setToken] = useState("");

    return (
        <View style={styles.container}>
            {userInfo === null ?
                (<Login setUserInfo={setUserInfo} setToken={setToken} token={token}/>) :
                (<Profile setUserInfo={setUserInfo} userInfo={userInfo} token={token}/>)
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
})

export default ProfileScreen;