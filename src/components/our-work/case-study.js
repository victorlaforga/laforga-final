import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../../styles/styles.scss";
import ReactPlayer from "react-player/lazy";
import Video from "../../assets/maglashicc.mp4";

const StudyCase = () => {
  return (
    <div className="showcase maglashic">
      <a className="link-container" href="/">
        <div className="info">
          <h3>MagLashic</h3>
          <h1>Magnetische wimpers & eyeliners</h1>
          <p className="info-summary">
            Voor MagLashic leveren wij support aan deze bestaande Shopify Store.
            Wij hebben oa. gewerkt aan een custom winkelwagen. Uiteraard zijn
            hier apps voor, maar wij raden het altijd aan om zo min mogelijk
            apps te gebruiken omdat dit je webshop vertraagd! Ook zit er een
            Upsell functie in die voor conversieoptimalisatie zorgt!
          </p>
          <div className="type-of-work">
            <div>
              <p>Customization Store</p>{" "}
              <StaticImage
                src="../../images/services/brand.svg"
                alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
                loading="lazy"
                width={600}
                height={400}
              />
            </div>
            <div>
              <p>Design</p>{" "}
              <StaticImage
                src="../../images/services/brand.svg"
                alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
                loading="lazy"
                width={600}
                height={400}
              />
            </div>
            <div>
              <p>Support</p>{" "}
              <StaticImage
                src="../../images/services/brand.svg"
                alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
                loading="lazy"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
        <div className="media">
          <div className="video-container-work">
            <ReactPlayer
              playsinline
              className="video"
              autoPlay
              loop
              playing
              volume={0}
              muted
              url={Video}
            />
          </div>
          <a className="see-more" href="/">
            Bekijk meer
          </a>
        </div>
      </a>
    </div>
  );
};

export default StudyCase;
