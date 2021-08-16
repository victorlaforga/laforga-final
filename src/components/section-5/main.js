import  React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { useInView } from "react-intersection-observer";
import '../../styles/styles.scss'
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
            <StaticImage
              src="../../images/clientsLogo/bankhoes discounter.png"
              class="logogrid__img"
              alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
              width={187} height={70}
               loading="lazy"
            />
          </li>
          <li class="logogrid__item">
            <StaticImage
              src="../../images/clientsLogo/maglashic.png"
              class="logogrid__img"
              alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
              width={200} height={50}
               loading="lazy"
            />
          </li>
          <li class="logogrid__item">
            <StaticImage
              src="../../images/clientsLogo/gigivitale.png"
              class="logogrid__img"
              alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
              width={200} height={41}
               loading="lazy"
            />
          </li>
          <li class="logogrid__item">
            <StaticImage
              src="../../images/clientsLogo/11-removebg-preview.png"
              class="logogrid__img"
              alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
              width={200} height={99}
               loading="lazy"
            />
          </li>
          <li class="logogrid__item">
            <StaticImage
              src="../../images/four-editors.png"
              class="logogrid__img"
              alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
              width={200} height={25}
               loading="lazy"
            />
          </li>
          <li class="logogrid__item">
            <StaticImage
              src="../../images/clientsLogo/faminci.png"
              class="logogrid__img"
              alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
              width={200} height={46}
               loading="lazy"
            />
          </li>
          <li class="logogrid__item">
            <StaticImage src="../../images/clientsLogo/logo_zwart.png" class="logogrid__img" alt="Nike" width={200} height={59}  loading="lazy" />
          </li>
          <li class="logogrid__item">
            <StaticImage src="../../images/clientsLogo/aerialaccess.png" class="logogrid__img" alt="Netflix"  width={157} height={67}  loading="lazy"/>
          </li>
        </ul>
      </div>
      <a className="contact-us-btn" href="/contact/">
        Contact ons
      </a>
    </div>
  );
};

export default MainSectionFive;
