module.exports = {
  siteMetadata: {
    title: "Digital Creative Agency | Shopify Partner",
    author: "Victor Laforga",
    keywords: ["Shopify Partner", "Digital Creative Agency", "Laforga"],
    description:
      "Begin vandaag nog met online verkopen met Shopify of schaal je winkel op met custom features. Wij zetten merken en bedrijven om in online legendes. Het bereiken van je volledige potentie zou je niet in de min moeten zetten",
    siteUrl: "https://www.laforga.nl",
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
{
  site {
    siteMetadata {
      siteUrl
    }
  }
  allSitePage {
    nodes {
      path
    }
  }
}
`,
        resolveSiteUrl: ({ site }) => site.siteMetadata.siteUrl,
        resolvePages: ({ allSitePage }) =>
          allSitePage.nodes.map((page) => {
            return { ...page };
          }),
        serialize: ({ path }) => {
          return {
            url: path,
            changefreq: `weekly`,
            priority: 0.8,
          };
        },
      },
    },

    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-195436344-1",
      },
    },
    "gatsby-plugin-webpack-bundle-analyser-v2",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Laforga | Shopify Agency",
        short_name: "Laforga | Shopify Agency",
        start_url: "/",
        background_color: "#134354",
        theme_color: "#134354",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/laforga-icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        // crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-plugin-loadable-components-ssr`,
      options: {
        // Whether replaceHydrateFunction should call ReactDOM.hydrate or ReactDOM.render
        // Defaults to ReactDOM.render on develop and ReactDOM.hydrate on build
        useHydrate: true,
      },
    },
    `gatsby-remark-lazy-load`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Set to false to allow builds to continue on image errors
        failOnError: true,
        // deprecated options and their defaults:
        base64Width: 20,
        forceBase64Format: `jpg`, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
        defaults: {
          placeholder: `none`,
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    {
      resolve: `gatsby-plugin-minify`,
      options: {
        removeAttributeQuotes: true,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: ["*"],
        importWorkboxFrom: `local`,
        globDirectory: "public",
        globPatterns: ["*/**"],
        cacheId: `gatsby-plugin-offline`,
        skipWaiting: true,
        clientsClaim: true,
        directoryIndex: "index.html",
      },
    },
  ],
};
