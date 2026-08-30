import { recipes } from "@/src/data/recipes";
import { getLocale, s } from "@/src/i18n";
import Link from "next/link";

const Page = async ({ params }: PageProps<"/[locale]/recipes">) => {
    const locale = await getLocale(params);
    return (
        <div className="@container">
            <ul className="grid gap-3 @4xl:grid-cols-3 @4xl:gap-6">
                {recipes.map((recipe, index) => {
                    return (
                        <li key={index} className="card bg-base-200">
                            <div className="card-body">
                                <Link
                                    href={`/${locale}/recipes/${recipe.slug}`}
                                    className="card-title"
                                >
                                    {s(locale, recipe.name)}
                                </Link>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Page;
