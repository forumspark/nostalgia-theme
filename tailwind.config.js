import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    safelist: ["absolute", "mx-auto", "relative", "inset-0", "min-w-0", "resize-none", "sr-only", "w-56", "w-72", "w-48", "w-64", "hidden"],

    theme: {
        extend: {
            colors: {
                tangerine: "#FF9505",
                goldenrod: "#FFB41F",
                "midnight-blue": "#003153",
                "ocean-blue": "#004996",
                "steel-blue": "#4180B4",
                "sapphire-blue": "#1264BA",
                "saffron-orange": {
                    50: "#FFF8F2",
                    100: "#FFEEDD",
                    200: "#FFDDB3",
                    300: "#FFCB89",
                    400: "#FFB65F",
                    500: "#FF8C42",
                    600: "#E67333",
                    700: "#BF5926",
                    800: "#99451E",
                    900: "#7A3718",
                },
                apricot: {
                    50: "#FFF9F2",
                    100: "#FFF0DD",
                    200: "#FFE3B3",
                    300: "#FFD189",
                    400: "#FFBB60",
                    500: "#FCAF58",
                    600: "#E69843",
                    700: "#BF7C32",
                    800: "#995F25",
                    900: "#7A4D1D",
                },
                peachy: {
                    50: "#FFFDF7",
                    100: "#FFF9E7",
                    200: "#FFF0C5",
                    300: "#F9C784",
                    400: "#F4B161",
                    500: "#EF9C3E",
                    600: "#DB8530",
                    700: "#B76826",
                    800: "#92531E",
                    900: "#784219",
                },
                "deep-lavender": {
                    50: "#F6F6FB",
                    100: "#EDEDF6",
                    200: "#D6D6EA",
                    300: "#BEBEE1",
                    400: "#4E598C",
                    500: "#3C4671",
                    600: "#313C5A",
                    700: "#262B44",
                    800: "#1C2030",
                    900: "#141724",
                },
                "lavender-grey": {
                    50: "#F9F9FC",
                    100: "#F2F2FA",
                    200: "#EDEDEF",
                    300: "#E7E7F1",
                    400: "#E2E2F3",
                    500: "#DCDCF5",
                    600: "#D7D7F6",
                    700: "#D1D1F8",
                    800: "#CCCDF9",
                    900: "#C6C6FB",
                },
            },
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            boxShadow: {
                px: "inset 0 1px 0 #b8dcff",
                "inset-px": "inset 0 1px 0 rgba(255,255,255,0.6)",
                highlight: "inset 0 1px 0 rgba(255,255,255,0.4)",
                highlighter: "inset 0 1px 0 rgba(255,255,255,0.2)",
                inset: "inset 0 2px 0 rgba(0,0,0,0.1)",
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        maxWidth: null,
                        pre: {
                            background: "transparent",
                            padding: 0,
                            borderWidth: "1px",
                            borderColor: "var(--tw-prose-quote-borders)",
                        },
                    },
                },
            }),
            keyframes: {
                shake: {
                    "0%": {
                        transform: "translateX(0rem) rotate(0deg)",
                    },
                    "25%": {
                        transform: "translateX(-0.25rem) rotate(-20deg)",
                    },
                    "75%": {
                        transform: "translateX(0.25rem)  rotate(20deg)",
                    },
                    "100%": {
                        transform: "translateX(0rem)  rotate(0deg)",
                    },
                },
            },
            animation: {
                shake: "shake .3s both",
            },
        },
    },

    plugins: [forms, require("@tailwindcss/typography")],
};
