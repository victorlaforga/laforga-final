import React, { useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import { createWidget } from "@typeform/embed";
import "@typeform/embed/build/css/widget.css"; // import necessary CSS
import Navigation from "../components/section-1/nav";
import Menu from "../components/menu";
import "../styles/styles.scss";
import { AccessProvider } from "../contexts/access";

const MyTypeformEmbed = () => {
  const container = useRef();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    createWidget("CWcJdwc7", { container: container.current });
  }, []);

  return (
    <div className="contact-container">
      <Helmet
        htmlAttributes={{
          lang: "nl",
        }}
      >
        <meta charSet="utf-8" />
        <title>Aanvraag</title>
        <link rel="canonical" href="https://www.laforga.nl" />
      </Helmet>
      <div className="inquiry-container">
        <AccessProvider>
          <Navigation open={open} toggleMenu={() => setOpen(!open)} />
          <Menu open={open} toggleMenu={() => setOpen(!open)} />
        </AccessProvider>
        <div className="contact-info">
          <div className="">
            <h3>E-mail:</h3>
            <a href="mailto:info@laforga.nl">info@laforga.nl</a>
          </div>
          <br />
          <div className="">
            <h3>Telefoonnummer: </h3>{" "}
            <a href="tel:+31232084022">+31 23 208 4022</a> <br />
          </div>
          <div>
            <a href="https://api.whatsapp.com/send?phone=+31628340312">
              Whatsapp: +31628340312
            </a>
          </div>
        </div>
        <div ref={container}></div>
      </div>
    </div>
  );
};

export default MyTypeformEmbed;
