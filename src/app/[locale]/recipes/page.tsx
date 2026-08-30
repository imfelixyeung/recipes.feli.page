import { recipes } from "@/src/data/recipes";
import { getLocale, s } from "@/src/i18n";
import Link from "next/link";

const Page = async ({ params }: PageProps<"/[locale]/recipes">) => {
    const locale = await getLocale(params);
    return (
        <div>
            {recipes.map((recipe, index) => {
                return (
                    <li key={index}>
                        <Link href={`/${locale}/recipes/${recipe.slug}`}>
                            {s(locale, recipe.name)}
                        </Link>
                    </li>
                );
            })}
        </div>
    );
};

export default Page;
