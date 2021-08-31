import React from "react";
// import { Helmet } from "react-helmet";
import Navigation from "../components/section-1/nav";
import Menu from "../components/menu";
// import "../styles/styles.scss";
import Footer from "../components/footer";
import { AccessProvider } from "../contexts/access";
import Seo from "../components/seo";
import image from "../images/black-logo.png";
const TmTweewielers = ({ location }) => {
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
        <title>Laforga | Shopify Agency | T&M Tweewielers</title>
        <link rel="canonical" href="https://www.laforga.nl" />
      </Helmet> */}
      <Seo
        pathname={location.pathname}
        image={metaImage}
        title="T&M Tweewielers"
        description="T&M Tweewielers is the largest bicycle store in Haarlem.
        Experts in repairing & selling bicycles and scooters."
      />
      <div className="container-banner tm">
        <AccessProvider>
          <Navigation
            link="/tm-tweewielers"
            lang="en"
            open={open}
            toggleMenu={() => setOpen(!open)}
          />
          <Menu lang="en" open={open} toggleMenu={() => setOpen(!open)} />
        </AccessProvider>
        <h1>
          <mark>T&M Tweewielers</mark>
        </h1>
      </div>
      <section className="work-main">
        <div className="work-main--info">
          <div className="subtext">
            <h2>
              T&M Tweewielers is the largest bicycle store in Haarlem. Experts
              in repairing & selling bicycles and scooters.
            </h2>
          </div>
          <div className="main-text">
            <h3>T&M Tweewielers</h3>
            <p>
              For T&M Tweewielers took care of everything. We have a new logo,
              new corporate identity, and transformed their retail store into a
              webshop to grow in this digital age . So they now have 2 points of
              sale, physical and digital, which provides extra income.{" "}
            </p>
          </div>
        </div>
        <div className="work-icons">
          <div>
            <h3 className="h4">100%</h3>
            <p>New site & branding</p>
          </div>
          <div>
            <h3 className="h4">100%</h3>
            <p>The store's corporate identity has been adopted</p>
          </div>
        </div>
      </section>
      <div className="work-subbanner tm"></div>
      <div className="work-summary">
        <div>
          <h3>Our retail store reflects the webshop</h3>
          <p>
            {" "}
            Laforga made the whole package for us. From the corporate identity
            and logo to the webshop itself. We are very happy with the result
            and the webshop reflects our retail store.
          </p>
        </div>
      </div>
      <Footer lang="en" />
    </section>
  );
};

export default TmTweewielers;
