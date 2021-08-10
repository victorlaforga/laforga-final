import * as React from "react";
import { useInView } from "react-intersection-observer";
import "../../styles/styles.scss";
import Client4 from "../../images/clientsLogo/11-removebg-preview.png";
import Client8 from "../../images/clientsLogo/aerialaccess.png";
import Client1 from "../../images/clientsLogo/bankhoes discounter.png";
import Client5 from "../../images/four-editors.png";
import Client6 from "../../images/clientsLogo/faminci.png";
import Client3 from "../../images/clientsLogo/gigivitale.png";
import Client7 from "../../images/clientsLogo/logo_zwart.png";
import Client2 from "../../images/clientsLogo/maglashic.png";

const MainSectionFive = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className={`main-section-five ${inView && "show"}`}>
      <h2>
        <mark>Vertrouwd</mark> door:
      </h2>
      <div class={`container-clients`} ref={ref}>
        <ul className={`logogrid`}>
          <li class="logogrid__item">
            <img
              src={Client1}
              class="logogrid__img"
              alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
            />
          </li>
          <li class="logogrid__item">
            <img
              src={Client2}
              class="logogrid__img"
              alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
            />
          </li>
          <li class="logogrid__item">
            <img
              src={Client3}
              class="logogrid__img"
              alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
            />
          </li>
          <li class="logogrid__item">
            <img
              src={Client4}
              class="logogrid__img"
              alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
            />
          </li>
          <li class="logogrid__item">
            <img
              src={Client5}
              class="logogrid__img"
              alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
            />
          </li>
          <li class="logogrid__item">
            <img
              src={Client6}
              class="logogrid__img"
              alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
            />
          </li>
          <li class="logogrid__item">
            <img src={Client7} class="logogrid__img" alt="Nike" />
          </li>
          <li class="logogrid__item">
            <img src={Client8} class="logogrid__img" alt="Netflix" />
          </li>
        </ul>
      </div>
      <a className="contact-us-btn" href="/">
        Contact ons
      </a>
    </div>
  );
};

export default MainSectionFive;
