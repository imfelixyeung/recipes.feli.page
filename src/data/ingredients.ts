import { LocalisedString } from "../i18n";

export type Ingredient = {
    slug: string;
    name: LocalisedString;
};

export const ingredients = {
    curryPowder: {
        slug: "curry-powder",
        name: { "en-GB": "Curry Powder", "zh-HK": "咖喱粉" },
    },
    fiveSpicePowder: {
        slug: "five-spice-powder",
        name: { "en-GB": "Five Spice Powder", "zh-HK": "五香粉" },
    },
    chiliPowder: {
        slug: "chili-powder",
        name: { "en-GB": "Chili Powder", "zh-HK": "辣椒粉" },
    },
    maltose: {
        slug: "maltose",
        name: { "en-GB": "Maltose", "zh-HK": "麥芽糖" },
    },
    salt: {
        slug: "salt",
        name: { "en-GB": "Salt", "zh-HK": "鹽" },
    },
    sugar: {
        slug: "sugar",
        name: { "en-GB": "Sugar", "zh-HK": "糖" },
    },
    water: {
        slug: "water",
        name: { "en-GB": "Water", "zh-HK": "水" },
    },
    wheatGluten: {
        slug: "wheat-gluten",
        name: { "en-GB": "Wheat Gluten", "zh-HK": "小麥麵糊" },
    },
    flourPlain: {
        slug: "plain-flour",
        name: { "en-GB": "Plain Flour", "zh-HK": "普通麵粉" },
    },
    flourLowGluten: {
        slug: "low-gluten-flour",
        name: { "en-GB": "Low-gluten Flour", "zh-HK": "低筋麵粉" },
    },
    flourTapioca: {
        slug: "low-gluten-flour",
        name: { "en-GB": "Tapioca Flour", "zh-HK": "木薯粉" },
    },
    yeast: {
        slug: "yeast",
        name: { "en-GB": "Yeast", "zh-HK": "酵母" },
    },
    powderCustard: {
        slug: "powdercustard",
        name: { "en-GB": "Custard powder", "zh-HK": "吉士粉" },
    },
    powderBaking: {
        slug: "powderbaking",
        name: { "en-GB": "Baking powder", "zh-HK": "泡打粉" },
    },
    eggs: { slug: "eggs", name: { "en-GB": "Eggs", "zh-HK": "雞蛋" } },
    icingSugar: {
        slug: "icing-sugar",
        name: { "en-GB": "Icing Sugar", "zh-HK": "糖霜" },
    },
    butterUnsalted: {
        slug: "unsalted-butter",
        name: { "en-GB": "Unsalted Butter", "zh-HK": "無鹽牛油" },
    },
    milkPowder: {
        slug: "milk-powder",
        name: { "en-GB": "Milk Powder", "zh-HK": "奶粉" },
    },
    milk: {
        slug: "milk",
        name: { "en-GB": "Milk", "zh-HK": "奶" },
    },
    milkEvaporated: {
        slug: "milkevaporated",
        name: { "en-GB": "Evaporated milk", "zh-HK": "淡奶" },
    },
    oil: { slug: "oil", name: { "en-GB": "Oil", "zh-HK": "油" } },
    milkWhole: {
        slug: "whole-milk",
        name: { "en-GB": "Whole Milk", "zh-HK": "全脂奶" },
    },
    condensedMilk: {
        slug: "condensed-milk",
        name: { "en-GB": "Condensed Milk", "zh-HK": "煉奶" },
    },
    gingerJuice: {
        slug: "ginger-juice",
        name: { "en-GB": "Ginger Juice", "zh-HK": "薑汁" },
    },
    ginger: {
        slug: "ginger",
        name: { "en-GB": "Ginger", "zh-HK": "薑" },
    },
    teaYorkshire: {
        slug: "yorkshire-tea",
        name: { "en-GB": "Yorkshire Tea", "zh-HK": "約克郡茶" },
    },
    teaMsStrong: {
        slug: "ms-strong-tea",
        name: { "en-GB": "M&S Strong Tea", "zh-HK": "M&S濃茶" },
    },
    teaDecaf: {
        slug: "decaf-tea",
        name: { "en-GB": "Decaf Tea", "zh-HK": "低因紅茶" },
    },
    teaCeylon: {
        slug: "ceylon-tea",
        name: { "en-GB": "Ceylon Tea", "zh-HK": "錫蘭紅茶" },
    },
    eggYolk: {
        slug: "egg-yolk",
        name: { "en-GB": "Egg Yolk", "zh-HK": "蛋黃" },
    },
    eggWhite: {
        slug: "egg-white",
        name: { "en-GB": "Egg White", "zh-HK": "蛋白" },
    },
    bananaFlavouredMilk: {
        slug: "banana-flavoured-milk",
        name: { "en-GB": "Banana-flavoured Milk", "zh-HK": "香蕉味牛奶" },
    },
    banana: {
        slug: "banana",
        name: { "en-GB": "Banana", "zh-HK": "香蕉" },
    },
    cornStarch: {
        slug: "corn-starch",
        name: { "en-GB": "Corn Starch", "zh-HK": "粟粉" },
    },
    vanillaExtract: {
        slug: "vanilla-extract",
        name: { "en-GB": "Vanilla Extract", "zh-HK": "雲呢拿香油" },
    },
    lemonJuice: {
        slug: "lemon-juice",
        name: { "en-GB": "Lemon Juice", "zh-HK": "檸檬汁" },
    },
    bakingSoda: {
        slug: "baking-soda",
        name: { "en-GB": "Baking Soda", "zh-HK": "梳打粉" },
    },
    redBeans: {
        slug: "red-beans",
        name: { "en-GB": "Red Beans", "zh-HK": "紅豆" },
    },
    riceFlour: {
        slug: "rice-flour",
        name: { "en-GB": "Rice Flour", "zh-HK": "粘米粉" },
    },
    brownSugarSlab: {
        slug: "brown-sugar-slab",
        name: { "en-GB": "Brown Slab Sugar", "zh-HK": "片糖" },
    },
    brownSugar: {
        slug: "brown-sugar",
        name: { "en-GB": "Brown Sugar", "zh-HK": "黑糖" },
    },
    poppingCorn: {
        slug: "popping-corn",
        name: { "en-GB": "Popping Corn", "zh-HK": "爆谷玉米" },
    },
    whiteSugar: {
        slug: "white-sugar",
        name: { "en-GB": "White Sugar", "zh-HK": "白糖" },
    },
    mincedBeef: {
        slug: "minced-beef",
        name: { "en-GB": "Minced Beef", "zh-HK": "免治牛肉" },
    },
    mincedPork: {
        slug: "minced-pork",
        name: { "en-GB": "Minced Pork", "zh-HK": "免治豬肉" },
    },
    fishSauce: {
        slug: "fish-sauce",
        name: { "en-GB": "Fish Sauce", "zh-HK": "魚露" },
    },
    shaoxingWine: {
        slug: "shaoxing-wine",
        name: { "en-GB": "Shaoxing Wine", "zh-HK": "紹興酒" },
    },
    oysterSauce: {
        slug: "oyster-sauce",
        name: { "en-GB": "Oyster Sauce", "zh-HK": "蠔油" },
    },
    hoisinSauce: {
        slug: "hoisin-sauce",
        name: { "en-GB": "Hoisin Sauce", "zh-HK": "海鮮醬" },
    },
    sesameOil: {
        slug: "sesame-oil",
        name: { "en-GB": "Sesame Oil", "zh-HK": "麻油" },
    },
    whitePepper: {
        slug: "white-pepper",
        name: { "en-GB": "White Pepper", "zh-HK": "胡椒粉" },
    },
    chickenPowder: {
        slug: "chicken-powder",
        name: { "en-GB": "Chicken Powder", "zh-HK": "雞粉" },
    },
    honey: {
        slug: "honey",
        name: { "en-GB": "Honey", "zh-HK": "蜜糖" },
    },
    briocheBun: {
        slug: "brioche-bun",
        name: { "en-GB": "Brioche Bun (French Butter Bread)", "zh-HK": "法式牛油麵包" },
    },
} as const satisfies Record<string, Ingredient>;

export type IngredientSlug = keyof typeof ingredients;
