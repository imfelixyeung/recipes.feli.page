import { Recipe } from ".";
import { ingredients } from "../ingredients";
import { units } from "../units";

export const gingerMilkPudding: Recipe = {
    slug: "ginger-milk-pudding",
    name: { "en-GB": "Ginger Milk Pudding", "zh-HK": "薑汁撞奶" },
    requirements: [
        {
            type: "ingredient",
            ingredient: ingredients.milkWhole,
            measurement: {
                unit: units.millilitre,
                value: 90,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.condensedMilk,
            measurement: {
                unit: units.millilitre,
                value: 30,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.gingerJuice,
            measurement: {
                unit: units.millilitre,
                value: 20,
            },
        },
    ],
    steps: [
        {
            type: "instruction",
            instruction: {
                "en-GB":
                    "Use high-protein milk (e.g. water buffalo milk), otherwise supermarket whole milk at ~3.5 g/100 ml is very hard to set. If using regular supermarket milk, add condensed milk at 1:3 to raise the protein.",
                "zh-HK":
                    "要揀蛋白質含量高嘅牛奶（所以網上一般都建議用水牛奶），超市嘅全脂奶得差唔多3.5g/100ml，基本上好難撞得成功。你可以用貴少少但蛋白高啲嘅牛奶；但如果你要用普通超市牛奶，就可以加煉奶去增加蛋白質成份。",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB":
                    "Use old/yellow ginger. If using regular (young) ginger, use at least 20 ml of juice per bowl, and don't throw away the sediment at the bottom of the juice — that is the secret to success. Stir it well before pouring the milk.",
                "zh-HK":
                    "老/黃薑固然好，如果你用生薑嘅話，每碗要用到20ml以上嘅薑汁。記得唔好倒咗薑汁嘅沉澱物，佢先至係薑汁撞奶成功嘅秘密，撞奶之前記得攪勻佢。",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB":
                    "The best temperature for pouring the milk is 75°C. Heat to around 80°C, wait a moment for it to drop slightly, then pour immediately.",
                "zh-HK":
                    "撞薑汁奶嘅最佳溫度係75度，你要煲到去大概80度，然後等一陣溫度跌少少就即刻撞落去。",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB":
                    "Cover the bowl immediately with a plate and leave it for 10 minutes.",
                "zh-HK": "撞完之後即刻用個碟冚住碗薑汁奶，等10分鐘就可以。",
            },
        },
        {
            type: "instruction",
            instruction: {
                "en-GB":
                    "Serve warm; the pudding sets into a silky, ginger-scented custard.",
                "zh-HK": "即刻食佢就得，撞奶會凝固成滑溜、帶薑味嘅布甸。",
            },
        },
    ],
};
