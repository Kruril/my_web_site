const colors = require("tailwindcss/colors");

module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            gridTemplateColumns: {
                '2-cv': 'auto auto'
            },
            width: {
                "img-custom": "592px"
            },
            height: {
                "img-custom": "386px"
            }
        },
        colors: {
            g_blue: {
                dark: "#51859C",
                light: "#8ACEEB"
            },
            g_beige: {
                DEFAULT: "#E8C8A2",
                light: "#FFE7CC",
                dark: "#9C7F5D"
            },
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
            red: colors.red,
            yellow: colors.amber,
            green: colors.green,
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
