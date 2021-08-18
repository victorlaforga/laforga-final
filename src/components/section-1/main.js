import  React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { AccessContext } from "../../contexts/access";
import lottieJson from "../../assets/laforga-newLottie.json";
import '../../styles/styles.scss' ;

// import helmet
import { Helmet } from "react-helmet" ;

const MainSection = () => {
  const [isFirstAccess] = React.useContext(AccessContext);

  return (
    <div className="main-section">
    
    // add helmet for schema
      <Helmet>
        <script type='application/ld+json'> 
              {
                "@context": "http://www.schema.org",
                "@type": "LocalBusiness",
                "name": "Lafora",
                "url": "https://www.laforga.nl",
                "logo": "https://www.laforga.nl/static/black-logo-bb711faf29ccbee53ac9728e857a94f3.png",
                "description": "Wij maken het gemakkelijk om uw producten online te verkopen. Online zichtbaarheid is nog nooit zo belangrijk geweest. laforga helpt u in alle fasen van de realisatie van uw digitaal project.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Batavierenplantsoen 17, 2025CJ Haarlem",
                  "addressLocality": "Haarlem",
                  "addressRegion": "Amsterdam",
                  "postalCode": "2025CJ",
                  "addressCountry": "Netherland"
                },
                "openingHours": "Mo, Tu, We, Th, Fr, Sa, Su -",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+31 23208 4022",
                  "contactType": "E-mail: info@laforga.nl"
                }
              }
         </script>
      </Helmet>
      <Player
        autoplay={true}
        play
        loop
        speed="3"
        background="transparent"
        src={lottieJson}
      >
        {" "}
      </Player>
      <div className={`intro-text ${isFirstAccess && "intro-text-animated"}`}>
        <h1>
          Wij zetten <br /> merken & bedrijven <br /> <mark>om</mark>
          {" "}<mark>  in legendes </mark>
          <mark>op het web.</mark>
        </h1>
        <p>
          wees de concurrentie voor en creëer samen met ons een{" "}
          <br className="hide-media" />
          <mark>echte digitale ervaring.</mark>
        </p>
      </div>
    </div>
  );
};

export default MainSection;
