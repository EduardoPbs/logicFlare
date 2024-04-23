/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        'node_modules/flowbite-react/lib/esm/**/*.js',
    ],
    theme: {
        extend: {
            colors: {
                // 'main-color': '#3454D1',
                'main-color': '#f59e0b',
                'main-white': '#F7F7FF',
                'main-gray': '#EFEFEF',
                'main-black': '#090809',
            },
            fontFamily: {
                spartan: ['League Spartan', 'sans-serif'],
                sand: ['Quicksand', 'sans-serif'],
            },
        },
    },
    plugins: [require('flowbite/plugin')],
};