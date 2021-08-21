import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useInView } from "react-intersection-observer";
// import "../../styles/styles.scss";
const MainSectionSix = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className={`main-section-six ${inView && "show"}`} id="doen-wij">
      <div className="services-container">
        <div className="services-intro">
          <div className="services-intro-text">
            <h3>Wat doen wij?</h3>
            <p>
              Wij helpen u in alle fasen van de realisatie van uw digitale
              project.Z
            </p>
          </div>

          <div className="detail-services-container" ref={ref}>
            <div className="detail-services-elm">
              <StaticImage
                src="../../images/services/strategy-img.png"
                alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
                width={40}
                height={40}
                loading="lazy"
              />
              <p>Strategie</p>
            </div>
            <div className="detail-services-elm">
              <StaticImage
                src="../../images/services/Design.png"
                alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
                width={40}
                height={40}
                loading="lazy"
              />
              <p>Ontwerp & branding</p>
            </div>
            <div className="detail-services-elm">
              <StaticImage
                src="../../images/services/Web-development.png"
                alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
                width={40}
                height={40}
                loading="lazy"
              />
              <p>Webontwikkeling</p>
            </div>
            <div className="detail-services-elm">
              <StaticImage
                src="../../images/services/Support.png"
                alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
                width={40}
                height={40}
                loading="lazy"
              />
              <p>Support & groei</p>
            </div>
          </div>
        </div>

        <div className="services">
          <div className={`services-strategy service`}>
            <h3 className="h2">
              Strategie<span id="number">1</span>
            </h3>
            <p>
              Alleen uw succes is ons succes. Wij leven ons in & verplaatsen ons
              volledig in uw(of de klant) en proberen vanuit dit perspectief mee
              te denken. We brengen quality time door met onze klanten om te
              ontdekken waar hun merk echt voor staat & ons te verdiepen in het
              bedrijf. Onze UX-designers analyseren de concurrentie en kijken
              hoe wij hun voor kunnen zijn.
            </p>
          </div>
          <div className={`services-design service`}>
            <h3 className="h2">
              Design<span id="number">2</span>
            </h3>
            <p>
              Wij geloven dat het ontwerp van een website de belangrijkste
              factor is bij het omzetten van bezoekers in klanten. Met een jong,
              fris & ambitieus team zijn wij op de hoogte van de laatste trends
              & ontwerpen wij de meest moderne websites & webshops. Met
              innovatieve ontwerpoplossingen zorgen we ervoor dat uw winkel uw
              klanten aanspreekt. We combineren design en digitale innovatie om
              emotie en verhalen te creëren.
            </p>
          </div>
          <div className={`services-development service`}>
            <h3 className="h2">
              Webontwikkeling <span id="number">3</span>
            </h3>
            <p>
              Onze focus ligt altijd op de bruikbaarheid,
              gebruiksvriendelijkheid en de prestaties van de winkels. Ons team
              brengt designs tot leven. Snel en geoptimaliseerd voor maximale
              conversie. We ontwikkelen voor het nu en bouwen voor de toekomst.
              . Met behulp van moderne technologieën bouwen we flexibele en
              schaalbare oplossingen.
            </p>
          </div>

          <div className={`services-support service`}>
            <h3 className="h2">
              Optimalisering & support<span id="number">4</span>
            </h3>

            <p>
              Heb je al een{" "}
              <span className="bold">bestaande Shopify store</span> en voel je
              je beperkt door je thema’s? Dan ben je bij ons op het juiste
              adres. Wij maken custom pagina’s en onderdelen voor jouw webshop.
              Voel je nooit beperkt! Wij zijn in staat om jouw digitale wensen
              tot vervulling laten komen. Neem contact met ons op dan kunnen we
              kijken wat wij voor je kunnen betekenen!
            </p>
            <p>
              Wij zijn ook gespecialiseerd in website snelheid optimalisatie.
              Bij het optimaliseren van de snelheid staan wij garant voor
              succes. Is de afgesproken snelheids score niet gehaald? = Geld
              terug
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSectionSix;
