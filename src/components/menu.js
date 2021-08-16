import React from "react";
import "../styles/styles.scss";
import Vector from "../assets/Vector.svg";
import '../styles/styles.scss'
const Menu = ({ open, toggleMenu }) => {
 
  return (
    <div className={`menu ${open ? "open" : "closed"}`}>
      <div className="menu-nav">
        <nav>
          <ul>
            <li>
              <a href="/" onClick={(e=>(toggleMenu(e,'home')))}>
                Home
              </a>
            </li>
            <li>
              <a href="/" onClick={(e=>(toggleMenu(e,'over-ons')))}>
                Over ons
              </a>
            </li>
            <li>
              <a href="/" onClick={(e=>(toggleMenu(e,'doen-wij')))}>
                Wat doen wij
              </a>
            </li>
            <li>
              <a href="/" onClick={(e=>(toggleMenu(e,'diensten-prijzen')))}>
                Diensten & prijzen
              </a>
            </li>
            <li>
              <a href="/contact/">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="menu-info">
        <div className="container-contact">
          <div className="container-info">
            <div>
              <h3>E-mail:</h3>{" "}
              <a href="mailto:info@laforga.nl">info@laforga.nl</a>
            </div>
            <div>
              <h3>Telefoonnummer:</h3>{" "}
              <a href="tel:+31232084022">+31 23 208 4022</a>
            </div>
            <div className="social-links">
              <h3>Social:</h3>
              <div>
                {" "}
                <a href="https://api.whatsapp.com/send?phone=+31628340312">
                  Whatsapp{" "}
                  <span>
                    <img
                      src={Vector}
                      alt="vector"
                      width="11"
                      height="13"
                       loading="lazy"
                    />
                  </span>
                </a>
                <a href="https://www.facebook.com/laforgaa/">
                  Facebook{" "}
                  <span>
                    {" "}
                    <img
                      src={Vector}
                      alt="vector"
                      width="11"
                      height="13"
                       loading="lazy"
                    />
                  </span>
                </a>
                <a href="https://www.instagram.com/laforga.agency/">
                  Instagram{" "}
                  <span>
                    <img
                      src={Vector}
                      alt="vector"
                      width="11"
                      height="13"
                       loading="lazy"
                    />
                  </span>
                </a>
                <a href="https://www.linkedin.com/company/laforga-agency">
                  LinkedIn{" "}
                  <span>
                    {" "}
                    <img
                      src={Vector}
                      alt="vector"
                      width="11"
                      height="13"
                       loading="lazy"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
