import React from "react";
import { MainSection } from "./section-4/index";
// import '../styles/styles.scss'
const SectionFour = ({ lang }) => {
  return (
    <section className="section-four">
      <div className="wave top"></div>
      <div className="wave bottom"></div>
      <MainSection lang={lang} />
    </section>
  );
};

export default SectionFour;
