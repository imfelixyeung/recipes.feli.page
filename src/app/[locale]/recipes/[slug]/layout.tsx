import Link from "next/link";

const Layout = async ({
    params,
    children,
}: LayoutProps<"/[locale]/recipes/[slug]">) => {
    const { locale } = await params;
    return (
        <div>
            <Link href={`/${locale}/recipes`} className="text-base-content/50">
                Back to recipes
            </Link>
            <div className="mt-3">{children}</div>
        </div>
    );
};

export default Layout;
