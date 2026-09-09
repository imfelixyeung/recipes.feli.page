"use client";

import { defaultLocale, s, supportedLocales, type AppLocale } from "@/src/i18n";
import { strings } from "@/src/i18n/strings";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const LanguageSwitcher = ({ locale }: { locale: AppLocale }) => {
    const pathname = usePathname();
    const target = supportedLocales.find((l) => l !== locale) ?? defaultLocale;
    const href = `/${target}${pathname.replace(`/${locale}`, "") || "/"}`;

    return (
        <Link
            href={href}
            lang={target}
            className="btn btn-outline btn-sm border-base-300 rounded-full"
        >
            {s(locale, strings.localeName[target])}
        </Link>
    );
};
