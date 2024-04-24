import { Config } from 'tailwindcss'

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,vue}",
    ],

    theme: {
        extend: {
            fontFamily: {
                main: ['MainFont', 'sans-serif'],
            },
        },
    },

    plugins: [],
}

export default config