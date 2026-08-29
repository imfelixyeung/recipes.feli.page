import { Step } from "../../data/recipes";
import RecipeStep from "./step";

const RecipeSteps = ({ steps }: { steps: Step[] }) => {
    return (
        <ol>
            {steps.map((step, index) => {
                return (
                    <li key={index}>
                        <RecipeStep step={step} />
                    </li>
                );
            })}
        </ol>
    );
};

export default RecipeSteps;
