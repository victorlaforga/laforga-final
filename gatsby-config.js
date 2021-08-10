module.exports = {
  siteMetadata: {
    title: "laforga",
    siteUrl: "https://www.laforga.nl",
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-preact`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "195436344",
      },
    },
    "gatsby-plugin-webpack-bundle-analyser-v2",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`],
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
