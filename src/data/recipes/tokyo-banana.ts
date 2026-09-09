import { Recipe } from ".";
import { ingredients } from "../ingredients";
import { units } from "../units";

export const tokyoBanana: Recipe = {
    slug: "tokyo-banana",
    name: {
        "en-GB": "Banana Cream Sponge Cake (Tokyo Banana)",
        "zh-HK": "香蕉糕",
    },
    source: "https://youtu.be/LBo_2euj__c",
    requirements: [
        {
            type: "ingredient",
            ingredient: ingredients.flourLowGluten,
            measurement: { unit: units.gram, value: 50 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.eggYolk,
            measurement: { unit: units.count, value: 3 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.sugar,
            measurement: { unit: units.gram, value: 15 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.eggWhite,
            measurement: { unit: units.count, value: 4 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.sugar,
            measurement: { unit: units.gram, value: 45 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.oil,
            measurement: { unit: units.gram, value: 30 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.bananaFlavouredMilk,
            measurement: { unit: units.millilitre, value: 30 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.banana,
            measurement: { unit: units.count, value: 1 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.eggYolk,
            measurement: { unit: units.count, value: 1 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.bananaFlavouredMilk,
            measurement: { unit: units.millilitre, value: 150 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.cornStarch,
            measurement: { unit: units.gram, value: 15 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.sugar,
            measurement: { unit: units.gram, value: 30 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.vanillaExtract,
            measurement: { unit: units.drop, value: [3, 4] },
        },
        {
            type: "ingredient",
            ingredient: ingredients.lemonJuice,
            measurement: { unit: units.teaspoon, value: 1 / 4 },
        },
    ],
    steps: [
        {
            type: "instruction",
            instruction: {
                "en-GB": "https://youtu.be/LBo_2euj__c",
                "zh-HK": "https://youtu.be/LBo_2euj__c",
            },
        },
    ],
};