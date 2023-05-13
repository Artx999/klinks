import React, { createContext, useState } from 'react';

export const LikedDrinksContext = createContext();

export const LikedDrinksProvider = ({ children }) => {
    const [likedDrinks, setLikedDrinks] = useState([]);

    return (
        <LikedDrinksContext.Provider value={[likedDrinks, setLikedDrinks]}>
            {children}
        </LikedDrinksContext.Provider>
    );
};
