import React, { useState, useEffect, useContext } from "react";
import { Pressable, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { LikedDrinksContext } from './LikedDrinksContext';

const LikeButton = ({ drink }) => {
    const [likedDrinks, setLikedDrinks] = useContext(LikedDrinksContext);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        setLiked(likedDrinks.some(likedDrink => likedDrink.id === drink.id));
    }, [likedDrinks]);

    const toggleLike = () => {
        if (liked) {
            setLikedDrinks(likedDrinks.filter(likedDrink => likedDrink.id !== drink.id));
        } else {
            setLikedDrinks([...likedDrinks, drink]);
        }
    };

    return (
        <Pressable style={styles.button} onPress={toggleLike}>
            <Icon name={liked ? "heart" : "heart-o"} size={30} color={liked ? "red" : "gray"} />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 10,
    },
});

export default LikeButton;
