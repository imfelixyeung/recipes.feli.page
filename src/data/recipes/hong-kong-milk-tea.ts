import { Recipe } from ".";
import { ingredients } from "../ingredients";
import { units } from "../units";

export const hongKongMilkTea: Recipe = {
    slug: "hong-kong-milk-tea",
    name: {
        "en-GB": "Hong Kong Milk Tea (Authentic, serves 3)",
        "zh-HK": "奶茶（正宗港式奶茶-3人份量）",
    },
    requirements: [
        {
            type: "ingredient",
            ingredient: ingredients.teaYorkshire,
            measurement: {
                unit: units.count,
                value: 7,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.teaMsStrong,
            measurement: {
                unit: units.tablespoon,
                value: 1,
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
                value: 3.5,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.milk,
            measurement: {
                unit: units.millilitre,
                value: [30, 40],
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.sugar,
            measurement: {
                unit: units.teaspoon,
                value: 1,
            },
        },
    ],
    steps: [
        {
            type: "instruction",
            instruction: {
                "en-GB": "Open the tea out and put it in a pot.",
                "zh-HK": "先將茶葉拆包放入煲。",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "Boil 3.5 cups of water.",
                "zh-HK": "用3.5杯水用水煲煲滾。",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "Pour the boiling water over the tea (first pour).",
                "zh-HK": "將滾水撞落茶葉度（一沖）。",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB":
                    "Heat on a low flame until it boils, then simmer for another 5-10 minutes (second steep) to release the tea flavour.",
                "zh-HK":
                    "細火加熱至水滾後再煲多5-10分鐘（二焗）（讓茶味釋放）。",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB":
                    "Pour the boiled tea into another pot, pouring back and forth 3-4 times (third pour) so the tea is well aerated, the aroma is even and the texture is smoother. If a lot of water evaporates, add a little more water.",
                "zh-HK":
                    "將滾咗嘅茶倒入另外一個煲，來回三至4次（三撞），使茶葉空氣充足、茶香均勻且口感更滑。如果水蒸發得多就可以加多啲水。",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB":
                    "Simmer the tea again on a low flame for 5-10 minutes (fourth reheat); once the tea is hot it is ready to enjoy.",
                "zh-HK":
                    "再用細火將茶煲5-10分鐘（四回溫），水煲熱後便可享用。",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB":
                    "If drinking it hot, keep the cup warm with hot water (this step can be skipped).",
                "zh-HK": "如果飲熱嘅奶茶：用熱水將茶杯保溫（此步驟可省卻）。",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB":
                    "Add about 1/3 to 1/4 cup of evaporated milk (30-40ml) to the cup (tea to milk ratio 7:3).",
                "zh-HK":
                    "加大概1/3至1/4杯嘅花奶（30-40ml）落杯度（茶奶比例7:3）。",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB":
                    "Pour the boiled tea into the evaporated milk (remember to strain through a sieve).",
                "zh-HK":
                    "將煲滾咗嘅茶撞入花奶（記得用sieve隔渣）。",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB":
                    "Finally add a little more evaporated milk to make the cup of milk tea smoother.",
                "zh-HK": "最後再加返少少花奶（令到杯奶茶更滑）。",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB": "Finally, add sugar to taste.",
                "zh-HK": "最後視乎喜好加糖。",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB":
                    "The milk tea mnemonic: 1 pour, 2 steep, 3 splash, 4 reheat. If you are adding ice, increase the ratio of tea.",
                "zh-HK":
                    "沖奶茶口訣：1沖2焗3撞4回溫。如果奶茶要加冰，茶葉的比例要提高。",
            },
        },
    ],
};
