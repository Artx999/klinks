import DrinkList from "./DrinkList";
import {StyleSheet, View} from "react-native";
import React, { useState } from 'react';
import SeachBar from "./SeachBar";



const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <DrinkList navigation={navigation}></DrinkList>
        </View>,
        <View style={styles.container}>
            <SeachBar>

            </SeachBar>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#f2f2f2',
    },
    input: {
        padding: 10,
        fontSize: 16,
    },
});

export default HomeScreen;

