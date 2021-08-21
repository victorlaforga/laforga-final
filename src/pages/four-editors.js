import React from "react";
// import { Helmet } from "react-helmet";
import Navigation from "../components/section-1/nav";
import Menu from "../components/menu";
// import "../styles/styles.scss";
import Footer from "../components/footer";
import { AccessProvider } from "../contexts/access";
import Seo from "../components/seo";
import image from "../images/black-logo.png";
const FourEditors = ({ location }) => {
  const [open, setOpen] = React.useState(false);
  const metaImage = {
    src: image,
    width: 512,
    height: 512,
  };
  return (
    <section className="container-work">
      {/* <Helmet
        htmlAttributes={{
          lang: "nl",
        }}
      >
        <meta charSet="utf-8" />
        <title>Laforga | Shopify Agency | Four Editors</title>
        <link rel="canonical" href="https://www.laforga.nl" />
      </Helmet> */}
      <Seo
        image={metaImage}
        pathname={location.pathname}
        title="Four Editors"
        description="Four Editors verkoopt wereldwijd high-end film assets die elk
              aspect van het montageproces omvatten."
      />
      <div className="container-banner foureditors">
        <AccessProvider>
          <Navigation open={open} toggleMenu={() => setOpen(!open)} />
          <Menu open={open} toggleMenu={() => setOpen(!open)} />
        </AccessProvider>
        <h1>
          <mark>Four Editors</mark>
        </h1>
      </div>
      <section className="work-main">
        <div className="work-main--info">
          <div className="subtext">
            <h2>
              Four Editors verkoopt wereldwijd high-end film assets die elk
              aspect van het montageproces omvatten.
            </h2>
          </div>
          <div className="main-text">
            <h3>FourEditors</h3>
            <p>
              Four Editors kwam bij ons aan met een bestaande Shopify Store. Wij
              hadden de opdracht om met hun samen op te opschalen. Door de
              beperkingen van het thema hebben ze bij ons speciale aanvragen
              gedaan voor de site, een custom ontworpen & gecodeerde collectie
              pagina bijvoorbeeld. Voor Four Editors hebben wij ook de snelheid
              van de site voor zowel mobiel als desktop geoptimaliseerd.
            </p>
          </div>
        </div>
        <div className="work-icons">
          <div>
            <h3 className="h4">20+</h3>
            <p>Landen</p>
          </div>
          <div>
            <h3 className="h4">90+</h3>
            <p>Sitespeed</p>
          </div>
          <div>
            <h3 className="h4">+1</h3>
            <p>Jaar trouwe klant</p>
          </div>
        </div>
      </section>
      <div className="work-subbanner foureditors"></div>
      <div className="work-summary">
        <div>
          <h3>Altijd beschikbaar, snel en kwalitatief</h3>
          <p>
            {" "}
            Erg goed geholpen door Laforga. We zaten met wat problemen op de
            website, en dit werd direct opgelost. Altijd beschikbaar, snel en
            kwalitatief. Thanks!{" "}
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default FourEditors;
