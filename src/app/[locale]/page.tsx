import { getLocale, s } from "@/src/i18n";
import { strings } from "@/src/i18n/strings";
import Link from "next/link";

const Page = async ({ params }: PageProps<"/[locale]">) => {
    const locale = await getLocale(params);
    return (
        <div>
            <Link href={`/${locale}/recipes`}>
                {s(locale, strings.browseRecipes)}
            </Link>
        </div>
    );
};

export default Page;
