module.exports = {
  siteMetadata: {
    title: `LetsGROW - Vi hjælper med at bygge jeres salgsmotor`,
    description: `Fokuser på din kerneforretning så hjælper vi med den organiske vækst via proaktiv og struktureret salg`,
    author: `Toke Hølledig`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/svg`
        }
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `oswald`,
          `roboto`,
          `roboto slab`,
          `roboto condensed`,
          `open sans`
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        singleTypes: [`header`, `why`, `how`, `what`, `footer`, `markedsdata`, `quote`],
        queryLimit: 1000,
      },
    },
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true,
        www: true,
      },
    },
    {
      resolve: `gatsby-plugin-cookiehub-banner`,
      options: { 
          // The ID is part of the CookieHub URL: https://cookiehub.net/cc/YOUR_COOKIEHUB_ID.js
          cookieHubId: "32be6a4d",
          // Categories configured with CookieHub
          categories: [
            { 
                categoryName: 'analytics', // Unique id of the category which is set by Cookiehub.
                cookieName: 'gatsby-plugin-google-analytics-gdpr_cookies-enabled' // Your custom cookie name
            },
            { 
                categoryName: 'marketing',
                cookieName: 'marketing-enabled'
            }
          ]
      }
    },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      // The property ID; the tracking code won't be generated without it
      trackingId: "UA-207354593-1",
      head: true,
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  },
  ],
}
