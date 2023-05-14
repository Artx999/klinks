import React, { useContext, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { LikedDrinksContext } from './LikedDrinksContext';

const LikeButton = ({ drink }) => {
    const [likedDrinks, setLikedDrinks] = useContext(LikedDrinksContext);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        setIsLiked(likedDrinks.some(likedDrink => likedDrink.id === drink.id));
    }, [likedDrinks]);

    const handlePress = () => {
        if (isLiked) {
            setLikedDrinks(prevDrinks => prevDrinks.filter(d => d.id !== drink.id));
        } else {
            setLikedDrinks(prevDrinks => [...prevDrinks, drink]);
        }
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <AntDesign name={isLiked ? 'heart' : 'hearto'} size={24} color="red" />
        </TouchableOpacity>
    );
}

export default LikeButton;
