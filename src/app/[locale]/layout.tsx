import { getLocale } from "@/src/i18n";
import type { Metadata } from "next";
import { Google_Sans_Flex } from "next/font/google";
import Link from "next/link";
import "../globals.css";

const sans = Google_Sans_Flex({
    variable: "--font-app-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Recipes",
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
                    <Link href={`/${locale}`} className="btn btn-ghost text-xl">
                        Recipes
                    </Link>
                </nav>
                <main className="container mx-auto mb-16 px-6">{children}</main>
            </body>
        </html>
    );
}
