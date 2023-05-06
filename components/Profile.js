import {Image, StyleSheet, Text, View} from "react-native";
import {useEffect, useState} from "react";
import * as AuthSession from "expo-auth-session";
import Logout from "./Logout";

const defaultProfilePicture = require("../assets/default-profile-picture.jpg");

const Profile = ({setUserInfo, userInfo, token}) => {
    const [profilePicture, setProfilePicture] = useState(defaultProfilePicture);

    useEffect(() => {
        if (typeof userInfo.picture == "undefined") return;
        setProfilePicture({uri: userInfo.picture});
    }, [userInfo.picture])

    return (
        <View style={styles.container}>
            <Image source={profilePicture} style={styles.profilePicture} />
            <Text>{userInfo.name}</Text>
            <Logout setUserInfo={setUserInfo} token={token}></Logout>
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
    profilePicture: {
        height: 100,
        width: 100,
        borderRadius: 50 // Half of height and width
    }
})

export default Profile;