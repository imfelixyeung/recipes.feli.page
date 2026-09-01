import { LanguageSwitcher } from "@/src/components/LanguageSwitcher";
import { getLocale, s } from "@/src/i18n";
import { strings } from "@/src/i18n/strings";
import type { Metadata } from "next";
import { Google_Sans_Flex } from "next/font/google";
import Link from "next/link";
import "../globals.css";

const sans = Google_Sans_Flex({
    variable: "--font-app-sans",
    subsets: ["latin"],
});

export const generateMetadata = async ({
    params,
}: LayoutProps<"/[locale]">): Promise<Metadata> => {
    const locale = await getLocale(params);

    return { title: s(locale, strings.recipes) };
};

export default async function RootLayout({
    children,
    params,
}: LayoutProps<"/[locale]">) {
    const locale = await getLocale(params);
    return (
        <html lang={locale} className={`${sans.variable} h-full antialiased`}>
            <body className="flex min-h-full flex-col">
                <nav className="navbar">
                    <div className="navbar-start">
                        <Link href={`/${locale}`} className="btn btn-ghost text-xl">
                            {s(locale, strings.recipes)}
                        </Link>
                    </div>
                    <div className="navbar-end">
                        <LanguageSwitcher locale={locale} />
                    </div>
                </nav>
                <main className="container mx-auto mb-16 px-6">{children}</main>
            </body>
        </html>
    );
}
