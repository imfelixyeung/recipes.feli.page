import RecipeRequirements from "@/src/components/recipe/requirements";
import { recipeEmoji } from "@/src/components/recipe/recipe-emoji";
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

const sourceHost = (source: string) => {
    try {
        return new URL(source).hostname.replace(/^www\./, "");
    } catch {
        return source;
    }
};

const Page = async ({ params }: PageProps<"/[locale]/recipes/[slug]">) => {
    const locale = await getLocale(params);
    const { slug } = await params;
    const recipe = recipes.find((r) => r.slug === slug);
    if (!recipe) {
        notFound();
    }

    return (
        <div className="@container mx-auto">
            <header className="mb-8 flex items-start gap-4">
                <span className="bg-base-200 grid size-16 shrink-0 place-items-center rounded-2xl text-4xl">
                    {recipeEmoji(recipe.slug)}
                </span>
                <div>
                    <h1 className="text-3xl leading-tight font-semibold tracking-tight text-balance">
                        {s(locale, recipe.name)}
                    </h1>
                    {recipe.source && (
                        <a
                            href={recipe.source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="badge badge-outline badge-sm border-base-300 mt-2 gap-1 rounded-full px-3 py-3"
                        >
                            {s(locale, strings.source)}{" "}
                            {sourceHost(recipe.source)}
                            <span className="opacity-60">↗</span>
                        </a>
                    )}
                </div>
            </header>
            <div className="grid gap-6 @3xl:grid-cols-2">
                <section className="card border-base-300 bg-base-100 overflow-hidden border">
                    <span className="from-primary to-accent h-1 w-full bg-gradient-to-r" />
                    <div className="card-body">
                        <h2 className="card-title mb-3">
                            {s(locale, strings.ingredients)}
                        </h2>
                        <div className="prose max-w-none">
                            <RecipeRequirements
                                locale={locale}
                                requirements={recipe.requirements}
                            />
                        </div>
                    </div>
                </section>
                <section className="card border-base-300 bg-base-100 overflow-hidden border">
                    <span className="from-accent to-secondary h-1 w-full bg-gradient-to-r" />
                    <div className="card-body">
                        <h2 className="card-title mb-3">
                            {s(locale, strings.steps)}
                        </h2>
                        <div className="prose max-w-none">
                            <RecipeSteps locale={locale} steps={recipe.steps} />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Page;
