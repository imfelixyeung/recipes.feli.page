import RecipeCard from "@/src/components/recipe/recipe-card";
import { recipes } from "@/src/data/recipes";
import { getLocale, s } from "@/src/i18n";
import { strings } from "@/src/i18n/strings";
import Link from "next/link";

const newestRecipes = [...recipes].reverse().slice(0, 6);

const Page = async ({ params }: PageProps<"/[locale]">) => {
    const locale = await getLocale(params);
    return (
        <div className="flex flex-col gap-16">
            <section className="mt-10 flex flex-col items-center text-center">
                <p className="badge badge-outline badge-lg border-primary/40 mb-6 gap-2 rounded-full px-4 py-3">
                    <span>🥟</span>
                    {s(locale, strings.homeLabel)}
                </p>
                <h1 className="max-w-2xl text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl">
                    {s(locale, strings.homeTitle)}
                </h1>
                <p className="text-base-content/70 mt-5 max-w-xl text-lg text-balance">
                    {s(locale, strings.homeSubtitle)}
                </p>
                <Link
                    href={`/${locale}/recipes`}
                    className="btn btn-primary btn-lg shadow-primary/25 mt-8 rounded-full shadow-lg"
                >
                    {s(locale, strings.browseRecipes)}
                </Link>
            </section>

            <section className="@container">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        {s(locale, strings.latestRecipes)}
                    </h2>
                    <Link href={`/${locale}/recipes`} className="link text-sm">
                        {s(locale, strings.viewAllRecipes)} →
                    </Link>
                </div>
                <ul className="grid gap-3 @2xl:grid-cols-2 @2xl:gap-5 @4xl:grid-cols-3">
                    {newestRecipes.map((recipe) => {
                        return (
                            <li key={recipe.slug}>
                                <RecipeCard recipe={recipe} locale={locale} />
                            </li>
                        );
                    })}
                </ul>
            </section>
        </div>
    );
};

export default Page;
