module.exports = {
    pathPrefix: '/nt',
    siteMetadata: {
        title: `Naturalmente Tecnologici`,
        siteUrl: 'http://syskrack.org/nt',
        url: 'http://syskrack.org/nt',
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'Naturalmente Tecnologici',
                short_name: 'NT',
                lang: 'it',
                background_color: '#ffffff',
                theme_color: '#ffffff',
                // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
                // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
                display: 'standalone',
                icon: 'src/assets/bug.svg', // This path is relative to the root of the site.
                // An optional attribute which provides support for CORS check.
                // If you do not provide a crossOrigin option, it will skip CORS for manifest.
                // Any invalid keyword or empty string defaults to `anonymous`
                crossOrigin: `use-credentials`,
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/,
                },
                path: './src/assets/',
            },
        },
    ],
};