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
    flourLowGluten: {
        slug: "low-gluten-flour",
        name: { "en-GB": "Low-gluten Flour", "zh-HK": "低筋麵粉" },
    },
    flourTapioca: {
        slug: "low-gluten-flour",
        name: { "en-GB": "Tapioca Flour", "zh-HK": "木薯粉" },
    },
    yeast: {
        slug: "yeast",
        name: { "en-GB": "Yeast", "zh-HK": "酵母" },
    },
    powderCustard: {
        slug: "powdercustard",
        name: { "en-GB": "Custard powder", "zh-HK": "吉士粉" },
    },
    powderBaking: {
        slug: "powderbaking",
        name: { "en-GB": "Baking powder", "zh-HK": "泡打粉" },
    },
    eggs: { slug: "eggs", name: { "en-GB": "Eggs", "zh-HK": "雞蛋" } },
    milk: {
        slug: "milk",
        name: { "en-GB": "Evaporated milk", "zh-HK": "淡奶" },
    },
    milkEvaporated: {
        slug: "milkevaporated",
        name: { "en-GB": "Milk", "zh-HK": "奶" },
    },
    oil: { slug: "oil", name: { "en-GB": "Oil", "zh-HK": "油" } },
    milkWhole: {
        slug: "whole-milk",
        name: { "en-GB": "Whole Milk", "zh-HK": "全脂奶" },
    },
    condensedMilk: {
        slug: "condensed-milk",
        name: { "en-GB": "Condensed Milk", "zh-HK": "煉奶" },
    },
    gingerJuice: {
        slug: "ginger-juice",
        name: { "en-GB": "Ginger Juice", "zh-HK": "薑汁" },
    },
    ginger: {
        slug: "ginger",
        name: { "en-GB": "Ginger", "zh-HK": "薑" },
    },
} as const satisfies Record<string, Ingredient>;

export type IngredientSlug = keyof typeof ingredients;
