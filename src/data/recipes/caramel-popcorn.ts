import { Recipe } from ".";
import { ingredients } from "../ingredients";
import { units } from "../units";

export const caramelPopcorn: Recipe = {
    slug: "caramel-popcorn",
    name: { "en-GB": "Caramel Popcorn", "zh-HK": "焦糖爆谷" },
    description: {
        "en-GB":
            "The crispiest stovetop caramel popcorn — butter and sugar melted into a glossy caramel that coats every single kernel.",
        "zh-HK":
            "喺屋企用煲就整到嘅焦糖爆谷，牛油加糖煮成焦糖，每粒爆谷都掛滿脆脆嘅焦糖殼。",
    },
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
