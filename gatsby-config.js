require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `The Clerk Of Oxford Company`,
    description: `Willy Williams' Tutoring Company, Offering in Person, Video and Virtual Tutoring with Zoom`,
    author: `@AlexShiresRoth`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        maxResults: 30,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#557A95`,
        theme_color: `#557A95`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: "theclerkofoxfordcompany.wordpress.com",
        protocol: "https",
        hostingWPCOM: true,
        useACF: false,
        auth: {
          wpcom_app_clientSecret: process.env.WP_SECRET,
          wpcom_app_clientId: process.env.WP_ID,
          wpcom_user: process.env.WP_USER,
          wpcom_pass: process.env.WP_PASS,
        },
        verboseOutput: false,
        searchAndReplaceContentUrls: {
          sourceUrl: "theclerkofoxfordcompany.wordpress.com",
          replacementUrl: "https://hungry-mclean-c14105.netlify.com/",
        },
      },
    },
  ],
}
