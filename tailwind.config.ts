import { Config } from 'tailwindcss'

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,vue}",
    ],

    theme: {
        container: {
            center: true,
            padding: '1rem',
        },

        extend: {
            fontFamily: {
                main: ['MainFont', 'sans-serif'],
            },
        },
    },

    plugins: [],
}

export default config