module.exports = {
    mode: 'jit',
    purge: [
        './public/**/*.html',
        './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'
    ],
    theme: {
        extend: {
            fontFamily: {
                'recoleta': ['Recoleta', 'ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
                'sans': ['IBM Plex Sans', 'ui-sans-serif', 'sans-serif']
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
    ]
};