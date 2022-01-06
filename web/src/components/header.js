import * as React from "react"
import { StaticQuery, graphql } from 'gatsby'
import HeaderBg from "../svg/header-bg.svg";
import { StaticImage } from "gatsby-plugin-image"
import { useInView } from 'react-intersection-observer';
import ContactSvg from "../svg/conversation";
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

const query = graphql`
  query {
    strapiHeader {
      headline
      button
    }
  }
`;


const Header = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });


  return(
<StaticQuery
    query={query}
    render={data => (
      <div>
        <div className="header-bg__container">
            <div className="header-bg">
              <HeaderBg />
            </div>
        </div>
        <header className="header">
          <div className="header__headline">
            <h2 className="headline">
              {data.strapiHeader.headline}
            </h2>
            <h3 className="subheadline">
              Få hjælp til det hårde benarbejde og skab flere varme leads i jeres pipeline så I vækster efter planen.            
              </h3>
            <a className={`button call-to-action-btn ${inView ? "header-button-active" : "c2a-button-active"}`} href="https://outlook.office365.com/owa/calendar/LETSGROW@letsgrow.sale/bookings/" target="_blank" rel="noreferrer" 
            onClick={() => {
              trackCustomEvent({
                category: "Call To Action Button",
                action: "Click",
                label: "Mødebooking",
              })
            }}>
              <span className={`button-text ${inView ? "" : "hide"}`}>{data.strapiHeader.button}</span>
              <span className={`button-svg ${inView ? "hide" : ""}`}><ContactSvg props={inView ? "" : "active"} /></span>
            </a>
            <div ref={ref}></div>
          </div>
          <div className="header__image">
          <StaticImage 
              src="../images/drawing.png"
              alt="Drawing"
              placeholder="tracedSVG"
            />
          </div>
        </header>

      </div>
    )}
  />
  )
}

export default Header
