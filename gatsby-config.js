module.exports = {
    pathPrefix: '/naturalmente-tecnologici',
    siteMetadata: {
        title: `Naturalmente Tecnologici`,
        siteUrl: 'https://mike-cheek.github.io/naturalmente-tecnologici',
        url: 'https://mike-cheek.github.io/naturalmente-tecnologici',
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
                background_color: '#014dfe55',
                theme_color: '#014dfe55',
                // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
                // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
                display: 'standalone',
                icon: 'src/images/bug.png', // This path is relative to the root of the site.
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
    ],
};