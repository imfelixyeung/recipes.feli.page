import { Recipe } from ".";
import { ingredients } from "../ingredients";
import { units } from "../units";

export const creamPuffs: Recipe = {
    slug: "cream-puffs",
    name: { "en-GB": "Cream Puffs (12)", "zh-HK": "泡芙（12個）" },
    requirements: [
        {
            type: "ingredient",
            ingredient: ingredients.water,
            measurement: { unit: units.gram, value: 70 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.milk,
            measurement: { unit: units.gram, value: 80 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.flourLowGluten,
            measurement: { unit: units.gram, value: 120 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.eggs,
            measurement: { unit: units.gram, value: 250 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.salt,
            measurement: { unit: units.gram, value: 2 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.butterUnsalted,
            measurement: { unit: units.gram, value: 80 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.powderCustard,
            measurement: { unit: units.gram, value: 30 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.eggYolk,
            measurement: { unit: units.count, value: 4 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.sugar,
            measurement: { unit: units.gram, value: 70 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.milk,
            measurement: { unit: units.gram, value: 400 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.butterUnsalted,
            measurement: { unit: units.gram, value: 24 },
        },
    ],
    steps: [
        {
            type: "instruction",
            instruction: {
                "en-GB": "Bake at 190°C for 15 minutes, then 160°C until done.",
                "zh-HK": "用190度焗15分鐘，之後轉160度焗到完成。",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB":
                    "For the liquid, use 70g water + 80g milk, or 150ml of water instead.",
                "zh-HK": "液體可以用70g水加80g牛奶，或者直接用150ml水都得。",
            },
        },
    ],
};