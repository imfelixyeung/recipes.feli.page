import { Recipe } from ".";
import { ingredients } from "../ingredients";
import { units } from "../units";

const friedDough: Recipe = {
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
            content: "Mix yeast with water",
        },
        {
            content: "Mix wheat gluten, flour with yeast water",
        },
        {
            content: "Wrap dough with cling film until 2x size, about 2 hours",
        },
        {
            content: "Steam 30 for minutes",
        },
        {
            content: "Let cool until warm",
        },
        {
            content: "Cut into thumb-sized pieces",
        },
        {
            content: "Air fry at 180C until dry and dark",
        },
        {
            content: "Let cool",
        },
    ],
};

const bbqSauce: Recipe = {
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
            content: "Use hot water to dissolve maltose",
        },
        {
            content: "On a pan, add fry powers until fragrant",
        },
        {
            content: "Add maltose water, sugar and salt into pan",
        },
        {
            content: "Stir until gooey",
        },
    ],
};

export const bbqFriedDough: Recipe = {
    name: "BBQ Fried Dough (Sauce)",
    ingredients: [friedDough, bbqSauce],
    steps: [
        {
            content: "Quickly mix fried dough into bbq sauce",
        },
        {
            content: "Use fan to cool down quickly",
        },
    ],
};
