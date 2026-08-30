import { notFound } from "next/navigation";

export const defaultLocale = "en-GB";
export const optionalLocale = ["zh-HK"] as const;
export const supportedLocales = [defaultLocale, ...optionalLocale] as const;
export type AppLocale = (typeof supportedLocales)[number];

export const getLocale = async (
    params: Promise<{ locale: string }>,
): Promise<AppLocale> => {
    const locale = await params.then((p) => p.locale as AppLocale);
    if (!supportedLocales.includes(locale)) {
        notFound();
    }

    return locale;
};

export type LocalisedString = Record<typeof defaultLocale, string> &
    Partial<Record<(typeof optionalLocale)[number], string>>;

export const s = (locale: AppLocale, string: LocalisedString) => {
    if (locale in string) {
        return string[locale];
    }
    return string[defaultLocale];
};
