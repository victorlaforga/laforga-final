import * as React from "react";
import "../styles/styles.scss";
import Navigation from "../components/section-1/nav";
import Menu from "../components/menu";
import MainSection from "./section-1/main";
import { Player } from "@lottiefiles/react-lottie-player";
import { AccessContext } from "../contexts/access";

const SectionOne = () => {
  const [isFirstAccess, pageLoaded] = React.useContext(AccessContext);
  const [open, setOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  setTimeout(() => {
    setMounted(true);
  }, 4000);

  return (
    <section className="section-one" id="home">
      {!pageLoaded && <div class="blank"></div>}

      {isFirstAccess && (
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
      <Menu open={open} toggleMenu={() => setOpen(!open)} />
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
