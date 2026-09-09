import RecipeCard from "@/src/components/recipe/recipe-card";
import { recipes } from "@/src/data/recipes";
import { getLocale, s } from "@/src/i18n";
import { strings } from "@/src/i18n/strings";

const Page = async ({ params }: PageProps<"/[locale]/recipes">) => {
    const locale = await getLocale(params);
    return (
        <div>
            <header className="mt-4 mb-8">
                <h1 className="text-3xl font-semibold tracking-tight">
                    {s(locale, strings.recipes)}
                </h1>
                <p className="text-base-content/60 mt-2">
                    {recipes.length} {s(locale, strings.recipesAndCounting)}
                </p>
            </header>
            <div className="@container">
                <ul className="grid gap-3 @2xl:grid-cols-2 @2xl:gap-5 @4xl:grid-cols-3">
                    {recipes.map((recipe) => {
                        return (
                            <li key={recipe.slug}>
                                <RecipeCard recipe={recipe} locale={locale} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Page;
