import React from "react";
import { MainSection } from "./section-3/index";
// import '../styles/styles.scss'

const SectionThree = ({ lang }) => {
  return (
    <section className="section-three">
      <MainSection lang={lang} />
    </section>
  );
};

export default SectionThree;
