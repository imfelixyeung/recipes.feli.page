import { Recipe } from ".";
import { ingredients } from "../ingredients";
import { units } from "../units";

export const pineappleBun: Recipe = {
    slug: "pineapple-bun",
    name: { "en-GB": "Pineapple Bun", "zh-HK": "菠蘿包" },
    description: {
        "en-GB":
            "That signature crackled golden topping wrapped around a soft brioche bun — a Hong Kong bakery classic, baked at home with a crisp buttery crust.",
        "zh-HK":
            "菠蘿包最正就係面頭嗰層脆脆地嘅菠蘿皮，配軟熟嘅麵包，焗出嚟有焦香又甜。喺屋企整一樣有餅店嗰種經典風味。",
    },
    requirements: [
        {
            type: "ingredient",
            ingredient: ingredients.briocheBun,
            measurement: { unit: units.count, value: 4 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.flourLowGluten,
            measurement: { unit: units.gram, value: 50 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.butterUnsalted,
            measurement: { unit: units.gram, value: 20 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.milkPowder,
            measurement: { unit: units.gram, value: 5 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.sugar,
            measurement: { unit: units.gram, value: 40 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.eggYolk,
            measurement: { unit: units.count, value: 0.5 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.powderBaking,
            measurement: { unit: units.teaspoon, value: 1 / 4 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.milk,
            measurement: { unit: units.tablespoon, value: 1 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.eggs,
            measurement: { unit: units.count, value: 1 },
        },
    ],
    steps: [
        {
            type: "instruction",
            instruction: {
                "en-GB":
                    "Bake with top heat at 180°C for 15 minutes, opening the oven door occasionally to let the steam escape.",
                "zh-HK": "用180度上火焗15分鐘，久唔久打開焗爐門散走水蒸汽。",
            },
        },
    ],
};
