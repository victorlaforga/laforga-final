import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
function SEO({ description, lang, meta, image: metaImage, title, pathname }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
          }
        }
      }
    `
  );
  const metaDescription = description || site.siteMetadata.description;
  const image =
    metaImage && metaImage.src
      ? `${site.siteMetadata.siteUrl}${metaImage.src}`
      : null;
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null;
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: "keywords",
          content: site.siteMetadata.keywords.join(","),
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:url`,
          content: canonical,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          metaImage
            ? [
                {
                  property: "og:image",
                  content: image,
                },
                {
                  property: "og:image:width",
                  content: metaImage.width,
                },
                {
                  property: "og:image:height",
                  content: metaImage.height,
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image",
                },
              ]
            : [
                {
                  name: "twitter:card",
                  content: "summary",
                },
              ]
        )
        .concat(meta)}
    >
      <script type="application/ld+json">{JSON.stringify(schemaMarkUp)}</script>
    </Helmet>
  );
}

const schemaMarkUp = {
  "@context": "http://www.schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "Laforga",
      url: "https://www.laforga.nl",
      logo: "https://www.laforga.nl/static/black-logo-bb711faf29ccbee53ac9728e857a94f3.png",
      description:
        "Begin vandaag nog met online verkopen met Shopify of schaal je winkel op met custom features. Wij zetten merken en bedrijven om in online legendes. Het bereiken van je volledige potentie zou je niet in de min moeten zetten.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Batavierenplantsoen 17, 2025CJ Haarlem",
        addressLocality: "Haarlem",
        addressRegion: "Amsterdam",
        postalCode: "2025CJ",
        addressCountry: "Netherlands",
      },
      openingHours: "Mo, Tu, We, Th, Fr, Sa, Su -",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+31 23208 4022",
        contactType: "E-mail: info@laforga.nl",
      },
    },
    {
      "@type": ["Person", "Organization"],
      "@id": "https://www.laforga.nl",
      name: "Victor Laforga",
      url: "https://www.laforga.nl/icons/icon-512x512.png",
      image: {
        "@type": "ImageObject",
        "@id": "https://www.laforga.nl/icons/icon-512x512.png",
        inLanguage: ["en-US", "en-UK", "en-GB"],
        url: "https://www.laforga.nl/icons/icon-512x512.png",
        width: 1851,
        height: 1361,
        caption: "Victor Laforga",
      },
      logo: { "@id": "https://www.laforga.nl/icons/icon-512x512.png" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Contact",
          item: "https://www.laforga.nl/contact",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Aanvraag",
          item: "https://www.laforga.nl/aanvraag",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Aerial Access",
          item: "https://www.laforga.nl/aerial-access",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Four Editors",
          item: "https://www.laforga.nl/four-editors",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Maglashic",
          item: "https://www.laforga.nl/maglashic",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "T&M Tweewielers",
          item: "https://www.laforga.nl/tm-tweewielers",
        },
      ],
    },
  ],
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};
SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  pathname: PropTypes.string,
};
export default SEO;
