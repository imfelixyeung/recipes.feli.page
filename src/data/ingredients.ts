import { LocalisedString } from "../i18n";

export type Ingredient = {
    slug: string;
    name: LocalisedString;
};

export const ingredients = {
    curryPowder: {
        slug: "curry-powder",
        name: { "en-GB": "Curry Powder", "zh-HK": "咖喱粉" },
    },
    fiveSpicePowder: {
        slug: "five-spice-powder",
        name: { "en-GB": "Five Spice Powder", "zh-HK": "五香粉" },
    },
    chiliPowder: {
        slug: "chili-powder",
        name: { "en-GB": "Chili Powder", "zh-HK": "辣椒粉" },
    },
    maltose: {
        slug: "maltose",
        name: { "en-GB": "Maltose", "zh-HK": "麥芽糖" },
    },
    salt: {
        slug: "salt",
        name: { "en-GB": "Salt", "zh-HK": "鹽" },
    },
    sugar: {
        slug: "sugar",
        name: { "en-GB": "Sugar", "zh-HK": "糖" },
    },
    water: {
        slug: "water",
        name: { "en-GB": "Water", "zh-HK": "水" },
    },
    wheatGluten: {
        slug: "wheat-gluten",
        name: { "en-GB": "Wheat Gluten", "zh-HK": "小麥麵糊" },
    },
    flourPlain: {
        slug: "plain-flour",
        name: { "en-GB": "Plain Flour", "zh-HK": "普通麵粉" },
    },
    yeast: {
        slug: "yeast",
        name: { "en-GB": "Teast", "zh-HK": "酵母" },
    },
} as const satisfies Record<string, Ingredient>;

export type IngredientSlug = keyof typeof ingredients;
