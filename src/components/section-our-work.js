import * as React from "react";
import "../styles/styles.scss";
import StudyCaseAtmo from "./our-work/atmo";
import StudyCase from "./our-work/case-study";
import StudyCaseTweewielers from "./our-work/tmtweewielers";
import StudyCaseAerial from "./our-work/aerial";
import "swiper/swiper.scss";
import Swiper from "react-id-swiper";

const SectionWork = () => {
  // Thumbnail Slider params :

  const sliderParams = {
    centeredSlides: false,
    slidesPerView: "auto",
  };

  return (
    <section className="study-case-container">
      <h2>Meest recente werk</h2>
      {/* <div className="recent-work">
     <div className="recent-work-container">
       <article className="thumbnail-work maglashic">
    <a href="/">
<div className="recent-work--info">
  <h3>Maglashic</h3>
  <p>Maakt wimpers aanbrengen eenvoudiger dan ooit met een natuurlijke look.</p>
</div>
    </a>
       </article>
       <article className="thumbnail-work four-editors">
    <a href="/">
<div className="recent-work--info">
  <h3>Four Editors</h3>
  <p>De meest complete & hoogwaardige bundels voor het editing proces van film.</p>
</div>
    </a>
       </article>
       <article className="thumbnail-work faminci">
    <a href="/">
<div className="recent-work--info">
  <h3>Faminci</h3>
  <p>Premium canvassen voor aan de muur die custom gemaakt kunnen worden.</p>

</div>
    </a>
       </article>
       <article className="thumbnail-work tm">
    <a href="/">
<div className="recent-work--info">
  <h3>T&M Tweewielers</h3>
  <p>De grootste scooter & fietsenwinkel van Haarlem met het meeste aanbod!</p>
</div>
    </a>
       </article>
     </div>
     </div> */}
      <div className="recent-work">
        <div className="recent-work-container">
          <Swiper {...sliderParams}>
            <div className="thumbnail__col maglashic">
              <div className="thumbnail__text">
                <a href="/">
                  <h3>Maglashic</h3>
                  <p>
                    {" "}
                    Maakt wimpers aanbrengen eenvoudiger dan ooit met een
                    natuurlijke look.
                  </p>
                </a>
              </div>
            </div>
            <div className="thumbnail__col four-editors">
              <div className="thumbnail__text">
                <a href="/">
                  <h3>Four Editors</h3>
                  <p>
                    De meest complete & hoogwaardige bundels voor het editing
                    proces van film.
                  </p>
                </a>
              </div>
            </div>
            <div className="thumbnail__col faminci">
              <div className="thumbnail__text">
                <a href="/">
                  <h3>Faminci</h3>
                  <p>
                    Premium canvassen voor aan de muur die custom gemaakt kunnen
                    worden.
                  </p>
                </a>
              </div>
            </div>
            <div className="thumbnail__col tm">
              <div className="thumbnail__text ">
                <a href="/">
                  <h3>T&M Tweewielers</h3>
                  <p>
                    De grootste scooter & fietsenwinkel van Haarlem met het
                    meeste aanbod!
                  </p>
                </a>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
      {/* <StudyCase />
<StudyCaseTweewielers />
<StudyCaseAtmo />
<StudyCaseAerial /> */}
    </section>
  );
};

export default SectionWork;
