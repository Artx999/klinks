import React, { useContext } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { LikedDrinksContext } from './LikedDrinksContext';
import DrinkListItem from './DrinkListItem';

const LikedDrinksScreen = ({navigation}) => {
    const [likedDrinks] = useContext(LikedDrinksContext);
    console.log(likedDrinks);

    const renderItem = ({ item }) => (
        <DrinkListItem drink={item} navigation={navigation} />
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
    },
});

export default LikedDrinksScreen;
