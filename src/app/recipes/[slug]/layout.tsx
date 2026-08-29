import Link from "next/link";

const Layout = (props: LayoutProps<"/recipes/[slug]">) => {
    return (
        <div>
            <Link href="/recipes" className="text-base-content/50">
                Back to recipes
            </Link>
            <div className="mt-3">{props.children}</div>
        </div>
    );
};

export default Layout;
