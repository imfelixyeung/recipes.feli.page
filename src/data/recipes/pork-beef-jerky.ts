import { Recipe } from ".";
import { ingredients } from "../ingredients";
import { units } from "../units";

const maltoseWater: Recipe = {
    slug: "maltose-water",
    name: { "en-GB": "Maltose Water", "zh-HK": "麥芽糖水" },
    requirements: [
        {
            type: "ingredient",
            ingredient: ingredients.maltose,
            measurement: { unit: units.gram, value: 70 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.water,
            measurement: { unit: units.gram, value: 10 },
        },
    ],
    steps: [
        {
            type: "instruction",
            instruction: {
                "en-GB": "Mix the maltose with the hot water and stir until dissolved.",
                "zh-HK": "將麥芽糖同熱水攪勻至溶化。",
            },
        },
    ],
};

export const porkBeefJerky: Recipe = {
    slug: "pork-beef-jerky",
    name: { "en-GB": "Pork/Beef Jerky", "zh-HK": "豬肉乾 牛肉乾" },
    source: "https://youtu.be/RGp1Odmytsk",
    requirements: [
        {
            type: "ingredient",
            ingredient: ingredients.mincedBeef,
            measurement: { unit: units.gram, value: 500 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.mincedPork,
            measurement: { unit: units.gram, value: 500 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.sugar,
            measurement: { unit: units.gram, value: 120 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.fishSauce,
            measurement: { unit: units.gram, value: 25 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.shaoxingWine,
            measurement: { unit: units.teaspoon, value: 1 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.oysterSauce,
            measurement: { unit: units.teaspoon, value: 1 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.hoisinSauce,
            measurement: { unit: units.teaspoon, value: 1 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.sesameOil,
            measurement: { unit: units.teaspoon, value: 1 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.oil,
            measurement: { unit: units.teaspoon, value: 1 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.whitePepper,
            measurement: { unit: units.teaspoon, value: 3 / 4 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.fiveSpicePowder,
            measurement: { unit: units.teaspoon, value: 1 / 2 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.chickenPowder,
            measurement: { unit: units.teaspoon, value: 1 / 2 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.honey,
            measurement: { unit: units.teaspoon, value: 3 },
        },
        {
            type: "recipe",
            recipe: maltoseWater,
        },
    ],
    steps: [
        {
            type: "instruction",
            instruction: {
                "en-GB": "https://youtu.be/RGp1Odmytsk",
                "zh-HK": "https://youtu.be/RGp1Odmytsk",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB":
                    "Add extra honey if you prefer a heavier honey glaze.",
                "zh-HK": "喜歡蜜汁重嘅可以額外加蜜糖。",
            },
        },
    ],
};