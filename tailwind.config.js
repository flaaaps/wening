const colors = require("tailwindcss/colors")

module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                gray: colors.gray,
            },
        },
        fontFamily: {
            body: ["Roboto"],
            heading: ["Source Sans Pro"],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
