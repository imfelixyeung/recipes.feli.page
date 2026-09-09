import { Recipe } from ".";
import { ingredients } from "../ingredients";
import { units } from "../units";

export const hongKongEggRolls: Recipe = {
    slug: "egg-rolls",
    name: { "en-GB": "Hong Kong Egg Rolls (30)", "zh-HK": "蛋卷（30條）" },
    description: {
        "en-GB":
            "Feather-light spiralled egg rolls, each one cooked in the pan for a few seconds each side until crisp, buttery and impossibly moreish.",
        "zh-HK":
            "又薄又鬆嘅蛋卷，逐條細火慢慢烘，烘到脆卜卜，牛油味香到停唔到口。",
    },
    requirements: [
        {
            type: "ingredient",
            ingredient: ingredients.eggs,
            measurement: { unit: units.count, value: 1 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.sugar,
            measurement: { unit: units.gram, value: 50 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.butterUnsalted,
            measurement: { unit: units.gram, value: 32 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.milk,
            measurement: { unit: units.gram, value: 85 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.flourLowGluten,
            measurement: { unit: units.gram, value: 100 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.vanillaExtract,
            measurement: { unit: units.teaspoon, value: 1 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.bakingSoda,
            measurement: { unit: units.teaspoon, value: 1 / 2 },
        },
        {
            type: "ingredient",
            ingredient: ingredients.powderBaking,
            measurement: { unit: units.teaspoon, value: [1 / 2, 1] },
        },
    ],
    steps: [
        {
            type: "instruction",
            instruction: {
                "en-GB": "Whip the mixture with an electric mixer.",
                "zh-HK": "用電動攪拌器打起。",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB":
                    "Cook over low heat — add one tablespoon of batter to the pan, cook for about 15 seconds on each side, and lift the lid to check by eye.",
                "zh-HK":
                    "開細火，放一湯匙粉醬入pan，每邊燒大概15秒，打開目測下得唔得。",
            },
        },
    ],
};
