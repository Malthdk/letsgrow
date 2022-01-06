import * as React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { StaticImage } from "gatsby-plugin-image"

const ReferenceCarousel = () => {
  return(
    <div className="content content--full-width content--alt-color">
      <Carousel autoPlay={true} infiniteLoop={true} showIndicators={false} showThumbs={false} showStatus={false} interval={8000} >
          <div class="carousel-item">
            <div className="content-reference">
            ”Toke hjalp med at vækste vores forretning ved at finde ny oplagt målgruppe, tilpasse salgsprocessen i CRM og <strong>konvertere over 17% af kanvas-emnerne</strong> til varme møder i min kalender”
            </div>
            
            <div className="reference-image">
            <StaticImage
              src="../images/reference1.png"
              placeholder="tracedSVG"
              alt="autobahn"
            />
            <h5 className="reference-author">Kasper<br />Autobahn</h5>
            </div>
            
          </div>
          <div class="carousel-item">
            <div className="content-reference">
            ”Hos IT-huset oplever vi vækst efter samarbejdet med LETSGROW. Vores dagligdag er blevet optimeret i forhold til vores salgsprocessor, hvilket har givet et større output i nye kunder. I snit bruger vi ca. <strong>25% kortere tid</strong> at få en kunde ind”
            </div>
            
            <div className="reference-image">
            <StaticImage
              src="../images/reference2.png"
              placeholder="tracedSVG"
              alt="it-huset"
            />
            <h5 className="reference-author">Jonas<br />IT-huset</h5>
            </div>
          </div>
      </Carousel>
    </div>
  )
}

export default ReferenceCarousel
