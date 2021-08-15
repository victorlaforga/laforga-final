import  React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../../styles/styles.scss"
import ReactPlayer from 'react-player/lazy'
import Video from "../../assets/tmtweewielers.mp4"

const StudyCaseTweewielers = () => {
  return (
  <div className="showcase tweewielers">
   <a className="link-container" href="/">
       <div className="info">
           <h3>T&M Tweewielers</h3>
           <h1>Scooters & fietsen winkel</h1>
           <p className="info-summary">Voor T&M Tweewielers hebben wij de gehele webshop & branding gemaakt, van logo tot aan de product pagina. Het hele pakket.</p>
           <div className="type-of-work">
               <div><p>Shopify Store</p> <StaticImage src="../../images/services/brand.svg" alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"  loading="lazy" width={600} height={400}/></div>
               <div><p>Design</p> <StaticImage src="../../images/services/brand.svg" alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"  loading="lazy" width={600} height={400}/></div>
               <div><p>Branding</p> <StaticImage src="../../images/services/brand.svg" alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"  loading="lazy" width={600} height={400}/></div>
               <div><p>Development</p> <StaticImage src="../../images/services/brand.svg" alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"  loading="lazy" width={600} height={400}/></div>
           </div>
          
       </div>
       <div className="media">
           <div className="video-container-work">
               <ReactPlayer  playsinline className="video" autoPlay loop={true} playing volume={0} muted url={Video} />
           </div>
           <a className="see-more" href="/">Bekijk meer</a>
       </div>
   </a>
  </div>
  )
}

export default StudyCaseTweewielers