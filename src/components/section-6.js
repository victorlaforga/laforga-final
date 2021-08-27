import React from "react";
import { MainSection } from "./section-6/index";
// import '../styles/styles.scss'
const SectionSix = ({ lang }) => {
  return (
    <section className="section-six">
      <div className="wave top"></div>
      <div className="wave bottom"></div>
      <MainSection lang={lang} />
    </section>
  );
};

export default SectionSix;
