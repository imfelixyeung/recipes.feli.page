import type { Metadata } from "next";
import { Google_Sans_Flex } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const sans = Google_Sans_Flex({
    variable: "--font-app-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Recipes",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en" className={`${sans.variable} h-full antialiased`}>
            <body className="flex min-h-full flex-col">
                <nav className="navbar">
                    <Link href="/" className="btn btn-ghost text-xl">
                        Recipes
                    </Link>
                </nav>
                <main className="container mx-auto mb-16 px-6">{children}</main>
            </body>
        </html>
    );
}
