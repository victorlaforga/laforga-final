import * as React from "react";
import "../../styles/styles.scss";
import ReactPlayer from "react-player";
import Video from "../../assets/aerial.mp4";
import BrandingIcon from "../../images/services/brand.svg";

const StudyCaseAerial = () => {
  return (
    <div className="showcase aerial">
      <a className="link-container" href="/">
        <div className="info">
          <h3>Aerial Access</h3>
          <h1>Werken op hoogte</h1>
          <p className="info-summary">
            Voor Aerial Access hebben wij de gehele website vanuit scratch
            gebouwd. We hebben samen gewerkt met{" "}
            <a href="http://www.studiomarinade.nl/">Studio Marinade</a>. Zij
            hebben gezorgd voor het ontwerp en wij voor het development van dit
            project.
          </p>
          <div className="type-of-work">
            <div>
              <p>Shopify Store</p>{" "}
              <img
                src={BrandingIcon}
                alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
              />
            </div>
            <div>
              <p>Design</p>{" "}
              <img
                src={BrandingIcon}
                alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
              />
            </div>
            <div>
              <p>Branding</p>{" "}
              <img
                src={BrandingIcon}
                alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
              />
            </div>
            <div>
              <p>Development</p>{" "}
              <img
                src={BrandingIcon}
                alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
              />
            </div>
          </div>
        </div>
        <div className="media">
          <div className="video-container-work">
            <ReactPlayer
              playsinline="true"
              className="video"
              autoPlay
              loop={true}
              playing="true"
              volume="0"
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

export default StudyCaseAerial;
