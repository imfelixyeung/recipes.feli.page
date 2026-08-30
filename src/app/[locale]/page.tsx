import Link from "next/link";

const Page = async ({ params }: PageProps<"/[locale]">) => {
    const { locale } = await params;
    return (
        <div>
            <Link href={`/${locale}/recipes`}>Browse recipes</Link>
        </div>
    );
};

export default Page;
