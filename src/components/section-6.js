import * as React from "react"
import "../styles/styles.scss"
import MainSectionSix from "./section-6/main"


const SectionSix = () => {
  return (
   <section className="section-six">
      <div className="wave top"></div>
      <div className="wave bottom"></div>
      <MainSectionSix />
   </section>
  )
}

export default SectionSix