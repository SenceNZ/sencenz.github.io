/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
    content: ["./*.html", "./pages/*.html"],
    safelist: ["rotate-180", "translate-y-0", "translate-y-[100%]", "z-10", "scale-75", "navbar-active"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Inter"', "sans-serif"],
            },
            colors: {
                primary: "#06b6d4",
                primaryLight: "#22d3ee",
                secondary: "#06b6d4",
                secondaryLight: "#22d3ee",
                dark: "#0A101E",
                darker: "#090E1A",
            },
            animation: {
                marquee: "marquee 30s linear infinite",
            },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-100%)" },
                },
            },
        },
    },
    variantOrder: [
        "first",
        "last",
        "odd",
        "even",
        "visited",
        "checked",
        "empty",
        "read-only",
        "group-hover",
        "group-focus",
        "focus-within",
        "hover",
        "focus",
        "focus-visible",
        "active",
        "disabled",
    ],
    plugins: [
        plugin(function ({ addVariant }) {
            addVariant("children", "&>*");
        }),
    ],
};
