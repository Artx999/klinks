import {StyleSheet, Text, TextInput, View, Button} from "react-native";
import React, { useState } from 'react';
import {collection, getDocs, query} from "firebase/firestore";
import {db} from "../firebaseConfig";

const SearchBar = () => {
    const [searchText, setSearchText] = useState('');
    const [result, setResult] = useState('');

    const handleSearch = () => {
        if (searchText === 'example') {
            setResult('Search term found');
        } else {
            setResult('Search term not found');
        }
    };

    return (
        <View>
            <TextInput
                style={{ borderWidth: 1, padding: 10, margin: 10 }}
                placeholder="Enter search term"
                onChangeText={(text) => setSearchText(text)}
                value={searchText}
            />
            <Button title="Search" onPress={handleSearch} />
            <Text>{result}</Text>
        </View>
    );
};
export default SearchBar;