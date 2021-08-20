import React from "react";
// import { Helmet } from "react-helmet";
import Navigation from "../components/section-1/nav";
import Menu from "../components/menu";
import "../styles/styles.scss";
import Footer from "../components/footer";
import { AccessProvider } from "../contexts/access";
import Seo from "../components/seo";

const TmTweewielers = ({ location }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <section className="container-work">
      {/* <Helmet
        htmlAttributes={{
          lang: "nl",
        }}
      >
        <meta charSet="utf-8" />
        <title>Laforga | Shopify Agency | T&M Tweewielers</title>
        <link rel="canonical" href="https://www.laforga.nl" />
      </Helmet> */}
      <Seo
        pathname={location.pathname}
        title="T&M Tweewielers"
        description="T&M Tweewielers is de grootste tweewielers winkel in Haarlem.
              Experts in het repareren & verkopen van fietsen en scooters."
      />
      <div className="container-banner tm">
        <AccessProvider>
          <Navigation open={open} toggleMenu={() => setOpen(!open)} />
          <Menu open={open} toggleMenu={() => setOpen(!open)} />
        </AccessProvider>
        <h1>
          <mark>T&M Tweewielers</mark>
        </h1>
      </div>
      <section className="work-main">
        <div className="work-main--info">
          <div className="subtext">
            <h2>
              T&M Tweewielers is de grootste tweewielers winkel in Haarlem.
              Experts in het repareren & verkopen van fietsen en scooters.
            </h2>
          </div>
          <div className="main-text">
            <h3>T&M Tweewielers</h3>
            <p>
              Voor T&M Tweewielers hebben bij alles in handen genomen. We hebben
              een nieuw logo, nieuwe huisstijl, en hun retail winkel
              getransformeerd in een webshop om in dit digitale tijdperk te
              groeien. Ze hebben nu dus 2 verkooppunten, fysiek en digitaal, wat
              dus voor extra inkomsten zorgt.{" "}
            </p>
          </div>
        </div>
        <div className="work-icons">
          <div>
            <h3 className="h4">100%</h3>
            <p>Nieuwe site & branding</p>
          </div>
          <div>
            <h3 className="h4">100%</h3>
            <p>Huisstijl van de winkel overgenomen</p>
          </div>
        </div>
      </section>
      <div className="work-subbanner tm"></div>
      <div className="work-summary">
        <div>
          <h3>Onze retail winkel weerspiegelt de webshop</h3>
          <p>
            {" "}
            Laforga heeft voor ons het hele pakket gemaakt. Van de huisstijl en
            het logo tot de webshop zelf. We zijn onzettend blij met het
            resultaat en de webshop weerspiegelt onze retail winkel.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default TmTweewielers;
