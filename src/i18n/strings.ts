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
    homeLabel: {
        "en-GB": "Hong Kong favourites",
        "zh-HK": "香港美食",
    },
    homeTitle: {
        "en-GB": "Homemade Hong Kong favourites",
        "zh-HK": "自家製香港美食",
    },
    homeSubtitle: {
        "en-GB":
            "A growing collection of Hong Kong classics and baked treats — all tested in our own kitchen.",
        "zh-HK":
            "一個慢慢增加嘅香港經典同烘焙小食食譜，全部喺自家廚房親手試過。",
    },
    latestRecipes: {
        "en-GB": "Latest additions",
        "zh-HK": "最新加入",
    },
    viewAllRecipes: {
        "en-GB": "View all recipes",
        "zh-HK": "睇晒所有食譜",
    },
    viewRecipe: {
        "en-GB": "View recipe",
        "zh-HK": "睇食譜",
    },
    ingredientNoun: { "en-GB": "ingredients", "zh-HK": "種材料" },
    stepNoun: { "en-GB": "steps", "zh-HK": "個步驟" },
    recipesAndCounting: {
        "en-GB": "recipes and counting",
        "zh-HK": "個食譜，會繼續加",
    },
    footerBlurb: {
        "en-GB":
            "Tested in our own kitchen — with love and quite a lot of butter.",
        "zh-HK": "喺自家廚房用心試過——仲用咗好多牛油。",
    },
    localeName: {
        "en-GB": { "en-GB": "English", "zh-HK": "英文" },
        "zh-HK": { "en-GB": "Chinese", "zh-HK": "中文" },
    },
} as const satisfies Record<
    string,
    LocalisedString | Record<string, LocalisedString>
>;
