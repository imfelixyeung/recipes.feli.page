import { Recipe } from ".";
import { ingredients } from "../ingredients";
import { units } from "../units";

export const chiffonCake: Recipe = {
    slug: "chiffon-cake",
    name: {
        "en-GB": "Chiffon Cake (Christine)",
        "zh-HK": "戚風蛋糕（姬絲汀）",
    },
    description: {
        "en-GB":
            "Wobbling-light chiffon that rises tall and airy in an 8-inch tin — scored on top and baked low and slow for that classic bakery texture.",
        "zh-HK":
            "戚風蛋糕漲到高高地，質地又輕又軟，用8吋模慢慢焗，面頭劃咗線所以特別漲得起。同麵包舖買嗰啲一樣鬆。",
    },
    source: "https://www.christinesrecipes.com/2016/07/orange-chiffon-cake.html",
    requirements: [
        {
            type: "ingredient",
            ingredient: ingredients.flourLowGluten,
            measurement: { unit: units.gram, value: 100 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.powderBaking,
            measurement: { unit: units.teaspoon, value: 1 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.salt,
            measurement: { unit: units.teaspoon, value: 1 / 8 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.eggYolk,
            measurement: { unit: units.count, value: 5 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.sugar,
            measurement: { unit: units.gram, value: 30 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.milk,
            measurement: { unit: units.millilitre, value: 100 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.oil,
            measurement: { unit: units.millilitre, value: 80 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.eggWhite,
            measurement: { unit: units.count, value: 5 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.sugar,
            measurement: { unit: units.gram, value: 60 },
        },
    ],
    steps: [
        {
            type: "instruction",
            instruction: {
                "en-GB": "Preheat the oven to 180°C and use an 8-inch tin.",
                "zh-HK": "預熱焗爐到180度，用8吋模。",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB":
                    "Bake in the middle of the oven at 180°C for 5-10 minutes, then score a line on the surface. Lower to 160°C and bake for another 30 minutes, then 140°C for the final 15 minutes.",
                "zh-HK":
                    "放喺焗爐中間，用180度焗5-10分鐘之後劃線，之後轉160度焗多30分鐘，最後轉140度焗15分鐘。",
            },
        },
    ],
};
