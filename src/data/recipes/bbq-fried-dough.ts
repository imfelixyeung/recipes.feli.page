import { Recipe } from ".";
import { ingredients } from "../ingredients";
import { units } from "../units";

const friedDough: Recipe = {
    slug: "bbq-fried-dough-dough",
    name: "BBQ Fried Dough (Dough)",
    ingredients: [
        {
            ingredient: ingredients.wheatGluten,
            measurement: {
                unit: units.gram,
                value: 100,
            },
        },
        {
            ingredient: ingredients.flourPlain,
            measurement: {
                unit: units.gram,
                value: 10,
            },
        },
        {
            ingredient: ingredients.yeast,
            measurement: {
                unit: units.gram,
                value: 2,
            },
        },
        {
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
    ingredients: [
        {
            ingredient: ingredients.curryPowder,
            measurement: {
                unit: units.teaspoon,
                value: 2,
            },
        },
        {
            ingredient: ingredients.fiveSpicePowder,
            measurement: {
                unit: units.teaspoon,
                value: 1,
            },
        },
        {
            ingredient: ingredients.chiliPowder,
            measurement: {
                unit: units.teaspoon,
                value: 1,
            },
        },
        {
            ingredient: ingredients.maltose,
            measurement: {
                unit: units.tablespoon,
                value: [3, 4],
            },
        },
        {
            ingredient: ingredients.salt,
            measurement: {
                unit: units.teaspoon,
                value: 1 / 4,
            },
        },
        {
            ingredient: ingredients.sugar,
            measurement: {
                unit: units.tablespoon,
                value: [3, 4],
            },
        },
        {
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
    ingredients: [{ recipe: friedDough }, { recipe: bbqSauce }],
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
