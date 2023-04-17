import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={searchTerm}
                onChangeText={setSearchTerm}
                onSubmitEditing={handleSearch}
                placeholder="Search..."
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f1f1f1',
        borderRadius: 8,
        padding: 8,
        margin: 8,
    },
    input: {
        height: 40,
    },
});

export default SearchBar;
