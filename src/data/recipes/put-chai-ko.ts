import { Recipe } from ".";
import { ingredients } from "../ingredients";
import { units } from "../units";

export const putChaiKo: Recipe = {
    slug: "put-chai-ko",
    name: {
        "en-GB": "Put Chai Ko (Red Bean Pudding Cake, 6)",
        "zh-HK": "砵仔糕（6個）",
    },
    requirements: [
        {
            type: "ingredient",
            ingredient: ingredients.redBeans,
            measurement: { unit: units.gram, value: 200 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.riceFlour,
            measurement: { unit: units.gram, value: 75 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.flourTapioca,
            measurement: { unit: units.gram, value: 25 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.water,
            measurement: { unit: units.millilitre, value: 100 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.brownSugarSlab,
            measurement: { unit: units.gram, value: 40 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.brownSugar,
            measurement: { unit: units.gram, value: 30 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.water,
            measurement: { unit: units.millilitre, value: 180 },
        },
    ],
    steps: [
        {
            type: "instruction",
            instruction: {
                "en-GB":
                    "Soak the red beans in warm water overnight (8+ hours).",
                "zh-HK": "紅豆用暖水浸過夜（8個鐘以上）。",
            },
        },
    ],
};