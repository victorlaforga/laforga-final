import  React from "react";
import "../styles/styles.scss";
import MainSectionTwo from "./section-2/main";
import WebsiteOffer from "./section-2/website-offer";

const SectionTwo = () => {
  return (
    <section className="section-two">
      <MainSectionTwo />
      <WebsiteOffer />
    </section>
  );
};

export default SectionTwo;
