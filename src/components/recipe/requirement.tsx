import { RecipeRequirement as RecipeIngredientType } from "@/src/data/recipes";
import { SupportedLocale } from "@/src/i18n";
import Link from "next/link";
import RecipeMeasurement from "./measurement";
import RecipeRequirements from "./requirements";

const RecipeRequirement = ({
    requirement,
    locale,
}: {
    requirement: RecipeIngredientType;
    locale: SupportedLocale;
}) => {
    if (requirement.type === "recipe") {
        const { recipe } = requirement;
        return (
            <>
                <p>For {recipe.name}</p>
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
                    <RecipeMeasurement {...measurement} />
                </b>{" "}
                <Link href={`/${locale}/ingredients/${ingredient.slug}`}>
                    {ingredient.name}
                </Link>
            </>
        );
    }

    requirement satisfies never;
    return null;
};

export default RecipeRequirement;
