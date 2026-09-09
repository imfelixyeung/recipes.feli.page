import { Recipe } from ".";
import { ingredients } from "../ingredients";
import { units } from "../units";

export const eggWaffleRecipe: Recipe = {
    name: { "en-GB": "Egg Waffle", "zh-HK": "格仔餅 夾餅 雞蛋仔" },
    description: {
        "en-GB":
            "Crisp outside, chewy within — the batter blends low-gluten flour with tapioca and custard powder, then rests for half an hour before a quick five-minute bake.",
        "zh-HK":
            "外脆內軟，麵糊用低筋麵粉溝木薯粉同吉士粉，靜置半個鐘先焗，焗足五分鐘就食到街邊嗰種口感。",
    },
    slug: "egg-waffle",
    requirements: [
        {
            type: "ingredient",
            ingredient: ingredients.flourLowGluten,
            measurement: {
                unit: units.gram,
                value: 165,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.flourTapioca,
            measurement: {
                unit: units.gram,
                value: 35,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.powderCustard,
            measurement: {
                unit: units.gram,
                value: 15,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.powderBaking,
            measurement: {
                unit: units.gram,
                value: 10,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.sugar,
            measurement: {
                unit: units.gram,
                value: 50,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.eggs,
            measurement: {
                unit: units.gram,
                value: 120,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.milkEvaporated,
            measurement: {
                unit: units.gram,
                value: 30,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.milk,
            measurement: {
                unit: units.gram,
                value: 200,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.oil,
            measurement: {
                unit: units.gram,
                value: 45,
            },
        },
    ],
    steps: [
        {
            type: "instruction",
            instruction: {
                "en-GB":
                    "Mix the dry ingredients, then wet the ingredients, and finally put the oil and sift",
                "zh-HK": "乾料拌勻，再加濕料，最後放油，過篩",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB":
                    "Let stand for half an hour before using, machine bake for 5 minutes to finish",
                "zh-HK": "靜止半個鐘先用，機焗5分鐘完成",
            },
        },
    ],
};
