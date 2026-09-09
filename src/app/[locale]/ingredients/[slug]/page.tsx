import { Ingredient, ingredients } from "@/src/data/ingredients";
import { Recipe, recipes } from "@/src/data/recipes";
import { getLocale, s } from "@/src/i18n";
import { strings } from "@/src/i18n/strings";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return Object.values(ingredients).map((recipe) => ({
        slug: recipe.slug,
    }));
}

const findIngredient = (slug: string) => {
    return Object.values(ingredients).find((i) => i.slug === slug);
};

const findRecipes = (recipes: Recipe[], ingredient: Ingredient): Recipe[] => {
    const candidates = recipes.filter((r) =>
        r.requirements.find((r) => {
            if (r.type === "ingredient") {
                return r.ingredient.slug === ingredient.slug;
            }

            if (r.type === "recipe") {
                return findRecipes([r.recipe], ingredient).length;
            }

            return false;
        }),
    );
    return candidates;
};

const Page = async ({ params }: PageProps<"/[locale]/ingredients/[slug]">) => {
    const locale = await getLocale(params);
    const { slug } = await params;
    const ingredient = findIngredient(slug);
    if (!ingredient) {
        notFound();
    }

    const relatedRecipes = findRecipes(recipes, ingredient);

    return (
        <div className="mx-auto max-w-2xl">
            <header className="mt-4 mb-8">
                <h1 className="text-3xl font-semibold tracking-tight">
                    {s(locale, ingredient.name)}
                </h1>
                <p className="text-base-content/60 mt-2">
                    {s(locale, strings.usedIn)}
                </p>
            </header>
            <ul className="flex flex-col gap-3">
                {relatedRecipes.map((r) => (
                    <li key={r.slug}>
                        <Link
                            href={`/${locale}/recipes/${r.slug}`}
                            className="group border-base-300 bg-base-100 hover:border-primary/50 flex items-center justify-between gap-3 rounded-2xl border px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                        >
                            <span className="font-medium">
                                {s(locale, r.name)}
                            </span>
                            <span className="opacity-40 transition group-hover:translate-x-0.5 group-hover:opacity-100">
                                →
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Page;
