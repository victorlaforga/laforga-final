import React from "react";
import { useInView } from "react-intersection-observer";
import useDeviceDetect from "../../hooks/useDeviceDetect";

const WebsiteOffer = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const { isMobile } = useDeviceDetect();
  const [on, setOn] = React.useState(false);
  const toggle = () => {
    setOn(!on);
  };
  return (
    <>
      {!isMobile ? (
        <div
          className={`website-offer-container  ${inView && "show"}`}
          ref={ref}
        >
          <h3>Geen webshop maar een website nodig?</h3>

          <p>
            Wij zijn digitale bouwmeesters. In dit digitale tijdperk is het
            belangrijk om als bedrijf of ZZP’er een online uithangbord te
            hebben. Wij zijn niet alleen gespecialiseerd in webshops, maar ook
            in websites. Wij geloven in het produceren van creatieve producten
            die harten veroveren, geesten inspireren en zakelijke resultaten
            opleveren. Hierbij ontwerpen wij specifiek gericht op de behoeftes
            van uw bedrijf. Hierdoor krijg je een geoptimaliseerde website die
            uw bedrijf uitstraalt.{" "}
          </p>
          <a href="/">Start project</a>
        </div>
      ) : (
        <div
          className={`website-offer-container  ${inView && "show"} `}
          ref={ref}
        >
          <div onClick={toggle} onKeyDown={toggle} aria-hidden="true">
            <h3>
              Geen webshop maar een website nodig?{" "}
              {on ? <span>-</span> : <span>+</span>}
            </h3>
          </div>
          <div className={on ? " showing" : "Question__response "}>
            <p className=" ">
              Wij zijn digitale bouwmeesters. In dit digitale tijdperk is het
              belangrijk om als bedrijf of ZZP’er een online uithangbord te
              hebben. Wij zijn niet alleen gespecialiseerd in webshops, maar ook
              in websites. Wij geloven in het produceren van creatieve producten
              die harten veroveren, geesten inspireren en zakelijke resultaten
              opleveren. Hierbij ontwerpen wij specifiek gericht op de behoeftes
              van uw bedrijf. Hierdoor krijg je een geoptimaliseerde website die
              uw bedrijf uitstraalt.{" "}
            </p>
            <a href="/">Start project</a>
          </div>
        </div>
      )}
    </>
  );
};
export default WebsiteOffer;
