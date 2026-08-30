import { notFound } from "next/navigation";

export const supportedLocales = ["en", "zh-HK"] as const;
export type SupportedLocale = (typeof supportedLocales)[number];

export const getLocale = async (
    params: Promise<{ locale: string }>,
): Promise<SupportedLocale> => {
    const locale = await params.then((p) => p.locale as SupportedLocale);
    if (!supportedLocales.includes(locale)) {
        notFound();
    }

    return locale;
};
