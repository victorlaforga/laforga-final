import * as React from "react";
import Footer from "../components/footer";
import SectionOne from "../components/section-1";
import SectionTwo from "../components/section-2";
import SectionThree from "../components/section-3";
import SectionFour from "../components/section-4";
import SectionFive from "../components/section-5";
import SectionSix from "../components/section-6";
import SectionSeven from "../components/section-7";
import SectionWork from "../components/section-our-work";
import TestimonialSection from "../components/testimonial";

import { AccessProvider } from "../contexts/access";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import Menu from "../components/menu";
const IndexPage = () => {
  return (
    <div>
      <AccessProvider>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <SectionWork />
        <TestimonialSection />
        <Footer />
      </AccessProvider>
    </div>
  );
};

export default IndexPage;
