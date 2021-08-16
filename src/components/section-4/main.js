import  React from "react";
import { useInView } from "react-intersection-observer";
import { Player } from "@lottiefiles/react-lottie-player";
import LottieSrc2 from "../../assets/online-shopping.json";
import '../../styles/styles.scss'
const MainSectionFour = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className={`main-section-four ${inView && "show"}`} ref={ref}>
      <Player
        autoplay={true}
        loop
        speed="0.9"
        background="transparent"
        src={LottieSrc2}
      >
        {" "}
      </Player>

      <h2>
         Het shopgedrag van winkelen neemt alleen
        maar toe. <mark>Online zichtbaarheid</mark> is nog nooit zo{" "}
        <mark>belangrijk</mark> geweest.
      </h2>
    </div>
  );
};

export default MainSectionFour;
