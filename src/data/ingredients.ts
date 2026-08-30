export type Ingredient = {
    slug: string;
    name: string;
};

export const ingredients = {
    curryPowder: {
        slug: "curry-powder",
        name: "Curry Powder",
    },
    fiveSpicePowder: {
        slug: "five-spice-powder",
        name: "Five Spice Powder",
    },
    chiliPowder: {
        slug: "chili-powder",
        name: "Chili Powder",
    },
    maltose: {
        slug: "maltose",
        name: "Maltose",
    },
    salt: {
        slug: "salt",
        name: "Salt",
    },
    sugar: {
        slug: "sugar",
        name: "Sugar",
    },
    water: {
        slug: "water",
        name: "Water",
    },
    wheatGluten: {
        slug: "wheat-gluten",
        name: "Wheat Gluten",
    },
    flourPlain: {
        slug: "plain-flour",
        name: "Plain Flour",
    },
    yeast: {
        slug: "yeast",
        name: "Teast",
    },
} as const satisfies Record<string, Ingredient>;

export type IngredientSlug = keyof typeof ingredients;
