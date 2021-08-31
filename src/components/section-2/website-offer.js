import React from "react";
import { useInView } from "react-intersection-observer";
import useDeviceDetect from "../../hooks/useDeviceDetect";

const WebsiteOffer = ({ lang }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const { isMobile } = useDeviceDetect();
  const [on, setOn] = React.useState(false);
  const toggle = () => {
    setOn(!on);
  };
  if (!lang) {
    return (
      <>
        {!isMobile ? (
          <div
            className={`website-offer-container  ${inView && "show"}`}
            ref={ref}
          >
            <span className="h3">website nodig?</span>

            <p>
              Wij zijn digitale bouwmeesters. In dit digitale tijdperk is het
              belangrijk om als bedrijf of ZZP’er een online uithangbord te
              hebben. Wij zijn niet alleen gespecialiseerd in webshops, maar ook
              in websites. Wij geloven in het produceren van creatieve producten
              die harten veroveren, geesten inspireren en zakelijke resultaten
              opleveren. Hierbij ontwerpen wij specifiek gericht op de behoeftes
              van jouw bedrijf. Hierdoor krijg je een geoptimaliseerde website die
              jouw bedrijf uitstraalt.{" "}
            </p>
            <a href="/aanvraag/">Start project</a>
          </div>
        ) : (
          <div
            className={`website-offer-container  ${inView && "show"} `}
            ref={ref}
          >
            <div onClick={toggle} onKeyDown={toggle} aria-hidden="true">
              <h3>Website nodig? {on ? <span>-</span> : <span>+</span>}</h3>
            </div>
            <div className={on ? " showing" : "Question__response "}>
              <p className=" ">
                Wij zijn digitale bouwmeesters. In dit digitale tijdperk is het
                belangrijk om als bedrijf of ZZP’er een online uithangbord te
                hebben. Wij zijn niet alleen gespecialiseerd in webshops, maar
                ook in websites. Wij geloven in het produceren van creatieve
                producten die harten veroveren, geesten inspireren en zakelijke
                resultaten opleveren. Hierbij ontwerpen wij specifiek gericht op
                de behoeftes van jouw bedrijf. Hierdoor krijg je een
                geoptimaliseerde website die jouw bedrijf uitstraalt.{" "}
              </p>
              <a href="/">Start project</a>
            </div>
          </div>
        )}
      </>
    );
  } else {
    return (
      <>
        {!isMobile ? (
          <div
            className={`website-offer-container  ${inView && "show"}`}
            ref={ref}
          >
            <span className="h3">Need a website?</span>

            <p>
            We are digital master builders. In this digital age, it is
                important for a company, or self-employed person to have an
                online presence. We are not only specialized in webshops, but also
                in websites. We believe in producing creative products that
                capture hearts, inspire minds and deliver optimal business results. We create
                designs specifically aimed towards the needs of your company. This
                will provide you with an optimized website that reflects the mission your company.{" "}
            </p>
            <a href="/aanvraag/">Start project</a>
          </div>
        ) : (
          <div
            className={`website-offer-container  ${inView && "show"} `}
            ref={ref}
          >
            <div onClick={toggle} onKeyDown={toggle} aria-hidden="true">
              <h3> Need a website? {on ? <span>-</span> : <span>+</span>}</h3>
            </div>
            <div className={on ? " showing" : "Question__response "}>
              <p className=" ">
                We are digital master builders. In this digital age, it is
                important for a company, or self-employed person to have an
                online presence. We are not only specialized in webshops, but also
                in websites. We believe in producing creative products that
                capture hearts, inspire minds and deliver optimal business results. We create
                designs specifically aimed towards the needs of your company. This
                will provide you with an optimized website that reflects the mission your company.{" "}
              </p>
              <a href="/">Start project</a>
            </div>
          </div>
        )}
      </>
    );
  }
};
export default WebsiteOffer;
