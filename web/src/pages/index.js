import "../styles/main.scss"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Why from "../components/why"
import How from "../components/how"
import What from "../components/what"
import IconsRow from "../components/iconsrow"
import Markedsdata from "../components/markedsdata"
import Video from "../components/video"
import Partners from "../components/partners"
import ReferenceCarousel from "../components/references"
/*import ReactGA from "react-ga"

ReactGA.initialize('UA-206232019-1', []);
ReactGA.pageview(window.location.pathname);*/

const IndexPage = () => (
  <>
  <Layout>
    <Seo title="Home" />
    <Video
        videoSrcURL="https://www.youtube.com/embed/WjBZlUaVemY?autoplay=1&mute=1&cc_load_policy=1&rel=0&modestbranding=1"
        videoTitle="LetsGROW intro video"
        width="100%"
        height="420px"
      />
    <IconsRow />
    <ReferenceCarousel />
    <Why />
    <How />
    <What />
    <Markedsdata />
    <Partners />
  </Layout>
  </>
)

export default IndexPage
