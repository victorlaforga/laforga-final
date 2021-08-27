import React from "react";
import { MainSection, WebsiteOffer } from "./section-2/index";
// import '../styles/styles.scss'
const SectionTwo = ({ lang }) => {
  return (
    <section className="section-two" lang={lang}>
      <MainSection lang={lang} />
      <WebsiteOffer lang={lang} />
    </section>
  );
};

export default SectionTwo;
