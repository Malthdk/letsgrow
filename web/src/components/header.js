import * as React from "react"
import { StaticQuery, graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import HeaderBg from "../svg/header-bg.svg";

const query = graphql`
  query {
    strapiHeader {
      headline
      button
    }
  }
`;

const Header = () => (
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
            <a className="button call-to-action-btn" href="#">
              {data.strapiHeader.button}
            </a>
          </div>
          <div className="header__image">
          <StaticImage
            placeholder="TRACED_SVG"
            src="../images/drawing.png"
            quality={100}
            alt="Illustration"
          />
          </div>
        </header>
      </div>
    )}
  />
)

export default Header
