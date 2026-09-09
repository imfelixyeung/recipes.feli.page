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
                <nav className="navbar border-base-300 bg-base-100/80 sticky top-0 z-40 border-b backdrop-blur-md">
                    <div className="navbar-start">
                        <Link
                            href={`/${locale}`}
                            className="btn btn-ghost gap-2 px-2 text-xl"
                        >
                            <span className="bg-primary text-primary-content grid size-9 place-items-center rounded-xl text-lg shadow-sm">
                                🍜
                            </span>
                            <span className="font-semibold tracking-tight">
                                {s(locale, strings.recipes)}
                            </span>
                        </Link>
                    </div>
                    <div className="navbar-end gap-2">
                        <Link
                            href={`/${locale}/recipes`}
                            className="btn btn-ghost btn-sm hidden sm:inline-flex"
                        >
                            {s(locale, strings.browseRecipes)}
                        </Link>
                        <LanguageSwitcher locale={locale} />
                    </div>
                </nav>
                <main className="container mx-auto mb-16 max-w-5xl flex-1 px-6">
                    {children}
                </main>
                <footer className="border-base-300 bg-base-200/60 border-t">
                    <div className="container mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 py-10 text-center">
                        <p className="text-2xl">🧈</p>
                        <p className="max-w-md text-sm opacity-70">
                            {s(locale, strings.footerBlurb)}
                        </p>
                    </div>
                </footer>
            </body>
        </html>
    );
}
