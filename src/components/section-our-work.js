import React, { useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import "swiper/swiper.scss";
import Swiper from "react-id-swiper";
import { navigate } from "gatsby";
import "../styles/styles.scss";
const SectionWork = () => {
  const sliderParams = {
    centeredSlides: false,
    slidesPerView: "auto",
  };
  const { maglashic, fourEditors, faminci, fietsenwinkel, aerial } =
    useStaticQuery(
      graphql`
        query {
          maglashic: file(relativePath: { eq: "work-maglashic.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          fourEditors: file(relativePath: { eq: "four-editors-work.jpeg" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 420) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          aerial: file(relativePath: { eq: "aerial2.png" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 420) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          faminci: file(relativePath: { eq: "faminci-work.jpeg" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 420) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          fietsenwinkel: file(relativePath: { eq: "fietsenwinkel.jpg" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 420) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `
    );
  const bgRef = useRef();
  return (
    <section className="study-case-container">
      <h2>
        Meest <mark>recente werk</mark>
      </h2>
      <div className="recent-work">
        <div className="recent-work-container">
          <Swiper {...sliderParams}>
            <BackgroundImage
              ref={bgRef}
              onStartLoad={() =>
                bgRef.current.selfRef.classList.toggle("loading")
              }
              onLoad={() => bgRef.current.selfRef.classList.toggle("loading")}
              Tag="section"
              className="thumbnail__col"
              fluid={maglashic.childImageSharp.fluid}
              backgroundColor={`transparent`}
              background-position="center"
              style={{ backgroundPositionX: "0%", cursor: "pointer" }}
              onClick={(e) => navigate("/maglashic/")}
            >
              <div className="thumbnail__text">
                <a href="/maglashic/">
                  <h3>Maglashic</h3>
                  <p>
                    {" "}
                    Maakt wimpers aanbrengen eenvoudiger dan ooit met een
                    natuurlijke look.
                  </p>
                </a>
              </div>
            </BackgroundImage>

            <BackgroundImage
              Tag="section"
              className="thumbnail__col"
              fluid={fourEditors.childImageSharp.fluid}
              backgroundColor={`transparent`}
              background-position="center"
              style={{ cursor: "pointer" }}
              onClick={(e) => navigate("/four-editors/")}
            >
              <div className="thumbnail__text">
                <a href="/four-editors/">
                  <h3>Four Editors</h3>
                  <p>
                    De meest complete & hoogwaardige bundels voor het editing
                    proces van film.
                  </p>
                </a>
              </div>
            </BackgroundImage>
            <BackgroundImage
              Tag="section"
              className="thumbnail__col"
              fluid={fietsenwinkel.childImageSharp.fluid}
              backgroundColor={`transparent`}
              background-position="center"
              style={{ backgroundPositionX: "0%", cursor: "pointer" }}
              onClick={(e) => navigate("/tm-tweewielers/")}
            >
              <div className="thumbnail__text ">
                <a href="/tm-tweewielers/">
                  <h3>T&M Tweewielers</h3>
                  <p>
                    De grootste scooter & fietsenwinkel van Haarlem met het
                    meeste aanbod!
                  </p>
                </a>
              </div>
            </BackgroundImage>
            <BackgroundImage
              Tag="section"
              className="thumbnail__col"
              fluid={aerial.childImageSharp.fluid}
              backgroundColor={`transparent`}
              background-position="center"
              style={{ cursor: "pointer" }}
              onClick={(e) => navigate("/aerial-access/")}
            >
              <div className="thumbnail__text">
                <a href="/aerial-access/">
                  <h3>Aerial Access</h3>
                  <p>
                    Aerial Access is in staat op moeilijke toegankelijke
                    locaties werkzaamheden uit te voeren.
                  </p>
                </a>
              </div>
            </BackgroundImage>
            <BackgroundImage
              Tag="section"
              className="thumbnail__col"
              fluid={faminci.childImageSharp.fluid}
              backgroundColor={`transparent`}
              background-position="center"
              onClick={(e) => navigate("https://faminci.com/collections/all")}
              style={{ cursor: "pointer" }}
            >
              <div className="thumbnail__text">
                <a href="https://faminci.com/collections/all">
                  <h3>Faminci</h3>
                  <p>
                    Premium canvassen voor aan de muur die custom gemaakt kunnen
                    worden.
                  </p>
                </a>
              </div>
            </BackgroundImage>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SectionWork;
