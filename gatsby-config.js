require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Sisters by the Moon`,
    siteTitle: `Sisters by the Moon`,
    siteTitleShort: `SBTM`,
    description: `Welcome to Sisters by the Moon. This shop is your go-to for Tarot and Rune readings, along with candles, bath salts, bath bombs and many more items to come!! `,
    siteUrl: `https://www.sistersbythemoon.com`,
    siteLanguage: `en`,
    ogUrl: "https://www.sistersbythemoon.com",
    ogTitle: `Sisters by the Moon`,
    ogDescription:
      "Welcome to Sisters by the Moon. This shop is your go-to for Tarot and Rune readings, along with candles, bath salts, bath bombs and many more items to come!! ",
    ogImage: "/images/official_bg.jpg",
    siteLogo: "/images/official_bg.jpg",
    author: `@rthurman2386`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-shopify`,
      options: {
        // The domain name of your Shopify shop.
        shopName: `sisters-by-the-moon`,
        // The storefront access token
        accessToken: `${process.env.SHOPIFY_STOREFRONT_KEY}`,
        verbose: true,
        paginationSize: 250,
      },
    },
    // {
    // resolve: `gatsby-source-strapi`,
    // options: {
    //     apiURL: process.env.API_URL || "http://localhost:1337",
    //     queryLimit: 1000, // Default to 100
    //     contentTypes: [`quotes`, `user`],
    //   },
    // },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.7, // Percentage of an element's area that needs to be visible to launch animation
        once: false, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: "[data-sal]", // Selector of the elements to be animated
        animateClassName: "sal-animate", // Class name which triggers animation
        disabledClassName: "sal-disabled", // Class name which defines the disabled state
        rootMargin: "0% 50%", // Corresponds to root's bounding box margin
        enterEventName: "sal:in", // Enter event name
        exitEventName: "sal:out", // Exit event name
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sistersbythemoon`,
        short_name: `Sisters`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/official_bg.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
