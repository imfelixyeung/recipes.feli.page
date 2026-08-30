import { RecipeRequirement as RecipeIngredientType } from "@/src/data/recipes";
import Link from "next/link";
import RecipeMeasurement from "./measurement";
import RecipeRequirements from "./requirements";

const RecipeRequirement = ({
    requirement,
}: {
    requirement: RecipeIngredientType;
}) => {
    if (requirement.type === "recipe") {
        const { recipe } = requirement;
        return (
            <>
                <p>For {recipe.name}</p>
                <RecipeRequirements requirements={recipe.requirements} />
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
                <Link href={`/ingredients/${ingredient.slug}`}>
                    {ingredient.name}
                </Link>
            </>
        );
    }

    requirement satisfies never;
    return null;
};

export default RecipeRequirement;
