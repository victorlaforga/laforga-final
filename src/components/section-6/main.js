import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useInView } from "react-intersection-observer";
// import "../../styles/styles.scss";
const MainSectionSix = ({ lang }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  if (!lang) {
    return (
      <div className={`main-section-six ${inView && "show"}`} id="doen-wij">
        <div className="services-container">
          <div className="services-intro">
            <div className="services-intro-text">
              <h3>Wat doen wij?</h3>
              <p>
                Wij helpen u in alle fasen van de realisatie van uw digitale
                project.
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
                Alleen uw succes is ons succes. Wij leven ons in & verplaatsen
                ons volledig in de klant, en proberen vanuit dit perspectief mee
                te denken. We brengen quality time door met onze klanten om te
                ontdekken waar hun merk echt voor staat & ons te verdiepen in
                het bedrijf. Onze UX-designers analyseren de concurrentie en
                kijken hoe wij hun voor kunnen zijn.
              </p>
            </div>
            <div className={`services-design service`}>
              <h3 className="h2">
                Design<span id="number">2</span>
              </h3>
              <p>
                Wij geloven dat het ontwerp van een website de belangrijkste
                factor is bij het omzetten van bezoekers in klanten. Met een
                jong, fris & ambitieus team zijn wij op de hoogte van de laatste
                trends & ontwerpen wij de meest moderne websites & webshops. Met
                innovatieve ontwerpoplossingen zorgen we ervoor dat uw winkel uw
                klanten aanspreekt. We combineren design en digitale innovatie
                om emotie en verhalen te creëren.
              </p>
            </div>
            <div className={`services-development service`}>
              <h3 className="h2">
                Webontwikkeling <span id="number">3</span>
              </h3>
              <p>
                Onze focus ligt altijd op de bruikbaarheid,
                gebruiksvriendelijkheid en de prestaties van de winkels. Ons
                team brengt designs tot leven. Snel en geoptimaliseerd voor
                maximale conversie. We ontwikkelen voor het nu en bouwen voor de
                toekomst. . Met behulp van moderne technologieën bouwen we
                flexibele en schaalbare oplossingen.
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
                adres. Wij maken custom pagina’s en onderdelen voor jouw
                webshop. Voel je nooit beperkt! Wij zijn in staat om jouw
                digitale wensen tot vervulling laten komen. Neem contact met ons
                op dan kunnen we kijken wat wij voor je kunnen betekenen!
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
  } else {
    return (
      <div className={`main-section-six ${inView && "show"}`} id="doen-wij">
        <div className="services-container">
          <div className="services-intro">
            <div className="services-intro-text">
              <h3>What do we do?</h3>
              <p>
                We help you in all phases of the realization of your digital
                project.
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
                <p>Strategy</p>
              </div>
              <div className="detail-services-elm">
                <StaticImage
                  src="../../images/services/Design.png"
                  alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
                  width={40}
                  height={40}
                  loading="lazy"
                />
                <p>Design & branding</p>
              </div>
              <div className="detail-services-elm">
                <StaticImage
                  src="../../images/services/Web-development.png"
                  alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
                  width={40}
                  height={40}
                  loading="lazy"
                />
                <p>Web development</p>
              </div>
              <div className="detail-services-elm">
                <StaticImage
                  src="../../images/services/Support.png"
                  alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
                  width={40}
                  height={40}
                  loading="lazy"
                />
                <p>Support & growth</p>
              </div>
            </div>
          </div>

          <div className="services">
            <div className={`services-strategy service`}>
              <h3 className="h2">
                Strategy<span id="number">1</span>
              </h3>
              <p>
                Only your success is our success. We empathize & put ourselves
                completely in the customer's shoes, and try to think along from
                this perspective . We spend quality time with our clients to
                discover what their brand really stands for & delve into the
                company. Our UX designers analyze the competition and see how we
                can get ahead of them.
              </p>
            </div>
            <div className={`services-design service`}>
              <h3 className="h2">
                Design<span id="number">2</span>
              </h3>
              <p>
                We believe that website design is the most important factor in
                converting visitors into customers. With a young, fresh &
                ambitious team we are aware of the latest trends & we design the
                most modern websites & webshops. With innovative design
                solutions, we ensure that your store appeals to your customers.
                We combine design and digital innovation to create emotion and
                stories.
              </p>
            </div>
            <div className={`services-development service`}>
              <h3 className="h2">
                Web Development <span id="number">3</span>
              </h3>
              <p>
                Our focus is always on usability, usability and store
                performance. Our team brings designs to life. Fast and optimized
                for maximum conversion. We develop for the present and build for
                the future. . We build flexible and scalable solutions using
                modern technologies .
              </p>
            </div>

            <div className={`services-support service`}>
              <h3 className="h2">
                Optimization & support<span id="number">4</span>
              </h3>

              <p>
                Already have a{" "}
                <span className="bold">existing Shopify store</span> and feel
                limited by your themes? Then you have come to the right place
                with us . We make custom pages and parts for your webshop. Never
                feel limited! We are able to fulfill your digital wishes .
                Contact us and we can see what we can do for you!
              </p>
              <p>
                We also specialize in website speed optimization. When
                optimizing the speed, we guarantee good luck. Has the agreed
                speed score not been achieved? = Money back
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MainSectionSix;
