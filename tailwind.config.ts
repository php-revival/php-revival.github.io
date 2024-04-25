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
            colors: {
                main: '#355c7d',
                'main-hover': '#2c4d6a',
            }
        },
    },

    plugins: [],
}

export default config