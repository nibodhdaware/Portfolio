import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    safelist: [
        "text-gray-300",
        "text-red-600",
        "text-accent2",
        "text-green-500",
        "text-yellow-400",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#060206",
                secondary: "#2E0714",
                accent1: "#410315",
                accent2: "#6C0120",
                accent3: "#A10E1D",
            },
        },
    },
    plugins: [],
};

export default config;
