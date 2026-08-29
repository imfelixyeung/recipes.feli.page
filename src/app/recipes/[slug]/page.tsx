import RecipeRequirements from "@/src/components/recipe/requirements";
import RecipeSteps from "@/src/components/recipe/steps";
import { recipes } from "@/src/data/recipes";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return recipes.map((recipe) => ({
        slug: recipe.slug,
    }));
}

const Page = async (props: PageProps<"/recipes/[slug]">) => {
    const { slug } = await props.params;
    const recipe = recipes.find((r) => r.slug === slug);
    if (!recipe) {
        notFound();
    }

    return (
        <div className="@container mx-auto">
            <h1 className="mb-6 text-3xl font-medium">{recipe.name}</h1>
            <div className="grid gap-6 @3xl:grid-cols-2">
                <div>
                    <section className="card bg-base-300">
                        <div className="card-body">
                            <h2 className="card-title">Requirements</h2>
                            <div className="prose">
                                <RecipeRequirements
                                    requirements={recipe.requirements}
                                />
                            </div>
                        </div>
                    </section>
                </div>
                <div>
                    <section className="card bg-base-300">
                        <div className="card-body">
                            <h2 className="card-title">Steps</h2>
                            <div className="prose">
                                <RecipeSteps steps={recipe.steps} />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Page;
