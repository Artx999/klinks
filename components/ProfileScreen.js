import {StyleSheet, Text, View} from 'react-native';
import {useState} from "react";
import Login from "./Login";
import Profile from "./Profile";

const ProfileScreen = () => {
    const [userInfo, setUserInfo] = useState(null);

    return (
        <View style={styles.container}>
            {userInfo === null ?
                (<Login setUserInfo={setUserInfo}/>) :
                (<Profile userInfo={userInfo}/>)
            }
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