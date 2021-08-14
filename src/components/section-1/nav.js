import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { useInView } from "react-intersection-observer";
import Menu from "../menu";
import { AccessContext } from "../../contexts/access";
import ProjectContainerLink from "./ProjectContainerLink";
const Navigation = ({ open, toggleMenu }) => {
  const [isFirstAccess] = React.useContext(AccessContext);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div
      className={`header ${isFirstAccess && inView ? "show" : "initial"}`}
      ref={ref}
    >
      <Menu className={`menu ${open ? "open" : "closed"}`} />
      <div className="hamburger-container">
        <div className="hamburguer-wrapper">
          <div
            className={`hamburger-menu ${open ? "open" : ""}`}
            onClick={() => toggleMenu()}
            onKeyDown={() => toggleMenu()}
            aria-hidden="true"
          />
        </div>
      </div>
      <a href="/">
        <StaticImage className="logo" src="../../images/black-logo.png" alt="laforga" loading="eager" width={145} height={55}/>
      </a>
      <div className="start-project-container">
        <ProjectContainerLink />
      </div>
    </div>
  );
};

export default Navigation;
