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

// import Menu from "../components/menu";
const IndexPage = ({ location }) => {
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
      <Seo title="Laforga" pathname={location.pathname} />
      <AccessProvider>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
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
