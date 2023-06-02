/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                "wave-form": "url('/src/img/olablanca.png')",
                "wave-patterns-dots": "url('/src/img/dotsblanco.png')",
                "wave-pink": "url('/src/img/olarosa.png')",
                "character-mario": "url('/src/img/mario.png')",
                "patterns-ch-red": "url('/src/img/fondorojo.png')",
                "patterns-yellow-dots": "url('/src/img/dotsamarillos.png')",
            },
        },
    },
    plugins: [],
};
