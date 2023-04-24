import {StyleSheet, Text, TextInput, View} from "react-native";
import React, { useState } from 'react';
import {collection, getDocs, query} from "firebase/firestore";
import {db} from "../firebaseConfig";

const SearchBar = ({ onChange }) => {
    const [value, setValue] = useState('');

    const handleOnChange = (text) => {
        setValue(text);
        onChange(text);
    };


};

const searchingName = async () => {
    try {
        setRefreshing(true);
        console.log('Retrieving additional Data');

        const [searchText, setSearchText] = useState('');
        const namedb = query(
            collection(db, "name"),
        );


        const docSnap = await getDocs(namedb);
        const docData = docSnap.docs.map(document => document.data());

        setDrinks([...drinks, ...docData]);
        setLastVisible(docData[docData.length - 1].name);
        setRefreshing(false);
    }
    catch (error) {
        console.log(error)
    }

    const handleSearch = () => {
        if(db.includes(searchText)) {
            setName(searchText)
        }
        else {
            setName('Drink not found')
        }
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search here"
                onChangeText={(text) => setSearchText(text)}
                value={value}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        borderRadius: 10,
        backgroundColor: 'grey',
    },
    input: {
        padding: 10,
        fontSize: 16,
    },
});

export default SearchBar;