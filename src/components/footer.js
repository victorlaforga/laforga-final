import  React from "react";
import { StaticImage } from "gatsby-plugin-image"
import "../styles/styles.scss";

const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={3}
                fill="rgba(19,67,84,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={5}
                fill="rgba(19,67,84,0.3)"
              />
              <use
                xlinkHref="#gentle-wave"
                x={60}
                y={3}
                fill="rgba(19, 67, 84, 1)"
              />
            </g>
          </svg>
        </div>
        <div className="footer__content">
          <div className="first__content">
            <div className="row footer__title">
              <h2>LATEN WE IETS GEWELDIGS CREËREN</h2>
            </div>
            <div className="row info">
              <div className="footer__email">
                <h3>E-mail:</h3>
                <a href="mailto:info@laforga.nl">info@laforga.nl</a>
              </div>
              <div className="footer__tel">
                <h3>Telefoonnummer</h3>{" "}
                <a href="tel:+31232084022">+31 23 208 4022</a> <br />
                <br />
                <a href="https://api.whatsapp.com/send?phone=+31628340312">
                  Whatsapp: +31628340312
                </a>
              </div>
              <div className="social-links">
                <h3>Social</h3>
                <div className="social__items">
                  <a href="https://api.whatsapp.com/send?phone=+31628340312">
                    Whatsapp{" "}
                    <span>
                      <StaticImage src="../assets/Vector.svg" alt="vector" width={11} height={13}  loading="lazy" />
                    </span>
                  </a>
                  <a href="https://www.instagram.com/laforga.agency/">
                    Instagram{" "}
                    <span>
                      <StaticImage src="../assets/Vector.svg" alt="vector" width={11} height={13}  loading="lazy" />
                    </span>
                  </a>
                  <a href="https://www.facebook.com/laforgaa/">
                    Facebook{" "}
                    <span>
                      <StaticImage src="../assets/Vector.svg" alt="vector" width={11} height={13}  loading="lazy" />
                    </span>
                  </a>
                  <a href="https://www.linkedin.com/company/laforga-agency">
                    LinkedIn{" "}
                    <span>
                      <StaticImage src="../assets/Vector.svg" alt="vector" width={11} height={13}  loading="lazy" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p>@2021 Laforga - Alle rechten voorbehouden</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
