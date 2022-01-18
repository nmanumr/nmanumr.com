module.exports = {
    content: [
        './public/**/*.html',
        './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'
    ],
    theme: {
        extend: {
            screens: {
                'xs': "470px"
            },
            fontFamily: {
                'recoleta': ['Recoleta', 'ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
                'sans': ['IBM Plex Sans', 'ui-sans-serif', 'sans-serif']
            },
            typography: {
                DEFAULT: {
                    css: {
                        'blockquote p:first-of-type::before': {
                            content: '',
                        },
                        'blockquote p:last-of-type::after': {
                            content: '',
                        },
                    }
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
    ]
};