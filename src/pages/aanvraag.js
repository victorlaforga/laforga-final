import React, { useRef, useEffect } from "react";
// import { Helmet } from "react-helmet";
import { createWidget } from "@typeform/embed";
import "@typeform/embed/build/css/widget.css"; // import necessary CSS
import Navigation from "../components/section-1/nav";
import Menu from "../components/menu";
// import "../styles/styles.scss";
import { AccessProvider } from "../contexts/access";
import Seo from "../components/seo";
import image from "../images/black-logo.png";
const MyTypeformEmbed = ({ location }) => {
  const container = useRef();
  const [open, setOpen] = React.useState(false);
  const metaImage = {
    src: image,
    width: 512,
    height: 512,
  };
  useEffect(() => {
    createWidget("CWcJdwc7", { container: container.current });
  }, []);

  return (
    <div className="contact-container">
      <Seo image={metaImage} title="Aanvraag" pathname={location.pathname} />
      <div className="inquiry-container">
        <AccessProvider>
          <Navigation open={open} toggleMenu={() => setOpen(!open)} />
          <Menu open={open} toggleMenu={() => setOpen(!open)} />
        </AccessProvider>

        <div ref={container}></div>
      </div>
    </div>
  );
};

export default MyTypeformEmbed;
