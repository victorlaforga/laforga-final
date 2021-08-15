import  React from "react";
import { StaticImage } from "gatsby-plugin-image"
import ReactPlayer from "react-player/lazy";
import Video from "../../assets/aerial.mp4";

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
              <StaticImage
                src="../../images/services/brand.svg"
                alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
                width={600} height={400}
                 loading="lazy"
              />
            </div>
            <div>
              <p>Design</p>{" "}
              <StaticImage
                src="../../images/services/brand.svg"
                alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
                width={600} height={400}
                 loading="lazy"
              />
            </div>
            <div>
              <p>Branding</p>{" "}
              <StaticImage
                src="../../images/services/brand.svg"
                alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
                width={600} height={400}
                 loading="lazy"
              />
            </div>
            <div>
              <p>Development</p>{" "}
              <StaticImage
                src="../../images/services/brand.svg"
                alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
                width={600} height={400}
                 loading="lazy"
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

export default StudyCaseAerial;
