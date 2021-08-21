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
        description="Door het gebruik van gespecialiseerde rope access technieken is
              Aerial Access in staat op moeilijke toegankelijke locaties
              werkzaamheden uit te voeren."
        pathname={location.pathname}
      />
      <div className="container-banner aerial">
        <AccessProvider>
          <Navigation open={open} toggleMenu={() => setOpen(!open)} />
          <Menu open={open} toggleMenu={() => setOpen(!open)} />
        </AccessProvider>
        <h1>
          <mark>Aerial Access</mark>
        </h1>
      </div>
      <section className="work-main">
        <div className="work-main--info">
          <div className="subtext">
            <h2>
              Door het gebruik van gespecialiseerde rope access technieken is
              Aerial Access in staat op moeilijke toegankelijke locaties
              werkzaamheden uit te voeren.
            </h2>
          </div>
          <div className="main-text">
            <h3>Aerial Acces</h3>
            <p>
              In samenwerking met Marinade Studios hebben wij voor Aerial Access
              de complete site & brandind vernieuwd. Marinade Studios is
              verantwoordelijk geweest voor het ontwerp, huisstijl & branding.
              Wij hebben voor het development & het ontwerp van mobiele schermen
              gezorgd. Hiervoor hebben wij een custom site gemaakt die vanaf
              scratch is gebouwd. Wij zijn trots op dit werk omdat het volledig
              zelf ontworpen is, dit wil zeggen dat deze site een exclusief
              ontwerp heeft die nergens anders te bekennen is. Hierdoor krijgt
              Aerial Access een eigen verhaal.
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
            Laforga denkt mee vanuit het perspectief van de klant
          </h3>
          <p>
            {" "}
            Enthousiaste agency met inzicht. Heeft voor Aerial Access een mooie
            site ontworpen die volledig voldeed aan onze eisen. Denkt mee met
            ontwerp vanuit de perspectief van de klant en laat ruimte voor eigen
            ideeën. Fijne samenwerking met oog voor service.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default AerialWork;
