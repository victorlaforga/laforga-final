import React, { useRef, useEffect } from "react";
import { Helmet } from "react-helmet";

import "@typeform/embed/build/css/widget.css"; // import necessary CSS
import Navigation from "../components/section-1/nav";
import Menu from "../components/menu";
// import "../styles/styles.scss";
import { AccessProvider } from "../contexts/access";
import Seo from "../components/seo";
import image from "../images/black-logo.png";
const ContactPage = ({ location }) => {
  const [open, setOpen] = React.useState(false);
  const metaImage = {
    src: image,
    width: 512,
    height: 512,
  };
  return (
    <div className="contact-container">
      {/* <Helmet
        htmlAttributes={{
          lang: "nl",
        }}
      >
        <meta charSet="utf-8" />
        <title>Laforga | Shopify Agency | Aanvraag</title>
        <link rel="canonical" href="https://www.laforga.nl" />
      </Helmet> */}

      <Seo
        lang="nl"
        image={metaImage}
        title="Contact"
        description="Neem contact met ons op. Wij reageren binnen 24 uur."
        pathname={location.pathname}
      />

      <AccessProvider>
        <Navigation
          link="/contact"
          open={open}
          toggleMenu={() => setOpen(!open)}
        />
        <Menu open={open} toggleMenu={() => setOpen(!open)} />
      </AccessProvider>
      <div className="contact-container--info ">
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
              Whatsapp:
              <br /> +31628340312
            </a>
          </div>
        </div>
        <div className="contact-aanvraag">
          <h3 className="h2">Ready?</h3>
          <p>
            Ben jij klaar om jouw winkel om te zetten in een digitale machine?
            Of ben je meer dan ready om jouw Shopify Store op te schalen met
            nieuwe features? Vul dan ons formulier in binnen 3 minuten!
          </p>{" "}
          <br />
          <p>Wij antwoorden binnen 24 uur.</p>
          <a className="aanvraag-btn" href="/aanvraag/">
            Ga naar het contactformulier
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
