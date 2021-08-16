import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import Slider from "react-slick";;
const LeftArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
      onKeyDown={onClick}
      aria-hidden="true"
    >
      <svg
        width="16"
        height="30"
        viewBox="0 0 16 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.9998 1.6665L1.6665 14.9998L14.9998 28.3332"
          stroke="#134354"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

const RightArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
      onKeyDown={onClick}
      aria-hidden="true"
    >
      <svg 
        width="16"
        height="30"
        viewBox="0 0 16 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.00016 28.3335L14.3335 15.0002L1.00016 1.66683"
          stroke="#134354"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  passive: true,
  nextArrow: <RightArrow />,
  prevArrow: <LeftArrow />,
};

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <Slider {...settings}>
        <div className="slider__item">
          <StaticImage
            src='../../assets/aerialaccess.png'
            alt="aerial access"
            width={165}
            height={70}
             loading="lazy"
          />
          <h2>Aerial Access</h2>
          <p>
            “Enthousiaste agency met inzicht. Heeft voor Aerial Access een mooie
            site ontworpen die volledig voldeed aan onze eisen. Denkt mee met
            ontwerp vanuit de perspectief van de klant en laat ruimte voor eigen
            ideeën. Fijne samenwerking met oog voor service."
          </p>
        </div>
        <div className="slider__item">
          <StaticImage src='../../images/four-editors.png' alt="four editors" width={200} height={25}  loading="lazy" />
          <h2>Four Editors</h2>
          <p>
            “Erg goed geholpen door Laforga. We zaten met wat problemen op de
            website, en dit werd direct opgelost. Altijd beschikbaar, snel en
            kwalitatief. Thanks!"
          </p>
        </div>
        <div className="slider__item">
          <StaticImage src="../../images/clientsLogo/maglashic.png" alt="maglashic" width={200} height={50}  loading="lazy" />
          <h2>Maglashic</h2>
          <p>
            “Enthousiaste agency met inzicht. Heeft voor Aerial Access een mooie
            site ontworpen die volledig voldeed aan onze eisen. Denkt mee met
            ontwerp vanuit de perspectief van de klant en laat ruimte voor eigen
            ideeën. Fijne samenwerking met oog voor service. – Aerial Access’’
          </p>
        </div>
        <div className="slider__item">
          <StaticImage
            src='../../assets/aerialaccess.png'
            alt="aerial access"
            width={165}
            height={70}
             loading="lazy"
          />
          <h2>Bedrijfsnaam</h2>
          <p>
            “Enthousiaste agency met inzicht. Heeft voor Aerial Access een mooie
            site ontworpen die volledig voldeed aan onze eisen. Denkt mee met
            ontwerp vanuit de perspectief van de klant en laat ruimte voor eigen
            ideeën. Fijne samenwerking met oog voor service. – Aerial Access’’
          </p>
        </div>
        <div className="slider__item">
          <StaticImage
            src='../../assets/aerialaccess.png'
            alt="aerial access"
            width={165}
            height={70}
             loading="lazy"
          />
          <h2>Bedrijfsnaam</h2>
          <p>
            “Enthousiaste agency met inzicht. Heeft voor Aerial Access een mooie
            site ontworpen die volledig voldeed aan onze eisen. Denkt mee met
            ontwerp vanuit de perspectief van de klant en laat ruimte voor eigen
            ideeën. Fijne samenwerking met oog voor service. – Aerial Access’’
          </p>
        </div>
      </Slider>
    </section>
  );
};

export default TestimonialSection;
