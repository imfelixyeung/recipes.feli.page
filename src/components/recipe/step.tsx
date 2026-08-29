import { Step } from "@/src/data/recipes";
import { celsiusFormatter, durationFormatter } from "@/src/lib/formatters";
import RecipeSteps from "./steps";

const RecipeStep = ({ step }: { step: Step }) => {
    if (step.type === "instruction") {
        return <>{step.instruction}</>;
    }

    if (step.type === "recipe") {
        return (
            <>
                <span>Make {step.recipe.name}</span>
                <RecipeSteps steps={step.recipe.steps} />
            </>
        );
    }

    if (step.type === "air-fry") {
        const { duration, instruction, temperature } = step;

        const temperatureString = temperature
            ? `at ${celsiusFormatter.format(temperature)}`
            : null;

        const durationString = duration
            ? `for ${durationFormatter.format(duration)}`
            : null;

        return (
            <>
                Air-fry {temperatureString} {durationString} {instruction}
            </>
        );
    }

    step satisfies never;
    return null;
};

export default RecipeStep;
