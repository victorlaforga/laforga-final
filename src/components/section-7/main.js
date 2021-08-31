import React from "react";
import { useInView } from "react-intersection-observer";
import heart from "../../images/akar-icons_heart.png";
// import "../../styles/styles.scss";
const MainSectionSeven = ({ lang }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  if (!lang) {
    return (
      <div
        className={`main-section-seven ${inView && "show"}`}
        id="diensten-prijzen"
      >
        <div className="intro-services">
          <h3 className="h2">Onze diensten</h3>
          <p>
            Wij houden van transparantie en eerlijkheid. Vandaar dat wij open
            zijn over onze prijzen en diensten. Het bereiken van je volledige
            potentie zou je niet in de min moeten zetten. Heb je specifieke
            vragen? Neem{" "}
            <a href="/contact/" className="underline">
              contact
            </a>{" "}
            met ons op
          </p>
        </div>
        <div className="services" ref={ref}>
          <div className={`container-services ${inView && "show"}`}>
            <div className="container-services--name">
              <h3>Standaard</h3>
              <div className="starters">
                <span>
                  <img
                    src={heart}
                    alt="heart"
                    width={14}
                    height={14}
                    loading="lazy"
                  />
                </span>
                <p>Aanbevolen voor starters</p>
              </div>
            </div>
            <ul>
              <li>Ultra moderne webshop</li>
              <li>Nieuwe huisstijl op basis van een analyse</li>
              <li>Responsive design, op alle schermen goed werkbaar!</li>
              <li>Binnen 10 dagen live!</li>
            </ul>
            <div className="container-services--footer">
              <a href="/aanvraag/">Vraag offerte aan</a>
              <div className="pricing">
                <span className="h4">vanaf €999</span>
                <p>* alle prijzen zijn exclusief btw</p>
              </div>
            </div>
          </div>
          <div className={`container-services ${inView && "show"}`}>
            <div className="container-services--name">
              <h3>Extra</h3>
            </div>
            <ul>
              <li>Ultra moderne webshop</li>
              <li>Nieuwe huisstijl op basis van een analyse</li>
              <li>Responsive design, op alle schermen goed werkbaar!</li>
              <li>1-3 exclusieve & op maat ontworpen pagina's</li>
            </ul>
            <div className="container-services--footer">
              <a href="/aanvraag/">Vraag offerte aan</a>
              <div className="pricing">
                <span className="h4">vanaf €1999</span>
                <p>* alle prijzen zijn exclusief btw</p>
              </div>
            </div>
          </div>
          <div className={`container-services ${inView && "show"}`}>
            <div className="container-services--name">
              <h3>Premium</h3>
            </div>
            <ul>
              <li>Gehele webshop op maat ontworpen</li>
              <li>Wereldwijde concurrenten analyse</li>
              <li>Exclusief ontwerp!</li>
              <li>Geoptimaliseerde webshop</li>
              <li>Gebouwd & ontwporpen speciaal voor je bedrijf</li>
            </ul>
            <div className="container-services--footer">
              <a href="/aanvraag/">Vraag offerte aan</a>
              <div className="pricing">
                <span className="h4">vanaf €4999</span>
                <p>* alle prijzen zijn exclusief btw</p>
              </div>
            </div>
          </div>
          <div
            id="support"
            className={`container-services support ${inView && "show"}`}
          >
            <div className="container-services--name">
              <h3>Support</h3>
            </div>
            <p>
              Heb je al een bestaande Shopify store en voel je je beperkt door
              je thema’s? Dan ben je bij ons op het juiste adres. Wij maken
              custom pagina’s en onderdelen voor jouw webshop. Voel je nooit
              beperkt! Wij zijn in staat om jouw digitale wensen tot vervulling
              laten komen. Neem contact met ons op dan kunnen we kijken wat wij
              voor je kunnen betekenen!
            </p>
            <p>
              Wij zijn ook gespecialiseerd in website snelheid optimalisatie.
              Bij het optimaliseren van de snelheid staan wij garant voor
              succes. Is de afgesproken snelheids score niet behaald? = Geld
              terug
            </p>
            <div className="container-services--footer">
              <a href="/contact/">Neem contact op</a>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`main-section-seven ${inView && "show"}`}
        id="diensten-prijzen"
      >
        <div className="intro-services">
          <h3 className="h2">Our services</h3>
          <p>
            We love transparency and honesty. That is why we are open about our
            prices and services. Reaching your full potential shouldn't make you
            bankrupt. Do you have specific questions? {""}
            <a href="/en/contact/" className="underline">
              Contact
            </a>{" "}
            {""}
            us
          </p>
        </div>
        <div className="services" ref={ref}>
          <div className={`container-services ${inView && "show"}`}>
            <div className="container-services--name">
              <h3>Default</h3>
              <div className="starters">
                <span>
                  <img
                    src={heart}
                    alt="heart"
                    width={14}
                    height={14}
                    loading="lazy"
                  />
                </span>
                <p>Recommended for starters</p>
              </div>
            </div>
            <ul>
              <li>Ultra modern webshop</li>
              <li>New house style based on an analysis</li>
              <li>Responsive design, works well on all screens!</li>
              <li>Live within 10 days!</li>
            </ul>
            <div className="container-services--footer">
              <a href="/en/aanvraag/">Request quote</a>
              <div className="pricing">
                <span className="h4">from €999</span>
                <p>* all prices are exclusive of VAT</p>
              </div>
            </div>
          </div>
          <div className={`container-services ${inView && "show"}`}>
            <div className="container-services--name">
              <h3>Tools</h3>
            </div>
            <ul>
              <li>Ultra modern webshop</li>
              <li>New house style based on an analysis</li>
              <li>Responsive design, works well on all screens!</li>
              <li>1-3 exclusive & custom designed pages </li>
            </ul>
            <div className="container-services--footer">
              <a href="/en/aanvraag/">Request quote</a>
              <div className="pricing">
                <span className="h4">from €1999</span>
                <p>* all prices are exclusive of VAT</p>
              </div>
            </div>
          </div>
          <div className={`container-services ${inView && "show"}`}>
            <div className="container-services--name">
              <h3>Premium</h3>
            </div>
            <ul>
              <li>Entire webshop custom designed</li>
              <li>Global competitor analysis</li>
              <li>Exclusive design!</li>
              <li>Optimized webshop</li>
              <li>Built & designed especially for your company </li>
            </ul>
            <div className="container-services--footer">
              <a href="/en/aanvraag/">Request a quote</a>
              <div className="pricing">
                <span className="h4">from €4999</span>
                <p>* all prices are exclusive of VAT</p>
              </div>
            </div>
          </div>
          <div
            id="support"
            className={`container-services support ${inView && "show"}`}
          >
            <div className="container-services--name">
              <h3>Support</h3>
            </div>
            <p>
              Already have an existing Shopify store and feel limited by your
              themes? Then you have come to the right place with us. We make
              custom pages and parts for your webshop. Never feel limited! We
              are able to fulfill your digital wishes .
            </p>
            <p>
              We also specialize in website speed optimization. We guarantee
              success by optimizing the speed . Has the agreed speed score not
              been achieved? = Money Back
            </p>
            <div className="container-services--footer">
              <a href="/en/contact/">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MainSectionSeven;
