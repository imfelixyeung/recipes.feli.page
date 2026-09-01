import { Recipe } from ".";
import { ingredients } from "../ingredients";
import { units } from "../units";

const eggTartPastry: Recipe = {
    slug: "egg-tart-pastry",
    name: { "en-GB": "Pastry", "zh-HK": "撻皮" },
    requirements: [
        {
            type: "ingredient",
            ingredient: ingredients.flourLowGluten,
            measurement: { unit: units.gram, value: 110 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.icingSugar,
            measurement: { unit: units.gram, value: 28 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.butterUnsalted,
            measurement: { unit: units.gram, value: 65 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.eggs,
            measurement: { unit: units.count, value: 0.5 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.milkPowder,
            measurement: { unit: units.gram, value: 5 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.salt,
            measurement: { unit: units.gram, value: 0.5 },
        },
    ],
    steps: [
        {
            type: "instruction",
            instruction: {
                "en-GB": "Whip the butter until it turns pale in colour.",
                "zh-HK": "將牛油打發至顏色變淺。",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "Add the egg a little at a time, in several batches.",
                "zh-HK": "分幾次逐少加入蛋液。",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "Add the flour, then the salt.",
                "zh-HK": "加入麵粉，再加入鹽。",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB":
                    "Mix until you can no longer see the flour, then stop.",
                "zh-HK": "拌至睇唔到麵粉即可，唔好過度攪拌。",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "Chill in the fridge for 3 hours.",
                "zh-HK": "放入雪櫃雪3個鐘。",
            },
        },
    ],
};

const eggTartFilling: Recipe = {
    slug: "egg-tart-filling",
    name: { "en-GB": "Egg Filling", "zh-HK": "蛋漿" },
    requirements: [
        {
            type: "ingredient",
            ingredient: ingredients.eggs,
            measurement: { unit: units.count, value: 2 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.water,
            measurement: { unit: units.gram, value: 114 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.sugar,
            measurement: { unit: units.gram, value: 38 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.milk,
            measurement: { unit: units.gram, value: 38 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.powderCustard,
            measurement: { unit: units.gram, value: 4 },
        },
    ],
    steps: [
        {
            type: "instruction",
            instruction: {
                "en-GB": "Mix the egg and sugar together.",
                "zh-HK": "將蛋同糖拌勻。",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "Mix the water, evaporated milk and custard powder together.",
                "zh-HK": "將水、淡奶同吉士粉拌勻。",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "Add the milk mixture from step 2 into the egg mixture.",
                "zh-HK": "將步驟2嘅奶漿倒入蛋糊度。",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "Sieve the mixture 3 times.",
                "zh-HK": "過篩3次。",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "Put it in the fridge.",
                "zh-HK": "放入雪櫃雪住。",
            },
        },
    ],
};

export const eggTart: Recipe = {
    slug: "egg-tart",
    name: { "en-GB": "Hong Kong Egg Tart (8 nos.)", "zh-HK": "港式蛋撻（8個）" },
    source: "https://youtu.be/gVaJst9YGGI",
    requirements: [
        { type: "recipe", recipe: eggTartPastry },
        { type: "recipe", recipe: eggTartFilling },
    ],
    steps: [
        { type: "recipe", recipe: eggTartPastry },
        { type: "recipe", recipe: eggTartFilling },
        {
            type: "instruction",
            instruction: {
                "en-GB":
                    "Use 24g of pastry per 7cm egg tart mould; use 4 pieces of pastry if using a large mould.",
                "zh-HK":
                    "7cm蛋撻模用24g撻皮；如果用較大嘅模就用4件撻皮。",
            },
        },
    ],
};