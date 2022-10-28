import * as React from "react"
import { StaticQuery, graphql } from 'gatsby'
import HeaderBg from "../svg/header-bg.svg";
import Video from "../components/video"
import { useInView } from 'react-intersection-observer';
import ContactSvg from "../svg/conversation";
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
import { SRLWrapper } from "simple-react-lightbox";

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


  return (
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
              <h2 className="headline headline--header">
                <span className="text-accent">Du driver</span> forretningen. <br /><span className="text-accent">Vi vækster</span> salgspipelinen og øger <span className="text-accent">ARR</span>.
              </h2>
              <h3 className="subheadline mb-2">
                Ved kvalificeret mødebooking og CRM styrker vi din position på B2B markedet.
                </h3>
                <h3 className="subheadline mb-4">
                  Skal vi være din vækstpartner?
              </h3>
              <SRLWrapper showCaption={false} showThumbnails={false}>
      
              <a className={`button call-to-action-btn ${inView ? "header-button-active" : "c2a-button-active"}`} href="https://outlook.office365.com/owa/calendar/LETSGROW@letsgrow.sale/bookings/" target="_blank" rel="noreferrer">
                <span className={`button-text ${inView ? "" : "hide"}`}>Book et inspirationsmøde</span>
                <span className={`button-svg ${inView ? "hide" : ""}`}><ContactSvg props={inView ? "" : "active"} /></span>
              </a>

              <div ref={ref}></div>
              </SRLWrapper>

            </div>
            <div className="header__image">
              <Video
                videoSrcURL="https://www.youtube.com/embed/WjBZlUaVemY?autoplay=1&mute=1&cc_load_policy=1&rel=0&modestbranding=1"
                videoTitle="LetsGROW intro video"
                width="100%"
                height="250px"
              />
            </div>
          </header>

        </div>
      )}
    />
  )
}

export default Header
