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
        description="Four Editors sells high-end film assets worldwide that cover every
        aspect of the editing process."
      />
      <div className="container-banner foureditors">
        <AccessProvider>
          <Navigation
            link="/four-editors"
            lang="en"
            open={open}
            toggleMenu={() => setOpen(!open)}
          />
          <Menu lang="en" open={open} toggleMenu={() => setOpen(!open)} />
        </AccessProvider>
        <h1>
          <mark>Four Editors</mark>
        </h1>
      </div>
      <section className="work-main">
        <div className="work-main--info">
          <div className="subtext">
            <h2>
              Four Editors sells high-end film assets worldwide that cover every
              aspect of the editing process.
            </h2>
          </div>
          <div className="main-text">
            <h3>FourEditors</h3>
            <p>
              Four Editors came to us with an existing Shopify Store. We had the
              assignment to scale up with them. Due to the limitations of the
              theme they made special requests for the site, a custom designed &
              coded collection page for example. For Four Editors, we also
              optimized the site speed for both mobile and desktop.
            </p>
          </div>
        </div>
        <div className="work-icons">
          <div>
            <h3 className="h4">20+</h3>
            <p>Countries</p>
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
      <div className="work-subbanner foureditors"></div>
      <div className="work-summary">
        <div>
          <h3>Always available, fast and qualitative</h3>
          <p>
            {" "}
            Very good help from Laforga. We had some problems on the website,
            and this was solved immediately. Always available, fast and
            qualitative. Thanks!{" "}
          </p>
        </div>
      </div>
      <Footer lang="en" />
    </section>
  );
};

export default FourEditors;
