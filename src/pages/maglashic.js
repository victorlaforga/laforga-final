import React from "react";
// import { Helmet } from "react-helmet";
import Navigation from "../components/section-1/nav";
import Menu from "../components/menu";
// import "../styles/styles.scss";
import Footer from "../components/footer";
import { AccessProvider } from "../contexts/access";
import Seo from "../components/seo";
import image from "../images/black-logo.png";
const Maglashic = ({ location }) => {
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
        <title>Laforga | Shopify Agency | Maglashic</title>

        <link rel="canonical" href="https://www.laforga.nl" />
      </Helmet> */}
      <Seo
        image={metaImage}
        pathname={location.pathname}
        title="Maglashic"
        description="MagLashic is een van de koplopers in Europa wat betreft het
              verkopen van magnetische wimpers. Wimpers aanbrengen is nog nooit
              zo eenvoudig geweest."
      />
      <div className="container-banner maglashic">
        <AccessProvider>
          <Navigation open={open} toggleMenu={() => setOpen(!open)} />
          <Menu open={open} toggleMenu={() => setOpen(!open)} />
        </AccessProvider>
        <h1>
          <mark>Maglashic</mark>
        </h1>
      </div>
      <section className="work-main">
        <div className="work-main--info">
          <div className="subtext">
            <h2>
              MagLashic is een van de koplopers in Europa wat betreft het
              verkopen van magnetische wimpers. Wimpers aanbrengen is nog nooit
              zo eenvoudig geweest.
            </h2>
          </div>
          <div className="main-text">
            <h3>Maglashic</h3>
            <p>
              MagLashic kwam bij ons aan met een bestaande Shopify Store. Ze
              verkochten al goed en wouden met ons opschalen. Door de
              beperkingen van het thema hebben ze bij ons speciale aanvragen
              gedaan zoals een 100% custom winkelwagen, een custon FAQ sectie,
              Add to cart knoppen op specifieke plekken & de snelheid van de
              website optimaliseren. Dit zijn enkele voorbeelden van functies &
              onderdelen die wij hebben toegepast om de conversie te verhogen.
            </p>
          </div>
        </div>
        <div className="work-icons">
          <div>
            <h3 className="h4">100%</h3>
            <p>Support</p>
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
      <div className="work-subbanner maglashic"></div>
      <div className="work-summary">
        <div>
          <h3>Nooit beroerd om die extra stap te zetten</h3>
          <p>
            {" "}
            Wij zijn zeer tevreden met het resultaat. Laforga luistert goed en
            heeft gevoel voor wat je wilt. Uitstekende service, snel,
            professioneel, creatief, oplossingsgericht, en persoonlijk. Nooit te
            beroerd om die extra stappen te zetten.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Maglashic;
