/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                "wave-form": "url('/src/img/wave-white.png')",
                "wave-patterns-dots": "url('/src/img/pattern-white-dots.png')",
                "wave-pink": "url('/src/img/wave-pink.png')",
                /* "character-mario": "url('/src/img/character-l.png')", */
                "patterns-ch-red": "url('/src/img/pattern-characters-red.png')",
                "patterns-yellow-dots":
                    "url('/src/img/pattern-yellow-dots.png')",
            },
        },
    },
    plugins: [],
};
