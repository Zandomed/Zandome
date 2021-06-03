const packageInfo = require('./package.json');
require('dotenv').config({
   path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
   siteMetadata: {
      title: `Zandome`,
      description: `Development apps with Zandome`,
      author: `@zandome`,
   },
   plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-fontawesome-css`,
      // 'gatsby-plugin-mdx', /
      {
         resolve: 'gatsby-plugin-sitemap',
         options: {
            query: `
           {
             allSitePage {
               nodes {
                 path
               }
             }
           }
         `,
            resolveSiteUrl: () => `https://zandome.com`,
            resolvePages: ({ allSitePage: { nodes: allPages } }) => allPages,
            serialize: ({ path, modifiedGmt }) => {
               return {
                  url: path,
                  lastmod: modifiedGmt,
               };
            },
         },
      },
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `images`,
            path: `./src/images`,
         },
         __key: 'images',
      },
      {
         resolve: 'gatsby-source-filesystem',
         options: {
            name: 'pages',
            path: './src/pages/',
         },
         __key: 'pages',
      },
      {
         resolve: `gatsby-plugin-manifest`,
         options: {
            name: `Zandome`,
            short_name: `zandome`,
            description: `Development apps with Zandome`,
            start_url: `/`,
            background_color: `#007297`,
            theme_color: `#007297`,
            display: `minimal-ui`,
            icon: `src/images/favicon.png`, // This path is relative to the root of the site.
         },
      },
      {
         resolve: 'gatsby-plugin-google-gtag',
         options: {
            trackingIds: [process.env.GOOGLE_ANALYTICS_UID],
            gtagConfig: {
               optimize_id: 'OPT_CONTAINER_ID',
               cookie_expires: 0,
            },
         },
      },
      {
         resolve: '@sentry/gatsby',
         options: {
            dsn: process.env.SENTRY_ID,
            sampleRate: 1.0,
            release: packageInfo.version,
            environment: process.env.NODE_ENV,
         },
      },
      {
         resolve: 'gatsby-plugin-react-svg',
         options: {
            rule: {
               include: /\.svg$/, // See below to configure properly
            },
         },
      },
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      // `gatsby-plugin-offline`,
   ],
};
