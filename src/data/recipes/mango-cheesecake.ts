import { Recipe } from ".";
import { ingredients } from "../ingredients";
import { units } from "../units";

const biscuitBase: Recipe = {
    slug: "mango-cheesecake-biscuit-base",
    name: { "en-GB": "Biscuit Base", "zh-HK": "消化餅餅底" },
    requirements: [
        {
            type: "ingredient",
            ingredient: ingredients.digestiveBiscuits,
            measurement: {
                unit: units.gram,
                value: 170,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.butterUnsalted,
            measurement: {
                unit: units.gram,
                value: 75,
            },
        },
    ],
    steps: [
        {
            type: "instruction",
            instruction: {
                "en-GB": "Crush digestive biscuits into fine crumbs",
                "zh-HK": "將消化餅壓成幼碎",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "Melt the butter",
                "zh-HK": "將牛油煮溶",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "Mix the melted butter into the biscuit crumbs until combined",
                "zh-HK": "將溶咗嘅牛油同餅碎撈勻",
            },
        },
    ],
};

const mangoCheesecakeFilling: Recipe = {
    slug: "mango-cheesecake-filling",
    name: { "en-GB": "Mango Cheesecake Filling", "zh-HK": "芒果芝士蛋糕餡" },
    requirements: [
        {
            type: "ingredient",
            ingredient: ingredients.mangoJellyMix,
            measurement: {
                unit: units.box,
                value: 1,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.gelatinPowder,
            measurement: {
                unit: units.teaspoon,
                value: 1,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.water,
            measurement: {
                unit: units.millilitre,
                value: 120,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.water,
            measurement: {
                unit: units.tablespoon,
                value: 2,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.creamCheese,
            measurement: {
                unit: units.gram,
                value: 165,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.doubleCream,
            measurement: {
                unit: units.millilitre,
                value: 300,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.sugar,
            measurement: {
                unit: units.gram,
                value: 35,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.frozenMangoChunks,
            measurement: {
                unit: units.gram,
                value: 300,
            },
        },
    ],
    steps: [
        {
            type: "instruction",
            instruction: {
                "en-GB": "Save some mango chunks aside",
                "zh-HK": "留起一部分芒果粒",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "Blend the remaining mango chunks until smooth",
                "zh-HK": "將剩餘嘅芒果粒打成芒果蓉",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "Save some mango smoothie aside",
                "zh-HK": "留起一部分芒果蓉",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "Melt the jelly mix in the hot water",
                "zh-HK": "用熱水將芒果啫喱粉溶開",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "Dissolve gelatin powder in room temperature water",
                "zh-HK": "用室溫水將魚膠粉溶開",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "Mix the jelly mixture and gelatin mixture together",
                "zh-HK": "將啫喱溶液同魚膠粉溶液撈埋一齊",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "Beat double cream until creamy",
                "zh-HK": "將忌廉打至杰身",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "Add sugar to the cream cheese and beat until creamy",
                "zh-HK": "將糖加入忌廉芝士，打至軟滑",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "Fold the double cream and cream cheese together",
                "zh-HK": "將忌廉同忌廉芝士拌勻",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "Fold the mango smoothie into the mixture",
                "zh-HK": "將芒果蓉拌入混合物入面",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "Fold the jelly mixture into the mixture",
                "zh-HK": "將啫喱溶液拌入混合物入面",
            },
        },
    ],
};

export const mangoCheesecake: Recipe = {
    slug: "mango-cheesecake",
    name: { "en-GB": "Mango Cheesecake", "zh-HK": "芒果芝士蛋糕" },
    description: {
        "en-GB":
            "A no-bake mango cheesecake with a buttery digestive biscuit base, whipped double cream and cream cheese folded together with mango purée and jelly, topped with a mango swirl.",
        "zh-HK":
            "免焗芒果芝士蛋糕，用消化餅做牛油餅底，將淡忌廉同忌廉芝士拌勻，撈入芒果蓉同啫喱，頂面仲有芒果花紋，又滑又香甜。",
    },
    requirements: [
        { type: "recipe", recipe: biscuitBase },
        { type: "recipe", recipe: mangoCheesecakeFilling },
    ],
    steps: [
        {
            type: "recipe",
            recipe: biscuitBase,
        },
        {
            type: "recipe",
            recipe: mangoCheesecakeFilling,
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "Layer the biscuit base onto the bottom of the cake pan",
                "zh-HK": "將餅底鋪喺蛋糕模底部",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "Pour the filling into the cake pan",
                "zh-HK": "將餡料倒入蛋糕模",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "Put the mango chunks into the middle of the cake",
                "zh-HK": "將芒果粒放入蛋糕中間",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "Swirl the mango smoothie over the surface of the cake",
                "zh-HK": "喺蛋糕面用芒果蓉畫花",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "Refrigerate overnight",
                "zh-HK": "放入雪櫃雪過夜",
            },
        },
    ],
};