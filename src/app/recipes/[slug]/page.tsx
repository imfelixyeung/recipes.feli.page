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
        <div className="prose container mx-auto">
            <h1>{recipe.name}</h1>
            <h2>Requirements</h2>
            <RecipeRequirements requirements={recipe.requirements} />
            <h2>Steps</h2>
            <RecipeSteps steps={recipe.steps} />
        </div>
    );
};

export default Page;
