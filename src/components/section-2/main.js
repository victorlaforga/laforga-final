import React from "react";
// import '../../styles/styles.scss'
const MainSectionTwo = ({ lang }) => {
  if (!lang) {
    return (
      <div className="main-section-two" id="over-ons">
        <div className="content-section-two">
          <div class="content">
            {" "}
            Wij zijn experts in het
            <div class="content__container">
              <ul class="content__container__list">
                <li class="content__container__list__item">ontwerpen</li>
                <li class="content__container__list__item">bouwen</li>
                <li class="content__container__list__item">optimaliseren</li>
                <li class="content__container__list__item">ontwikkelen</li>
              </ul>
            </div>
            <br />
            van shopify stores.
          </div>
          <p>
            We maken het eenvoudig om je producten online te verkopen. Als je net
            aan je handelsreis begint, online overstapt of een nieuwe
            productlijn maakt, kunnen we je online winkel binnen de kortste tijd
            helemaal opzetten.{" "}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="main-section-two" id="over-ons">
        <div className="content-section-two">
          <div class="content">
            {" "}
            We are experts in
            <div class="content__container">
              <ul class="content__container__list">
                <li class="content__container__list__item eng-list">designing</li>
                <li class="content__container__list__item eng-list">building</li>
                <li class="content__container__list__item eng-list">optimizing</li>
                <li class="content__container__list__item eng-list">developing</li>
              </ul>
            </div>
            <br />
            your Shopify stores.
          </div>
          <p>
            We make it easy to sell your products online. If you're just
            starting your business journey, switching to e-commerce or creating a new
            product line, we can get your online store up and running in no
            time.
          </p>
        </div>
      </div>
    );
  }
};

export default MainSectionTwo;
