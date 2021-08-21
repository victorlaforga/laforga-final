import { StaticImage } from "gatsby-plugin-image";
import React from "react";
// import "../styles/styles.scss";
const Menu = ({ open, toggleMenu }) => {
  const navigate = (e, id) => {
    e && e.preventDefault(); // to avoid the link from redirecting
    const elementToView = document.getElementById(id);
    elementToView.scrollIntoView();
  };

  return (
    <div className={`menu ${open ? "open" : "closed"}`}>
      <div className="menu-nav">
        <nav
          itemscope="itemscope"
          itemtype="http://www.schema.org/SiteNavigationElement"
        >
          <ul>
            <li itemprop="hasPart">
              <a itemprop="url" href="/" onClick={(e) => toggleMenu(e, "home")}>
                <span itemprop="name">Home</span>
              </a>
            </li>
            <li itemprop="hasPart">
              <a
                itemprop="url"
                href="/"
                onClick={(e) => toggleMenu(e, "doen-wij")}
              >
                <span itemprop="name">Wat doen wij</span>
              </a>
            </li>
            <li itemprop="hasPart">
              <a
                itemprop="url"
                href="/"
                onClick={(e) => toggleMenu(e, "ons-werk")}
              >
                <span itemprop="name">Wat doen wij</span>
              </a>
            </li>
            <li itemprop="hasPart">
              <a
                itemprop="url"
                href="/"
                onClick={(e) => toggleMenu(e, "diensten-prijzen")}
              >
                <span itemprop="name">Wat doen wij</span>
              </a>
            </li>
            <li itemprop="hasPart">
              <a itemprop="url" href="/contact/">
                <span itemprop="name">Wat doen wij</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="menu-info">
        <div className="container-contact">
          <div className="container-info">
            <div>
              <span className="h3">E-mail:</span>{" "}
              <a href="mailto:info@laforga.nl">info@laforga.nl</a>
            </div>
            <div>
              <span className="h3">Telefoonnummer:</span>{" "}
              <a href="tel:+31232084022">+31 23 208 4022</a>
            </div>
            <div className="social-links">
              <span className="h3">Social:</span>
              <div>
                {" "}
                <a href="https://api.whatsapp.com/send?phone=+31628340312">
                  Whatsapp{" "}
                  <span>
                    <StaticImage
                      src="../assets/Vector.svg"
                      alt="vector"
                      width={20}
                      height={20}
                      loading="lazy"
                    />
                  </span>
                </a>
                <a href="https://www.facebook.com/laforgaa/">
                  Facebook{" "}
                  <span>
                    {" "}
                    <StaticImage
                      src="../assets/Vector.svg"
                      alt="vector"
                      width={20}
                      height={20}
                      loading="lazy"
                    />
                  </span>
                </a>
                <a href="https://www.instagram.com/laforga.agency/">
                  Instagram{" "}
                  <span>
                    <StaticImage
                      src="../assets/Vector.svg"
                      alt="vector"
                      width={20}
                      height={20}
                      loading="lazy"
                    />
                  </span>
                </a>
                <a href="https://www.linkedin.com/company/laforga-agency">
                  LinkedIn{" "}
                  <span>
                    {" "}
                    <StaticImage
                      src="../assets/Vector.svg"
                      alt="vector"
                      width={20}
                      height={20}
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
