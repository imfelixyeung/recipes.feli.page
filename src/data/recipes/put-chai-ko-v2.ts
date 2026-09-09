import { Recipe } from ".";
import { ingredients } from "../ingredients";
import { units } from "../units";

export const putChaiKoV2: Recipe = {
    slug: "put-chai-ko-v2",
    name: { "en-GB": "Put Chai Ko v2 (6)", "zh-HK": "砵仔糕v2（6個）" },
    description: {
        "en-GB":
            "Soft, bouncy steamed rice puddings in little bowls, sweetened with fragrant brown sugar and topped with red beans.",
        "zh-HK":
            "軟糯彈牙嘅砵仔糕，用黃糖整到又甜又香，面頭鋪滿紅豆，好似街邊檔嗰種味道。",
    },
    requirements: [
        {
            type: "ingredient",
            ingredient: ingredients.riceFlour,
            measurement: { unit: units.gram, value: 55 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.flourTapioca,
            measurement: { unit: units.gram, value: 10 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.cornStarch,
            measurement: { unit: units.gram, value: 15 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.water,
            measurement: { unit: units.millilitre, value: 110 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.brownSugarSlab,
            measurement: { unit: units.gram, value: 40 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.brownSugar,
            measurement: { unit: units.gram, value: 40 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.water,
            measurement: { unit: units.millilitre, value: 140 },
        },
    ],
    steps: [
        {
            type: "instruction",
            instruction: {
                "en-GB":
                    "Mix ingredients 1-4 until there are no lumps, then set aside. Put the red beans into a bowl and steam the bowl until hot.",
                "zh-HK":
                    "將1-4攪勻至無粉粒，備用。之後將紅豆放入碗並連碗蒸熱。",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "Bring ingredients 5-7 to a boil.",
                "zh-HK": "將5-7煮滾。",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB":
                    "Pour the mix from step a into step b, keep it on low heat and stir constantly until slightly thickened, then immediately pour into the small bowls. Steam on high heat for 15 minutes, then keep the lid closed and leave to rest for 5 minutes.",
                "zh-HK":
                    "將a倒入至b，保持細火不停攪拌至有少少稠後，隨即倒入碗仔，用大火蒸15分，保持鑊蓋蓋上燜5分鐘。",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB":
                    "Once done, open the lid and let it cool before eating — reheat to slightly warm when serving.",
                "zh-HK": "完成，開蓋放涼後，食用時加熱至微溫先食。",
            },
        },
    ],
};
