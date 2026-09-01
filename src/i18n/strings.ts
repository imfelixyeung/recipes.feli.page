import { LocalisedString } from ".";

export const strings = {
    browseRecipes: {
        "en-GB": "Browse Recipes",
        "zh-HK": "睇下食譜",
    },
    recipes: {
        "en-GB": "Recipes",
        "zh-HK": "食譜",
    },
    backToRecipes: {
        "en-GB": "Back to recipes",
        "zh-HK": "返去食譜",
    },
    usedIn: {
        "en-GB": "Used in",
        "zh-HK": "用過喺",
    },
    ingredients: { "en-GB": "Ingredients", "zh-HK": "材料" },
    steps: { "en-GB": "Steps", "zh-HK": "步驟" },
    source: { "en-GB": "Source:", "zh-HK": "來源：" },
} as const satisfies Record<string, LocalisedString>;
