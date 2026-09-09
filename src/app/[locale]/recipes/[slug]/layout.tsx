import { getLocale, s } from "@/src/i18n";
import { strings } from "@/src/i18n/strings";
import Link from "next/link";

const Layout = async ({
    params,
    children,
}: LayoutProps<"/[locale]/recipes/[slug]">) => {
    const locale = await getLocale(params);
    return (
        <div>
            <Link
                href={`/${locale}/recipes`}
                className="btn btn-ghost btn-sm text-base-content/60 -ml-2 rounded-full"
            >
                ← {s(locale, strings.backToRecipes)}
            </Link>
            <div className="mt-3">{children}</div>
        </div>
    );
};

export default Layout;
