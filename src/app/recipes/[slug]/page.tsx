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
        <div>
            <h1>{recipe.name}</h1>
        </div>
    );
};

export default Page;
