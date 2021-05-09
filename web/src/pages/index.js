import "../styles/main.scss"
import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Why from "../components/why"
import How from "../components/how"
import What from "../components/what"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Why />
    <How />
    <What />
  </Layout>
)

export default IndexPage
