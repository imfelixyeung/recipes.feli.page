import { AppLocale } from "@/src/i18n";
import { Step } from "../../data/recipes";
import RecipeStep from "./step";

const RecipeSteps = ({
    locale,
    steps,
}: {
    locale: AppLocale;
    steps: Step[];
}) => {
    return (
        <ol>
            {steps.map((step, index) => {
                return (
                    <li key={index}>
                        <RecipeStep locale={locale} step={step} />
                    </li>
                );
            })}
        </ol>
    );
};

export default RecipeSteps;
