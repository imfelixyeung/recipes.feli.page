import { Ingredient } from "../ingredients";
import { Unit } from "../units";
import { bbqFriedDough } from "./bbq-fried-dough";

export type MeasurementValueFixed = number;
export type MeasurementValueRanged = [number, number];
export type MeasurementValue = MeasurementValueFixed | MeasurementValueRanged;

export type RecipeIngredient =
    | {
          ingredient: Ingredient;
          measurement: { unit: Unit; value: MeasurementValue };
      }
    | Recipe;

export type Recipe = {
    name: string;
    ingredients: RecipeIngredient[];
    steps: {
        content: string;
    }[];
};

export const recipes: Recipe[] = [bbqFriedDough];
