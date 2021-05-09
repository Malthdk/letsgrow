import * as React from "react"
import { StaticQuery, graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import FooterBg from "../svg/footer-bg.svg";
import Markdown from "react-markdown"

const query = graphql`
  query {
    strapiFooter {
      description
    }
  }
`;

const Footer = () => (
  <StaticQuery
    query={query}
    render={data => (
      <div>
        <div className="footer-bg__container">
            <div className="footer-bg">
              <FooterBg />
            </div>
        </div>
        <footer className="footer">
          <div className="footer__description">
              <Markdown children={data.strapiFooter.description} />
          </div>
          <div className="footer__some">
            {/* TODO make SOME links */}
          </div>
        </footer>
      </div>
    )}
  />
)

export default Footer
