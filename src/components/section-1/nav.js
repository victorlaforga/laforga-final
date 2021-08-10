import React from "react";
import { useInView } from "react-intersection-observer";
import Logo from "../../images/black-logo.png";
import Menu from "../menu";
import { AccessContext } from "../../contexts/access";
import ProjectContainerLink from "./ProjectContainerLink"
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
          <a
            className={`hamburger-menu ${open ? "open" : ""}`}
            onClick={() => toggleMenu()}
          ></a>
        </div>
      </div>
      <a href="/">
        <img className="logo" src={Logo} />
      </a>
      <div className="start-project-container">
      <ProjectContainerLink/>
      </div>
    </div>
  );
};

export default Navigation;
