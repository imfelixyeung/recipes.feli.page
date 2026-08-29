import { RecipeRequirement as RecipeIngredientType } from "@/src/data/recipes";
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
        return (
            <>
                <b>
                    <RecipeMeasurement {...requirement.measurement} />
                </b>{" "}
                <span>{requirement.ingredient.name}</span>
            </>
        );
    }

    requirement satisfies never;
    return null;
};

export default RecipeRequirement;
