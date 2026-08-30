import { Step } from "@/src/data/recipes";
import { AppLocale, s } from "@/src/i18n";
import {
    getCelsiusFormatter,
    getDurationFormatter,
} from "@/src/lib/formatters";
import RecipeSteps from "./steps";

const RecipeStep = ({ locale, step }: { locale: AppLocale; step: Step }) => {
    if (step.type === "instruction") {
        return <>{s(locale, step.instruction)}</>;
    }

    if (step.type === "recipe") {
        return (
            <>
                <span>
                    {s(locale, {
                        "en-GB": "Make",
                        "zh-HK": "整",
                    })}{" "}
                    {s(locale, step.recipe.name)}
                </span>
                <RecipeSteps locale={locale} steps={step.recipe.steps} />
            </>
        );
    }

    if (step.type === "air-fry") {
        const { duration, instruction, temperature } = step;

        const temperatureString = temperature
            ? getCelsiusFormatter(locale).format(temperature)
            : null;

        const durationString = duration
            ? getDurationFormatter(locale).format(duration)
            : null;

        return (
            <>
                {s(locale, {
                    "en-GB": "Air-fry",
                    "zh-HK": "氣炸",
                })}{" "}
                {temperatureString} {durationString}{" "}
                {instruction ? s(locale, instruction) : null}
            </>
        );
    }
};

export default RecipeStep;
