import { recipes } from "@/src/data/recipes";
import { getLocale, s } from "@/src/i18n";
import { OgImage } from "@/src/lib/og-image";
import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>;
}) {
    await getLocale(params);
    const { slug } = await params;
    const recipe = recipes.find((r) => r.slug === slug);
    if (!recipe) {
        notFound();
    }

    return new ImageResponse(
        <OgImage title={s("en-GB", recipe.name)} caption="recipes.feli.page" />,
        size,
    );
}
