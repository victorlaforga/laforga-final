import React, { useRef, useEffect } from 'react';
import Navigation from '../components/section-1/nav';
import Menu from "../components/menu"
import "../styles/styles.scss"
import Footer from "../components/footer"
import { AccessProvider } from  '../contexts/access'

const AerialWork = () => {
  const [open, setOpen] = React.useState(false)
  return (<section className="container-work">
    
    <div className="container-banner aerial">
      
      <AccessProvider>
      <Navigation open={open} toggleMenu={() => setOpen(!open)} />
        <Menu open={open} toggleMenu={() => setOpen(!open)} />
      </AccessProvider>
      <h1><mark>Aerial Access</mark></h1>
    </div>
<section className="work-main">
<div className="work-main--info">
    <div className="subtext">
<h2>Door het gebruik van gespecialiseerde rope access technieken is Aerial Access in staat op moeilijke toegankelijke locaties werkzaamheden uit te voeren.</h2>
    </div>
    <div className="main-text">
        <h3>Aerial Acces</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec dolor in sem lacinia iaculis eu ac tortor. Aliquam et nulla dignissim, suscipit justo sit amet, tincidunt turpis. Quisque eget lorem id neque faucibus congue ut sit amet dolor. Maecenas non odio sit amet tellus ornare lacinia et in quam. Donec scelerisque condimentum consectetur. Morbi interdum leo quis est ultrices, sed dictum lectus egestas. Maecenas neque lacus, tempus sit amet interdum nec, tristique placerat dui. Duis vel urna auctor, ultrices lorem vitae, feugiat dui. Curabitur velit purus, rutrum sit amet nibh sed, pretium porttitor ante. Proin nec ultricies libero. Nulla vitae lectus eu ex commodo fermentum et ac enim. Aenean sodales tempus aliquam. Phasellus nisi justo, vehicula sit amet est eu, feugiat vestibulum magna.</p>
    </div>
</div>
<div className="work-icons">
    <div>
        <h4>100%</h4>
        <p>Custom design</p>
    </div>
    <div>
        <h4>90+</h4>
        <p>Sitespeed</p>
    </div>
</div>
</section>
<div className="work-subbanner">

</div>
<div className="work-summary">
    <div>
<h3>Laforga denkt mee vanuit het perspectief van de klant</h3>
<p> Enthousiaste agency met inzicht. Heeft voor Aerial Access een mooie site ontworpen die volledig voldeed aan onze eisen. Denkt mee met ontwerp vanuit de perspectief van de klant en laat ruimte voor eigen ideeën. Fijne samenwerking met oog voor service.</p>
</div>
</div>
<Footer />
    </section>
  );
};


export default AerialWork;