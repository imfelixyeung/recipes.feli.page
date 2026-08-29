import { DurationInput } from "@formatjs/intl-durationformat";
import { Ingredient } from "../ingredients";
import { Unit } from "../units";
import { bbqFriedDough } from "./bbq-fried-dough";

export type MeasurementValueFixed = number;
export type MeasurementValueRanged = [number, number];
export type MeasurementValue = MeasurementValueFixed | MeasurementValueRanged;

export type RecipeRequirement =
    | {
          type: "ingredient";
          ingredient: Ingredient;
          measurement: { unit: Unit; value: MeasurementValue };
      }
    | {
          type: "recipe";
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
export type StepAirFry = {
    type: "air-fry";
    duration?: DurationInput | null;
    temperature?: number | null;
    instruction?: string | null;
};
export type Step = StepInstruction | StepRecipe | StepAirFry;

export type Recipe = {
    slug: string;
    name: string;
    requirements: RecipeRequirement[];
    steps: Step[];
};

export const recipes: Recipe[] = [bbqFriedDough];
