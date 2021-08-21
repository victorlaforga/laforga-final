import React from "react";
// import "../../styles/styles.scss";
import ReactPlayer from "react-player/lazy";
import Video from "../../assets/maneti dashboard.mp4";

const StudyCaseManeti = () => {
  return (
    <div className="showcase maneti">
      <a className="link-container" href="/">
        <div className="info">
          <h3>Maneti</h3>
          <h1>Magnetische telefoonhouders</h1>
          <p className="info-summary">
            Voor T&M Tweewielers hebben wij de gehele webshop & branding
            gemaakt, van logo tot aan de product pagina. Het hele pakket.
          </p>
          <div className="type-of-work">
            <div>
              <p>Shopify Store</p>{" "}
              <img
                src="../../images/services/brand.svg"
                alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
                loading="lazy"
                width="600"
                height="400"
              />
            </div>
            <div>
              <p>Design</p>{" "}
              <img
                src="../../images/services/brand.svg"
                alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
                loading="lazy"
                width="600"
                height="400"
              />
            </div>
            <div>
              <p>Branding</p>{" "}
              <img
                src="../../images/services/brand.svg"
                alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
                loading="lazy"
                width="600"
                height="400"
              />
            </div>
            <div>
              <p>Development</p>{" "}
              <img
                src="../../images/services/brand.svg"
                alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
                loading="lazy"
                width="600"
                height="400"
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
              loop={true}
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

export default StudyCaseManeti;
