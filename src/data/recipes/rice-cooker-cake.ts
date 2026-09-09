import { Recipe } from ".";
import { ingredients } from "../ingredients";
import { units } from "../units";

export const riceCookerCake: Recipe = {
    slug: "rice-cooker-cake",
    name: {
        "en-GB": "Rice Cooker Cake (Tastes Like Paper-wrapped Cake)",
        "zh-HK": "電飯煲蛋糕（味道似紙包蛋糕）",
    },
    description: {
        "en-GB":
            "A paper-wrapped cake that never saw an oven — the sponge bakes to golden perfection inside a rice cooker lined with baking paper, tasting just like the bakery version.",
        "zh-HK":
            "用電飯煲就整到紙包蛋糕嘅味道，飯煲入面墊張焗爐紙，唔使焗爐都焗得出金黃鬆軟嘅蛋糕。",
    },
    requirements: [
        {
            type: "ingredient",
            ingredient: ingredients.flourLowGluten,
            measurement: { unit: units.gram, value: 100 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.powderBaking,
            measurement: { unit: units.teaspoon, value: 1 / 2 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.eggs,
            measurement: { unit: units.count, value: [3, 4] },
        },
        {
            type: "ingredient",
            ingredient: ingredients.whiteSugar,
            measurement: { unit: units.gram, value: 70 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.butterUnsalted,
            measurement: { unit: units.gram, value: 50 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.vanillaExtract,
            measurement: { unit: units.teaspoon, value: 1 / 2 },
        },
    ],
    steps: [
        {
            type: "instruction",
            instruction: {
                "en-GB":
                    "Mix the low-gluten flour with the baking powder and sieve twice.",
                "zh-HK": "將低筋麵粉同發粉篩勻兩次。",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB":
                    "Line the rice cooker with a sheet of baking paper — no need to grease the cooker.",
                "zh-HK": "放一張焗爐紙喺電飯煲入面，飯煲唔使塗油。",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB":
                    "Set the rice cooker to the white rice mode. Once it finishes, wait 30 minutes before taking the cake out.",
                "zh-HK": "飯煲用白飯模式，煲完之後等多30分鐘先至拎出嚟。",
            },
        },
    ],
};
