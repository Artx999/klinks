import DrinkList from "./DrinkList";
import {StyleSheet, View} from "react-native";
import SearchBar from "./SearchBar";
import React, { useState } from 'react';


const App = () => {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (searchTerm) => {
        // perform search logic here, and update searchResults state
        setSearchResults(/* search results based on searchTerm */);
    };

    return (
        <View>
            <SearchBar onSearch={handleSearch} />
            <Text>{searchResults.length} results found</Text>
            {/* display search results here */}
        </View>
    );
};

export default App;


const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <DrinkList navigation={navigation}></DrinkList>
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
});

export default HomeScreen;
