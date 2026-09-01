import RecipeRequirements from "@/src/components/recipe/requirements";
import RecipeSteps from "@/src/components/recipe/steps";
import { recipes } from "@/src/data/recipes";
import { getLocale, s } from "@/src/i18n";
import { strings } from "@/src/i18n/strings";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return recipes.map((recipe) => ({
        slug: recipe.slug,
    }));
}

const Page = async ({ params }: PageProps<"/[locale]/recipes/[slug]">) => {
    const locale = await getLocale(params);
    const { slug } = await params;
    const recipe = recipes.find((r) => r.slug === slug);
    if (!recipe) {
        notFound();
    }

    return (
        <div className="@container mx-auto">
            <h1 className="mb-6 text-3xl font-medium">
                {s(locale, recipe.name)}
            </h1>
            {recipe.source && (
                <p className="mb-6 text-sm opacity-70">
                    {s(locale, strings.source)}{" "}
                    <a
                        href={recipe.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                    >
                        {recipe.source}
                    </a>
                </p>
            )}
            <div className="grid gap-6 @3xl:grid-cols-2">
                <div>
                    <section className="card bg-base-300">
                        <div className="card-body">
                            <h2 className="card-title">
                                {s(locale, strings.ingredients)}
                            </h2>
                            <div className="prose">
                                <RecipeRequirements
                                    locale={locale}
                                    requirements={recipe.requirements}
                                />
                            </div>
                        </div>
                    </section>
                </div>
                <div>
                    <section className="card bg-base-300">
                        <div className="card-body">
                            <h2 className="card-title">
                                {s(locale, strings.steps)}
                            </h2>
                            <div className="prose">
                                <RecipeSteps
                                    locale={locale}
                                    steps={recipe.steps}
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Page;
