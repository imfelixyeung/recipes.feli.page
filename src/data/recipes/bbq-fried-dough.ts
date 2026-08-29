import { Recipe } from ".";
import { ingredients } from "../ingredients";
import { units } from "../units";

const friedDough: Recipe = {
    slug: "bbq-fried-dough-dough",
    name: "BBQ Fried Dough (Dough)",
    requirements: [
        {
            type: "ingredient",
            ingredient: ingredients.wheatGluten,
            measurement: {
                unit: units.gram,
                value: 100,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.flourPlain,
            measurement: {
                unit: units.gram,
                value: 10,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.yeast,
            measurement: {
                unit: units.gram,
                value: 2,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.water,
            measurement: {
                unit: units.gram,
                value: 110,
            },
        },
    ],
    steps: [
        {
            type: "instruction",
            instruction: "Mix yeast with water",
        },
        {
            type: "instruction",
            instruction: "Mix wheat gluten, flour with yeast water",
        },
        {
            type: "instruction",
            instruction:
                "Wrap dough with cling film until 2x size, about 2 hours",
        },
        {
            type: "instruction",
            instruction: "Steam 30 for minutes",
        },
        {
            type: "instruction",
            instruction: "Let cool until warm",
        },
        {
            type: "instruction",
            instruction: "Cut into thumb-sized pieces",
        },
        {
            type: "instruction",
            instruction: "Air fry at 180C until dry and dark",
        },
        {
            type: "instruction",
            instruction: "Let cool",
        },
    ],
};

const bbqSauce: Recipe = {
    slug: "bbq-fried-dough-sauce",
    name: "BBQ Fried Dough (Sauce)",
    requirements: [
        {
            type: "ingredient",
            ingredient: ingredients.curryPowder,
            measurement: {
                unit: units.teaspoon,
                value: 2,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.fiveSpicePowder,
            measurement: {
                unit: units.teaspoon,
                value: 1,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.chiliPowder,
            measurement: {
                unit: units.teaspoon,
                value: 1,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.maltose,
            measurement: {
                unit: units.tablespoon,
                value: [3, 4],
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.salt,
            measurement: {
                unit: units.teaspoon,
                value: 1 / 4,
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.sugar,
            measurement: {
                unit: units.tablespoon,
                value: [3, 4],
            },
        },
        {
            type: "ingredient",
            ingredient: ingredients.water,
            measurement: {
                unit: units.millilitre,
                value: 100,
            },
        },
    ],
    steps: [
        {
            type: "instruction",
            instruction: "Use hot water to dissolve maltose",
        },
        {
            type: "instruction",
            instruction: "On a pan, add fry powers until fragrant",
        },
        {
            type: "instruction",
            instruction: "Add maltose water, sugar and salt into pan",
        },
        {
            type: "instruction",
            instruction: "Stir until gooey",
        },
    ],
};

export const bbqFriedDough: Recipe = {
    slug: "bbq-fried-dough",
    name: "BBQ Fried Dough",
    requirements: [
        { type: "recipe", recipe: friedDough },
        { type: "recipe", recipe: bbqSauce },
    ],
    steps: [
        {
            type: "recipe",
            recipe: friedDough,
        },
        {
            type: "recipe",
            recipe: bbqSauce,
        },
        {
            type: "instruction",
            instruction: "Quickly mix fried dough into bbq sauce",
        },
        {
            type: "instruction",
            instruction: "Use fan to cool down quickly",
        },
    ],
};
