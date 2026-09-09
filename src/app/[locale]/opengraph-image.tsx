import { getLocale, supportedLocales } from "@/src/i18n";
import { OgImage } from "@/src/lib/og-image";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Recipes — Homemade Hong Kong favourites";

export function generateImageMetadata() {
    return supportedLocales.map((locale) => ({
        id: locale,
        size,
        contentType,
    }));
}

export default async function OpengraphImage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    await getLocale(params);

    return new ImageResponse(
        <OgImage
            title="Homemade Hong Kong favourites"
            caption="recipes.feli.page"
        />,
        size,
    );
}
