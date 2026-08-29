import { recipes } from "@/src/data/recipes";
import Link from "next/link";

const Page = () => {
    return (
        <div>
            {recipes.map((recipe, index) => {
                return (
                    <li key={index}>
                        <Link href={`/recipes/${recipe.slug}`}>
                            {recipe.name}
                        </Link>
                    </li>
                );
            })}
        </div>
    );
};

export default Page;
