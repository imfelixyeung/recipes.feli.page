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
    | {
          recipe: Recipe;
      };

export type StepInstruction = {
    type: "instruction";
    instruction: string;
};
export type StepRecipe = {
    type: "recipe";
    recipe: Recipe;
};
export type Step = StepInstruction | StepRecipe;

export type Recipe = {
    slug: string;
    name: string;
    ingredients: RecipeIngredient[];
    steps: Step[];
};

export const recipes: Recipe[] = [bbqFriedDough];
