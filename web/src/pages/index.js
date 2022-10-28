import "../styles/main.scss"
import "../styles/global.css"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Why from "../components/why"
import How from "../components/how"
import What from "../components/what"
import IconsRow from "../components/iconsrow"
import IconsRowTop from "../components/iconsrow-2"
import Markedsdata from "../components/markedsdata"
import Partners from "../components/partners"
import ReferenceCarousel from "../components/references"
/*import ReactGA from "react-ga"

ReactGA.initialize('UA-206232019-1', []);
ReactGA.pageview(window.location.pathname);*/

const IndexPage = () => (
  <>
  <Layout>
    <Seo title="LetsGROW" />
    <IconsRowTop />
    <ReferenceCarousel />
    <IconsRow />
    <Why />
    <How />
    <What />
    <Markedsdata />
    <Partners />
  </Layout>
  </>
)

export default IndexPage
