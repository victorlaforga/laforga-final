import * as React from "react"
import "../styles/styles.scss"
import MainSectionFour from "./section-4/main"


const SectionFour = () => {
  return (
   <section className="section-four">
      <div className="wave top"></div>
      <div className="wave bottom"></div>
      <MainSectionFour />
   </section>
  )
}

export default SectionFour