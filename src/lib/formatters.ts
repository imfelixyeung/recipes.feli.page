import { DurationFormat } from "@formatjs/intl-durationformat";
import { AppLocale } from "../i18n";

const cache = {
    cf: {} as Partial<Record<AppLocale, Intl.NumberFormat>>,
    df: {} as Partial<Record<AppLocale, DurationFormat>>,
};

export const getCelsiusFormatter = (locale: AppLocale) => {
    if (!(locale in cache.cf)) {
        cache.cf[locale] = new Intl.NumberFormat(locale, {
            style: "unit",
            unit: "celsius",
        });
    }
    return cache.cf[locale]!;
};

export const getDurationFormatter = (locale: AppLocale) => {
    if (!(locale in cache.df)) {
        cache.df[locale] = new DurationFormat(locale, {
            style: "short",
        });
    }
    return cache.df[locale]!;
};
