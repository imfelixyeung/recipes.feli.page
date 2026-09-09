import { defaultLocale, supportedLocales } from "@/src/i18n";
import type { Metadata } from "next";

export const siteUrl = "https://recipes.feli.page";

export const absoluteUrl = (path: string): string => `${siteUrl}${path}`;

export const localePath = (locale: string, path: string): string =>
    `/${locale}${path}`;

export const ogLocale = (locale: string): string =>
    locale.toLowerCase().replace("-", "_");

export const localizedLinks = (path: string): Metadata["alternates"] => {
    const languages = Object.fromEntries(
        supportedLocales.map((locale) => [
            locale,
            absoluteUrl(localePath(locale, path)),
        ]),
    ) as Record<string, string>;
    languages["x-default"] = absoluteUrl(localePath(defaultLocale, path));

    return { languages };
};
