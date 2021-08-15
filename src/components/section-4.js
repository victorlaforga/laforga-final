import React from "react";
import { MainSection } from "./section-4/index";
import '../styles/styles.scss'
const SectionFour = () => {
  return (
    <section className="section-four">
      <div className="wave top"></div>
      <div className="wave bottom"></div>
      <MainSection />
    </section>
  );
};

export default SectionFour;
