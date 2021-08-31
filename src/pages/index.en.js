import React from "react";
// import { Helmet } from "react-helmet";
import {
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  SectionFive,
  SectionSix,
  SectionSeven,
  OurWork,
  Testimonials,
  Footer,
} from "../components";
import { AccessProvider } from "../contexts/access";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Seo from "../components/seo";
import image from "../images/black-logo.png";
// import Menu from "../components/menu";
const IndexPage = ({ location }) => {
  const metaImage = {
    src: image,
    width: 512,
    height: 512,
  };

  return (
    <div lang="en">
      {/* <Helmet
        htmlAttributes={{
          lang: "nl",
        }}
      >
        <meta charSet="utf-8" />
        <title>Laforga | Shopify Agency</title>
        <link rel="canonical" href="https://www.laforga.nl" />
      
      </Helmet> */}
      <Seo
        lang="en"
        image={metaImage}
        title="Laforga"
        description="Start selling online with Shopify today or scale your store with custom features. We turn brands and companies into online legends. Reaching your full potential shouldn't put you down."
        pathname={location.pathname}
      />
      <AccessProvider lang="en">
        <SectionOne lang="en" />
        <SectionTwo lang="en" />
        <SectionThree lang="en" />
        <SectionFour lang="en" />
        <SectionFive lang="en" />
        <OurWork lang="en" />
        <SectionSix lang="en" />
        <SectionSeven lang="en" />
        <Testimonials lang="en" />
        <Footer lang="en" />
      </AccessProvider>
    </div>
  );
};

export default IndexPage;
