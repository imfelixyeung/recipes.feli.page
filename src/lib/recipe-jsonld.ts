import { Recipe } from "@/src/data/recipes";
import { AppLocale, s } from "@/src/i18n";
import { strings } from "@/src/i18n/strings";
import {
    getCelsiusFormatter,
    getDurationFormatter,
} from "@/src/lib/formatters";
import { absoluteUrl, localePath } from "@/src/lib/seo";

const formatMeasurement = (
    locale: AppLocale,
    value: number | [number, number],
): string => {
    if (Array.isArray(value)) {
        return value.map((n) => n.toLocaleString()).join("-");
    }
    return value.toLocaleString();
};

const leafIngredients = (locale: AppLocale, recipe: Recipe): string[] => {
    return recipe.requirements.flatMap((requirement) => {
        if (requirement.type === "ingredient") {
            const { ingredient, measurement } = requirement;
            return [
                `${formatMeasurement(locale, measurement.value)} ${s(locale, measurement.unit.name)} ${s(locale, ingredient.name)}`,
            ];
        }
        return leafIngredients(locale, requirement.recipe);
    });
};

const instructionSteps = (locale: AppLocale, recipe: Recipe): string[] => {
    return recipe.steps.flatMap((step) => {
        if (step.type === "instruction") {
            return [s(locale, step.instruction)];
        }

        if (step.type === "recipe") {
            return [
                s(locale, {
                    "en-GB": "Make",
                    "zh-HK": "整",
                }) + ` ${s(locale, step.recipe.name)}`,
                ...instructionSteps(locale, step.recipe),
            ];
        }

        const parts = [
            s(locale, {
                "en-GB": "Air-fry",
                "zh-HK": "氣炸",
            }),
        ];
        if (step.temperature) {
            parts.push(getCelsiusFormatter(locale).format(step.temperature));
        }
        if (step.duration) {
            parts.push(getDurationFormatter(locale).format(step.duration));
        }
        if (step.instruction) {
            parts.push(s(locale, step.instruction));
        }
        return [parts.join(" ")];
    });
};

const recipeYield = (name: string): string | null => {
    const serves = name.match(/serves\s+(\d+)/i);
    if (serves) {
        return serves[1];
    }
    const count = name.match(/\((\d+)\s*(?:nos?\.?|pieces|pcs)\.?\)/i);
    return count ? count[1] : null;
};

export const recipeJsonLd = (
    recipe: Recipe,
    locale: AppLocale,
    path: string,
) => {
    const name = s(locale, recipe.name);
    const description = recipe.description
        ? s(locale, recipe.description)
        : null;
    const yieldCount = recipeYield(s("en-GB", recipe.name));

    return {
        "@context": "https://schema.org",
        "@type": "Recipe",
        name,
        ...(description ? { description } : {}),
        url: absoluteUrl(localePath(locale, path)),
        inLanguage: locale,
        author: {
            "@type": "Organization",
            name: s(locale, strings.siteName),
        },
        ...(yieldCount ? { recipeYield: yieldCount } : {}),
        recipeIngredient: leafIngredients(locale, recipe),
        recipeInstructions: instructionSteps(locale, recipe).map((text) => ({
            "@type": "HowToStep",
            text,
        })),
    };
};
