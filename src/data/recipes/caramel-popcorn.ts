import { Recipe } from ".";
import { ingredients } from "../ingredients";
import { units } from "../units";

export const caramelPopcorn: Recipe = {
    slug: "caramel-popcorn",
    name: { "en-GB": "Caramel Popcorn", "zh-HK": "焦糖爆谷" },
    source: "https://youtu.be/qrnDAiFucQ8?si=7yjoHs6aCa7PJ7Xl",
    requirements: [
        {
            type: "ingredient",
            ingredient: ingredients.poppingCorn,
            measurement: { unit: units.gram, value: 40 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.whiteSugar,
            measurement: { unit: units.gram, value: 40 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.butterUnsalted,
            measurement: { unit: units.gram, value: 25 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.butterUnsalted,
            measurement: { unit: units.gram, value: 25 },
        },
    ],
    steps: [
        {
            type: "instruction",
            instruction: {
                "en-GB": "https://youtu.be/qrnDAiFucQ8",
                "zh-HK": "https://youtu.be/qrnDAiFucQ8",
            },
        },
    ],
};