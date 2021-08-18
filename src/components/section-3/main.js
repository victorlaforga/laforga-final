import  React from "react";
import { useInView } from "react-intersection-observer";
import ReactPlayer from "react-player/lazy";
import Video from "../../assets/maneti-dashboard-final.mp4";
import shopify from "../../images/shopify-partner.png"
import '../../styles/styles.scss'
const MainSectionThree = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className="main-section-three" ref={ref}>
      <div className={`main-section-three--content ${inView && "show"}`}>
        <h2>
          Waarom <mark>shopify</mark> <mark>voor webshops?</mark>
        </h2>
        <p>
          Shopify is het meest schaalbare, veelzijdige en snelstgroeiende
          e-commerceplatform. Shopify wordt vertrouwd door toonaangevende merken
          en is een betrouwbare en veilige e-commerceoplossing voor bedrijven
          van elke omvang.
        </p>{" "}
        <br />{" "}
        <p>
          Wij zijn officiele partners met Shopify met een team van Shopify & design experts!
        </p>{" "}
        <br />{" "}
        <p>
          Daarnaaast is Shopfy onztettend makkelijk om te gebruiken &
          gebruiksvriendelijk. Binnen een paar clicks heb je al een product
          toegevoegd! Shopify is grenzenloos, verkoop dus ook in het buitenland.
        </p>{" "}
        
        <br />{" "}
        <p>
          Bij al onze{" "}
          <a className="cool-link underline" href="#diensten-prijzen">
            diensten
          </a>{" "}
          krijg je een gratis Shopify cursus waarin wij in een uur tijd alles
          uitleggen wat je moet weten!
        </p>
      </div>
      <div id="video-container">
        <ReactPlayer
          playsinline
          autoPlay
          loop={true}
          playing
          volume={0}
          muted
          url={Video}
        />
        <img
          id="shopify-img-logo"
          className={`${inView && "show"}shopify-partner-img`}
          src={shopify}
          alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
          width="100%" height="50"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default MainSectionThree;
