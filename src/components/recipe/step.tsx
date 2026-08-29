import { Step } from "@/src/data/recipes";
import RecipeSteps from "./steps";

const RecipeStep = ({ step }: { step: Step }) => {
    if (step.type === "instruction") {
        return <p>{step.instruction}</p>;
    }

    if (step.type === "recipe") {
        return (
            <>
                <p>Make {step.recipe.name}</p>
                <RecipeSteps steps={step.recipe.steps} />
            </>
        );
    }

    step satisfies never;
    return null;
};

export default RecipeStep;
