import React from "react";

const ProjectContainerLink = ({ lang }) => {
  if (!lang) {
    return (
      <a className="start-project cool-link" href="/contact/">
        Hulp bij project?
        {/* <img className="logo" src={Logo} /> */}
      </a>
    );
  } else {
    return (
      <a className="start-project cool-link" href="/en/contact/">
        Help with project?
        {/* <img className="logo" src={Logo} /> */}
      </a>
    );
  }
};

export default ProjectContainerLink;
