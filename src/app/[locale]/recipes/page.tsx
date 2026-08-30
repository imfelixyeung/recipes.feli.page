import { recipes } from "@/src/data/recipes";
import Link from "next/link";

const Page = async ({ params }: PageProps<"/[locale]/recipes">) => {
    const { locale } = await params;
    return (
        <div>
            {recipes.map((recipe, index) => {
                return (
                    <li key={index}>
                        <Link href={`/${locale}/recipes/${recipe.slug}`}>
                            {recipe.name}
                        </Link>
                    </li>
                );
            })}
        </div>
    );
};

export default Page;
