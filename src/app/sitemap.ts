import { ingredients } from "@/src/data/ingredients";
import { recipes } from "@/src/data/recipes";
import { defaultLocale, supportedLocales } from "@/src/i18n";
import { siteUrl } from "@/src/lib/seo";
import type { MetadataRoute } from "next";

const routes = [
    "",
    "/recipes",
    ...recipes.map((recipe) => `/recipes/${recipe.slug}`),
    ...Object.values(ingredients).map(
        (ingredient) => `/ingredients/${ingredient.slug}`,
    ),
];

const priorityFor = (path: string): number => {
    if (path === "") return 1;
    if (path === "/recipes") return 0.9;
    if (path.startsWith("/recipes/")) return 0.8;
    return 0.6;
};

export default function sitemap(): MetadataRoute.Sitemap {
    return supportedLocales.flatMap((locale) =>
        routes.map((path) => {
            const url = `${siteUrl}/${locale}${path}`;
            return {
                url,
                lastModified: new Date(),
                changeFrequency: "weekly",
                priority: priorityFor(path),
                alternates: {
                    languages: {
                        ...Object.fromEntries(
                            supportedLocales.map((otherLocale) => [
                                otherLocale,
                                `${siteUrl}/${otherLocale}${path}`,
                            ]),
                        ),
                        "x-default": `${siteUrl}/${defaultLocale}${path}`,
                    },
                },
            };
        }),
    );
}
