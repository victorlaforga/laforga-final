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
    <div>
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
        lang="nl"
        image={metaImage}
        title="Laforga | E-commerce Agency"
        pathname={location.pathname}
      />
      <AccessProvider>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
       
        <SectionFive />
        <SectionFour />
        <OurWork />
        <SectionSix />
        <SectionSeven />
        <Testimonials />
        <Footer />
      </AccessProvider>
    </div>
  );
};

export default IndexPage;
