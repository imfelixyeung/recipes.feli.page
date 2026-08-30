import { Ingredient, ingredients } from "@/src/data/ingredients";
import { Recipe, recipes } from "@/src/data/recipes";
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

const Page = async ({ params }: PageProps<"/ingredients/[slug]">) => {
    const { slug } = await params;
    const ingredient = findIngredient(slug);
    if (!ingredient) {
        notFound();
    }

    const relatedRecipes = findRecipes(recipes, ingredient);

    return (
        <div>
            <h1 className="mb-6 text-3xl font-medium">{ingredient.name}</h1>
            <div>
                <section className="card bg-base-300">
                    <div className="card-body">
                        <h2 className="card-title">Used In</h2>
                        <div className="prose">
                            <ul>
                                {relatedRecipes.map((r) => (
                                    <li key={r.slug}>
                                        <Link href={`/recipes/${r.slug}`}>
                                            {r.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Page;
