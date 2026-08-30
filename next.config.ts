import type { NextConfig } from "next";
import { defaultLocale } from "./src/i18n";

const nextConfig: NextConfig = {
    redirects() {
        return [
            {
                source: "/",
                destination: `/${defaultLocale}`,
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
