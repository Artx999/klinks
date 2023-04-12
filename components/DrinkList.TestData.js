const drinks = [
    {
        name: "Mojito",
        picture: require("../assets/drinks/mojito.jpg"),
        description: "Dette er den offisielle oppskriften på cocktailen Mojito fra the International Bartenders Association. Mojito har en deilig smak av lime og mynte, og inneholder også rom og club soda.",
        ingredients: [
            {ingredient: "rom, hvit", amount: {size: 4, unit: "cl"}},
            {ingredient: "limesaft", amount: {size: 2, unit: "cl"}},
            {ingredient: "mynte", amount: {size: 3, unit: "kvaster"}},
            {ingredient: "sukker", amount: {size: 2, unit: "ts"}},
            {ingredient: "club soda"},
        ],
        instructions: [
            "Mos mynten sammen med sukker og limejuice nederst i et glass. Bruk friskpresset limejuice.",
            "Fyll opp med is. Tilsett rom, og topp med sodavann.",
            "Pynt med en myntekvast, og server med sugerør."
        ]
    },
    {
        name: "Martini",
        picture: require("../assets/drinks/martini.jpg"),
        description: "En klassisk Dry Martini lages med gin og vermut. Cocktailen serveres gjerne med olivener, eller med litt sitronskall som er skviset så man får med oljene fra skallet.",
    },
    {
        name: "Old Fashioned",
        picture: require("../assets/drinks/old-fashioned.jpg"),
        description: "Gammel og grå",
    },
    {
        name: "Gin and Tonic",
        picture: require("../assets/drinks/gin-and-tonic.jpg"),
        description: "GT",
    },
    {
        name: "Bloody Mary",
        picture: require("../assets/drinks/bloody-mary.jpg"),
    },
    {
        name: "Long Island Iced Tea",
        picture: require("../assets/drinks/long-island-iced-tea.jpg"),
        description: "Sammen med Vodka Battery var Long Island Iced Tea selve symbolet på nittitallet. Drinken har flere varianter, dette er den offisielle oppskiften fra IBA.\n",
    },
    {
        name: "Rum and Coke",
        picture: require("../assets/default-drink.jpg"),
        description: "",
    },
    {
        name: "Pina Colada",
        picture: require("../assets/default-drink.jpg"),
        description: "",
    },
    {
        name: "Moscow Mule",
        picture: require("../assets/default-drink.jpg"),
        description: "",
    },
    {
        name: "Negroni",
        picture: require("../assets/default-drink.jpg"),
        description: "",
    },
    {
        name: "Sex on the Beach",
        picture: require("../assets/default-drink.jpg"),
        description: "",
    },
    {
        name: "Kamikaze",
        picture: require("../assets/default-drink.jpg"),
        description: "",
    },

]

export default drinks;