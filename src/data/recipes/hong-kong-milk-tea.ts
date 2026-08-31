import { Recipe } from ".";
import { ingredients } from "../ingredients";
import { units } from "../units";

export const hongKongMilkTea: Recipe = {
    slug: "hong-kong-milk-tea",
    name: { "en-GB": "Hong Kong Milk Tea", "zh-HK": "港式奶茶" },
    requirements: [
        {
            type: "ingredient",
            ingredient: ingredients.teaYorkshire,
            measurement: {
                unit: units.count,
                value: 4,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.teaDecaf,
            measurement: {
                unit: units.count,
                value: 3,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.teaCeylon,
            measurement: {
                unit: units.count,
                value: 1,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.water,
            measurement: {
                unit: units.cup,
                value: 3,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.sugar,
            measurement: {
                unit: units.teaspoon,
                value: 2,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.milk,
            measurement: {
                unit: units.millimetre,
                value: 20,
            },
        },
    ],
    steps: [
        {
            type: "instruction",
            instruction: {
                "en-GB":
                    "Add the Yorkshire, decaf and Ceylon tea bags to 3 cups of cold water and bring to the boil. Once boiling, simmer for a further 5 minutes, then pour into a thermos.",
                "zh-HK":
                    "將約克郡、低因同錫蘭茶包放入3杯凍水度開始煲，水滾之後煮多5分鐘，然後放落保温壺度。",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB":
                    "Before drinking, take it out, reheat, and froth with a milk frother for 1-2 minutes until it is fully foamy.",
                "zh-HK":
                    "飲之前拎出嚟加熱，再用奶泡器打1兩分鐘，打到起晒泡。",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB":
                    "For each cup, add 2 tsp of sugar and pour in ~20mm of evaporated milk.",
                "zh-HK":
                    "每杯加2茶匙糖，再落大約20mm高嘅淡奶落杯度。",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB":
                    "Finally, pour the hot tea into the cup from a height to build up the froth, then serve.",
                "zh-HK": "最後將熱茶高空撞落杯度，打出奶泡，就可以飲。",
            },
        },
    ],
};
