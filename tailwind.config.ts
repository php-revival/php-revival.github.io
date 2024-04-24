import { Config } from 'tailwindcss'

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,vue}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}

export default config