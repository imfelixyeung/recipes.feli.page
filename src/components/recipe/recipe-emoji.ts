const RECIPE_EMOJI: Record<string, string> = {
    "bbq-fried-dough": "🥨",
    "caramel-popcorn": "🍿",
    "chiffon-cake": "🎂",
    "cream-puffs": "🧁",
    "egg-tart": "🥧",
    "egg-waffle": "🧇",
    "ginger-milk-pudding": "🥛",
    "hong-kong-egg-rolls": "🍥",
    "hong-kong-milk-tea": "🍵",
    "pineapple-bun": "🍞",
    "pork-beef-jerky": "🥩",
    "put-chai-ko": "🍮",
    "put-chai-ko-v2": "🍮",
    "rice-cooker-cake": "🍰",
    "tokyo-banana": "🍌",
};

export const recipeEmoji = (slug: string) => RECIPE_EMOJI[slug] ?? "🍽️";
