import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { LikedDrinksContext } from './LikedDrinksContext';

const LikedDrinksScreen = () => {
    const [likedDrinks] = useContext(LikedDrinksContext);

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={likedDrinks}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
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
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default LikedDrinksScreen;
