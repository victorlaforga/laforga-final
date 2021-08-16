import React from "react";
import { useInView } from "react-intersection-observer";
import Menu from "../menu";
import { AccessContext } from "../../contexts/access";
import ProjectContainerLink from "./ProjectContainerLink";
import logo from "../../images/black-logo.png"
import '../../styles/styles.scss'
const Navigation = ({ open, toggleMenu }) => {
  const [isFirstAccess] = React.useContext(AccessContext);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div
      className={`show header`}
      // `header ${isFirstAccess && inView ? "show" : "initial"}`
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
        <img className="logo" src={logo} alt="laforga" loading="eager" width="100%" height="50"/>
      </a>
      <div className="start-project-container">
        <ProjectContainerLink />
      </div>
    </div>
  );
};

export default Navigation;
