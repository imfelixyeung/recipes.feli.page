import { Recipe } from ".";
import { ingredients } from "../ingredients";
import { units } from "../units";

const friedDough: Recipe = {
    slug: "bbq-fried-dough-dough",
    name: { "en-GB": "Dough", "zh-HK": "麵團" },
    requirements: [
        {
            type: "ingredient",
            ingredient: ingredients.wheatGluten,
            measurement: {
                unit: units.gram,
                value: 100,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.flourPlain,
            measurement: {
                unit: units.gram,
                value: 10,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.yeast,
            measurement: {
                unit: units.gram,
                value: 2,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.water,
            measurement: {
                unit: units.gram,
                value: 110,
            },
        },
    ],
    steps: [
        {
            type: "instruction",
            instruction: {
                "en-GB": "Mix yeast with water",
                "zh-HK": "將酵母同水混合",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "Mix wheat gluten, flour with yeast water",
                "zh-HK": "將小麥麵糊、麵粉同酵母水混合",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB":
                    "Wrap dough with cling film until 2x size, about 2 hours",
                "zh-HK": "用保鮮膜包住麵團直至2倍大，大約2個鐘",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "Steam 30 for minutes",
                "zh-HK": "蒸30分鐘",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "Let cool until warm",
                "zh-HK": "放涼直至溫暖",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "Cut into thumb-sized pieces",
                "zh-HK": "切成拇指大小嘅塊",
            },
        },
        {
            type: "air-fry",
            temperature: 180,
            duration: { seconds: 30 },
            instruction: {
                "en-GB": "until dry and dark",
                "zh-HK": "直到乾咗同暗咗",
            },
        },
        {
            type: "instruction",
            instruction: { "en-GB": "Let cool", "zh-HK": "等佢降溫" },
        },
    ],
};

const bbqSauce: Recipe = {
    slug: "bbq-fried-dough-sauce",
    name: { "en-GB": "BBQ Fried Dough (Sauce)", "zh-HK": "醬汁" },
    requirements: [
        {
            type: "ingredient",
            ingredient: ingredients.curryPowder,
            measurement: {
                unit: units.teaspoon,
                value: 2,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.fiveSpicePowder,
            measurement: {
                unit: units.teaspoon,
                value: 1,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.chiliPowder,
            measurement: {
                unit: units.teaspoon,
                value: 1,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.maltose,
            measurement: {
                unit: units.tablespoon,
                value: [3, 4],
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.salt,
            measurement: {
                unit: units.teaspoon,
                value: 1 / 4,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.sugar,
            measurement: {
                unit: units.tablespoon,
                value: [3, 4],
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.water,
            measurement: {
                unit: units.millilitre,
                value: 100,
            },
        },
    ],
    steps: [
        {
            type: "instruction",
            instruction: {
                "en-GB": "Use hot water to dissolve maltose",
                "zh-HK": "用熱水溶解麥芽糖",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "On a pan, add fried powders until fragrant",
                "zh-HK": "喺鑊上面，加入香粉，直至香味濃郁",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "Add maltose water, sugar and salt into pan",
                "zh-HK": "將麥芽糖水、糖同鹽放入鑊內",
            },
        },
        {
            type: "instruction",
            instruction: { "en-GB": "Stir until gooey", "zh-HK": "攪到好黏" },
        },
    ],
};

export const bbqFriedDough: Recipe = {
    slug: "bbq-fried-dough",
    name: { "en-GB": "BBQ Fried Dough", "zh-HK": "齋燒鵝" },
    requirements: [
        { type: "recipe", recipe: friedDough },
        { type: "recipe", recipe: bbqSauce },
    ],
    steps: [
        {
            type: "recipe",
            recipe: friedDough,
        },
        {
            type: "recipe",
            recipe: bbqSauce,
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "Quickly mix fried dough into bbq sauce",
                "zh-HK": "快速將炸麵團同燒烤醬混合",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "Use fan to cool down quickly",
                "zh-HK": "用風扇快速降溫",
            },
        },
    ],
};
