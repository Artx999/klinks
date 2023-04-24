import {StyleSheet, TextInput, View} from "react-native";
import React, { useState } from 'react';
const SearchBar = ({ onChange }) => {
    const [value, setValue] = useState('');

    const handleOnChange = (text) => {
        setValue(text);
        onChange(text);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search here"
                onChangeText={handleOnChange}
                value={value}
            />
        </View>
    );
};

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