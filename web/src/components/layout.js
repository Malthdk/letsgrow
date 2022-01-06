/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import Navigation from "./navigation"
import Header from "./header"
import Footer from "./footer"
import SimpleReactLightbox from 'simple-react-lightbox'

import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
    <div is="outer-container">
    <Navigation />
    <SimpleReactLightbox>
    <Header />
    <div className="content-wrapper">
        <main id="page-wrap">{children}</main>
    </div>
    <Footer />
    </SimpleReactLightbox>
    </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
