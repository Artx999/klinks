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
        <>
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <Text style={styles.title}>Profil</Text>
                    <Logout setUserInfo={setUserInfo} token={token}></Logout>
                </View>
                <View style={styles.profilePictureWrapper}>
                    <Image source={profilePicture} style={styles.profilePicture} />
                </View>
            </View>
            <View style={styles.content}>
                <Text>{userInfo.name}</Text>
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
    header: {
        width: '100%',
        height: 235,
        position: "relative",
        backgroundColor: '#F2736A',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    headerTop: {
        width: '100%',
        position: "relative",
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
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
})

export default Profile;