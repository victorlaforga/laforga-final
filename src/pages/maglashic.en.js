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
        description="MagLashic is one of the leaders in Europe when it comes to
        selling magnetic eyelashes. Applying eyelashes has never
        been easier."
      />
      <div className="container-banner maglashic">
        <AccessProvider>
          <Navigation
            link="/maglashic"
            lang="en"
            open={open}
            toggleMenu={() => setOpen(!open)}
          />
          <Menu lang="en" open={open} toggleMenu={() => setOpen(!open)} />
        </AccessProvider>
        <h1>
          <mark>Maglashic</mark>
        </h1>
      </div>
      <section className="work-main">
        <div className="work-main--info">
          <div className="subtext">
            <h2>
              MagLashic is one of the leaders in Europe when it comes to selling
              magnetic eyelashes. Applying eyelashes has never been easier.
            </h2>
          </div>
          <div className="main-text">
            <h3>Maglashic</h3>
            <p>
              MagLashic came to us with an existing Shopify Store. They were
              already selling well and wanted to scale up with us. Due to the
              limitations of the theme, they have made special requests with us
              such as a 100% custom shopping cart, a custom FAQ section, Add to
              cart buttons in specific places & optimizing the speed of the
              website. These are some examples of functions & features that we
              have applied to increase conversion.
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
            <p>Sitespeed </p>
          </div>
          <div>
            <h3 className="h4">+1</h3>
            <p>Year of loyal customer</p>
          </div>
        </div>
      </section>
      <div className="work-subbanner maglashic"></div>
      <div className="work-summary">
        <div>
          <h3>Never mind taking that extra step</h3>
          <p>
            {" "}
            We are very pleased with the result. Laforga listens well and has a
            feeling for what you want. Excellent service, fast, professional,
            creative, solution-oriented, and personal. Never be afraid to take
            those extra steps.
          </p>
        </div>
      </div>
      <Footer lang="en" />
    </section>
  );
};

export default Maglashic;
