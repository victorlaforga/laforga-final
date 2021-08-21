import React from "react";
import "../styles/styles.scss";
import { Menu } from "../components";
import { MainSection, Navigation } from "./section-1/index";
import { Player } from "@lottiefiles/react-lottie-player";
import { AccessContext } from "../contexts/access";
import useDeviceDetect from "../hooks/useDeviceDetect";
// import '../styles/styles.scss'
const SectionOne = () => {
  const [isFirstAccess, pageLoaded] = React.useContext(AccessContext);
  const [open, setOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const { isMobile } = useDeviceDetect();

  setTimeout(() => {
    setMounted(true);
  }, 4000);

  return (
    <section className="section-one" id="home">
      {!pageLoaded && !isMobile && <div class="blank"></div>}

      {isFirstAccess && !isMobile && (
        <div class={`loading ${mounted ? "hide" : ""}`}>
          <Player
            autoplay={true}
            speed="1.5"
            src="https://assets9.lottiefiles.com/packages/lf20_1vb6lfpn.json"
          >
            {" "}
          </Player>
        </div>
      )}

      <Navigation
        open={open}
        toggleMenu={() => setOpen(!open)}
        isFirstAccess={isFirstAccess}
      />
      <Menu
        open={open}
        toggleMenu={(e, id) => {
          setOpen(!open);
          e && e.preventDefault(); // to avoid the link from redirecting
          const elementToView = document.getElementById(id);
          console.log(elementToView);
          elementToView.scrollIntoView();
        }}
      />
      <MainSection />
      <div class="wrapper-call-to-action">
        <a href="#diensten-prijzen" class="call-to-action">
          Onze diensten
        </a>
      </div>
    </section>
  );
};

export default SectionOne;
