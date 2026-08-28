export type Ingredient = {
    id: string;
    name: string;
};

export const ingredients = {
    curryPowder: {
        id: "curry-powder",
        name: "Curry Powder",
    },
    fiveSpicePowder: {
        id: "five-spice-powder",
        name: "Five Spice Powder",
    },
    chiliPowder: {
        id: "chili-powder",
        name: "Chili Powder",
    },
    maltose: {
        id: "maltose",
        name: "Maltose",
    },
    salt: {
        id: "salt",
        name: "Salt",
    },
    sugar: {
        id: "sugar",
        name: "Sugar",
    },
    water: {
        id: "water",
        name: "Water",
    },
    wheatGluten: {
        id: "wheat-gluten",
        name: "Wheat Gluten",
    },
    flourPlain: {
        id: "plain-flour",
        name: "Plain Flour",
    },
    yeast: {
        id: "yeast",
        name: "Teast",
    },
} as const satisfies Record<string, Ingredient>;
