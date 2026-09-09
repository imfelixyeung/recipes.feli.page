import { Recipe } from "@/src/data/recipes";
import { AppLocale, s } from "@/src/i18n";
import { strings } from "@/src/i18n/strings";
import Link from "next/link";
import { recipeEmoji } from "./recipe-emoji";

const countRequirements = (requirements: Recipe["requirements"]): number => {
    return requirements.reduce((count, requirement) => {
        if (requirement.type === "recipe") {
            return count + countRequirements(requirement.recipe.requirements);
        }
        return count + 1;
    }, 0);
};

const countSteps = (recipe: Recipe): number => {
    return recipe.steps.reduce((count, step) => {
        if (step.type === "recipe") {
            return count + countSteps(step.recipe);
        }
        return count + 1;
    }, 0);
};

const RecipeCard = ({
    recipe,
    locale,
}: {
    recipe: Recipe;
    locale: AppLocale;
}) => {
    const ingredientCount = countRequirements(recipe.requirements);
    const stepCount = countSteps(recipe);

    return (
        <Link
            href={`/${locale}/recipes/${recipe.slug}`}
            className="card group border-base-300 bg-base-100 hover:border-primary/50 overflow-hidden border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
        >
            <span className="from-primary to-accent h-1.5 w-full bg-gradient-to-r" />
            <div className="card-body gap-0">
                <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="bg-base-200 grid size-12 place-items-center rounded-2xl text-2xl">
                        {recipeEmoji(recipe.slug)}
                    </span>
                    <span className="text-2xl opacity-25 transition-opacity group-hover:opacity-50">
                        →
                    </span>
                </div>
                <h2 className="card-title text-lg leading-snug">
                    {s(locale, recipe.name)}
                </h2>
                <div className="mt-3 flex items-center gap-2 text-xs opacity-60">
                    <span>
                        {ingredientCount} {s(locale, strings.ingredientNoun)}
                    </span>
                    <span>·</span>
                    <span>
                        {stepCount} {s(locale, strings.stepNoun)}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default RecipeCard;
