import Link from "next/link";
import React from "react";

const Layout = (props: LayoutProps<"/recipes/[slug]">) => {
    return (
        <div>
            <Link href="/recipes">Back to recipes</Link>
            <div>{props.children}</div>
        </div>
    );
};

export default Layout;
