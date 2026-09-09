import { LocalisedString } from "@/src/i18n";
import { DurationInput } from "@formatjs/intl-durationformat";
import { Ingredient } from "../ingredients";
import { Unit } from "../units";
import { bbqFriedDough } from "./bbq-fried-dough";
import { eggWaffleRecipe } from "./egg-waffle";
import { eggTart } from "./egg-tart";
import { gingerMilkPudding } from "./ginger-milk-pudding";
import { putChaiKo } from "./put-chai-ko";
import { putChaiKoV2 } from "./put-chai-ko-v2";
import { hongKongMilkTea } from "./hong-kong-milk-tea";
import { hongKongEggRolls } from "./hong-kong-egg-rolls";
import { caramelPopcorn } from "./caramel-popcorn";
import { porkBeefJerky } from "./pork-beef-jerky";
import { tokyoBanana } from "./tokyo-banana";

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
    instruction: LocalisedString;
};
export type StepRecipe = {
    type: "recipe";
    recipe: Recipe;
};
export type StepAirFry = {
    type: "air-fry";
    duration?: DurationInput | null;
    temperature?: number | null;
    instruction?: LocalisedString | null;
};
export type Step = StepInstruction | StepRecipe | StepAirFry;

export type Recipe = {
    slug: string;
    name: LocalisedString;
    requirements: RecipeRequirement[];
    steps: Step[];
    source?: string;
};

export const recipes: Recipe[] = [
    bbqFriedDough,
    eggTart,
    eggWaffleRecipe,
    gingerMilkPudding,
    putChaiKo,
    putChaiKoV2,
    hongKongMilkTea,
    hongKongEggRolls,
    caramelPopcorn,
    porkBeefJerky,
    tokyoBanana,
];
