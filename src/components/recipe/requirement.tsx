import { RecipeRequirement as RecipeIngredientType } from "@/src/data/recipes";
import { AppLocale, s } from "@/src/i18n";
import Link from "next/link";
import RecipeMeasurement from "./measurement";
import RecipeRequirements from "./requirements";

const RecipeRequirement = ({
    requirement,
    locale,
}: {
    requirement: RecipeIngredientType;
    locale: AppLocale;
}) => {
    if (requirement.type === "recipe") {
        const { recipe } = requirement;
        return (
            <>
                <p>{s(locale, recipe.name)}</p>
                <RecipeRequirements
                    locale={locale}
                    requirements={recipe.requirements}
                />
            </>
        );
    }

    if (requirement.type === "ingredient") {
        const { ingredient, measurement } = requirement;
        return (
            <>
                <b>
                    <RecipeMeasurement locale={locale} {...measurement} />
                </b>{" "}
                <Link href={`/${locale}/ingredients/${ingredient.slug}`}>
                    {s(locale, ingredient.name)}
                </Link>
            </>
        );
    }

    requirement satisfies never;
    return null;
};

export default RecipeRequirement;
