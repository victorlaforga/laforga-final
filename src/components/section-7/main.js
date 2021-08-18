import  React from "react";
import { useInView } from "react-intersection-observer";
import heart from "../../images/akar-icons_heart.png"
import '../../styles/styles.scss'
const MainSectionSeven = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div
      className={`main-section-seven ${inView && "show"}`}
      id="diensten-prijzen"
    >
      <div className="intro-services">
        <h2>Onze diensten</h2>
        <p>
          Wij houden van transparantie en eerlijkheid. Vandaar dat wij open zijn
          over onze prijzen en diensten. Het bereiken van je volledige potentie
          zou je niet in de min moeten zetten. Heb je specifieke vragen? Neem{" "}
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
            <div>
              <span>
                <img src={heart} alt="heart" width={14} height={14}  loading="lazy"/>
              </span>
              Aanbevolen voor starters
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
              <h4>vanaf €999</h4>
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
              <h4>vanaf €1999</h4>
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
            <li>Gebouwd & ontwporpen speciaal voor uw bedrijf</li>
          </ul>
          <div className="container-services--footer">
            <a href="/aanvraag/">Vraag offerte aan</a>
            <div className="pricing">
              <h4>vanaf €4999</h4>
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
            Heb je al een bestaande Shopify store en voel je je beperkt door je
            thema’s? Dan ben je bij ons op het juiste adres. Wij maken custom
            pagina’s en onderdelen voor jouw webshop. Voel je nooit beperkt! Wij
            zijn in staat om jouw digitale wensen tot vervulling laten komen.
            Neem contact met ons op dan kunnen we kijken wat wij voor je kunnen
            betekenen!
          </p>
          <p>
            Wij zijn ook gespecialiseerd in website snelheid optimalisatie. Bij
            het optimaliseren van de snelheid staan wij garant voor succes. Is
            de afgesproken snelheids score niet behaald? = Geld terug
          </p>
          <div className="container-services--footer">
            <a href="/contact/">Neem contact op</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSectionSeven;
