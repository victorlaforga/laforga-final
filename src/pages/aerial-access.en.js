import React from "react";
// import { Helmet } from "react-helmet";
import Navigation from "../components/section-1/nav";
import Menu from "../components/menu";
// import "../styles/styles.scss";
import Footer from "../components/footer";
import { AccessProvider } from "../contexts/access";
import Seo from "../components/seo";
import image from "../images/black-logo.png";
const AerialWork = ({ location }) => {
  const [open, setOpen] = React.useState(false);
  const metaImage = {
    src: image,
    width: 512,
    height: 512,
  };
  return (
    <section className="container-work">
      <Seo
        image={metaImage}
        title="Aerial Access"
        description="By using specialized rope access techniques, Aerial Access is able to perform work in difficult accessible locations."
        pathname={location.pathname}
      />
      <div className="container-banner aerial">
        <AccessProvider>
          <Navigation
            link="/aerial-access"
            lang="en"
            open={open}
            toggleMenu={() => setOpen(!open)}
          />
          <Menu lang="en" open={open} toggleMenu={() => setOpen(!open)} />
        </AccessProvider>
        <h1>
          <mark>Aerial Access</mark>
        </h1>
      </div>
      <section className="work-main">
        <div className="work-main--info">
          <div className="subtext">
            <h2>
              By using specialized rope access techniques, Aerial Access is able
              to perform work in difficult accessible locations .
            </h2>
          </div>
          <div className="main-text">
            <h3>Aerial Acces</h3>
            <p>
              In collaboration with Marinade Studios we have renewed the
              complete site & brandind for Aerial Access. Marinade Studios has
              been responsible for the design, corporate identity & branding. We
              took care of the development & design of mobile screens. For this
              we have created a custom site that has been built from scratch. We
              are proud of this work because it is completely self-designed,
              which means that this site has an exclusive design that cannot be
              seen anywhere else. This gives Aerial Access its own story.
            </p>
          </div>
        </div>
        <div className="work-icons">
          <div>
            <h3 className="h4">100%</h3>
            <p>Custom design & development</p>
          </div>
          <div>
            <h3 className="h4">1</h3>
            <p>Exclusief ontwerp</p>
          </div>
        </div>
      </section>
      <div className="work-subbanner"></div>
      <div className="work-summary">
        <div>
          <h3 className="h3">
            Laforga thinks along from the customer's perspective
          </h3>
          <p>
            {" "}
            Enthusiastic agency with insight. Designed a beautiful site for
            Aerial Access that fully met our requirements. Thinks along with the
            design from the customer's perspective and leaves room for your own
            ideas. Pleasant cooperation with an eye for service.
          </p>
        </div>
      </div>
      <Footer lang="en" />
    </section>
  );
};

export default AerialWork;
