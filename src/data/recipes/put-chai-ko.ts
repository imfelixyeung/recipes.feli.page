import { Recipe } from ".";
import { ingredients } from "../ingredients";
import { units } from "../units";

export const putChaiKo: Recipe = {
    slug: "put-chai-ko",
    name: {
        "en-GB": "Put Chai Ko (Red Bean Pudding Cake, 6)",
        "zh-HK": "砵仔糕（6個）",
    },
    description: {
        "en-GB":
            "Soft red beans in a bouncy, chewy steamed cake made from rice and tapioca flour, sweetened with brown sugar.",
        "zh-HK":
            "軟腍嘅紅豆配煙煙韌韌嘅米粉糕，加埋木薯粉變彈牙，再落片糖同黃糖添甜味，就係街邊成日見到嗰種砵仔糕。",
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
