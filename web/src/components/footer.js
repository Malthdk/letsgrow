import * as React from "react"
import { StaticQuery, graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import FooterBg from "../svg/footer-bg.svg"

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
          {/*<div className="footer__description">
              <Markdown children={data.strapiFooter.description} />
          </div>*/}
          <div className="footer__col">
            <h4 className="footer__header">Toke Lindholm Hølledig:</h4>
            <p>Med baggrund i min uddannelse og mangeårig karriereerfaring med salg, vil jeg gerne bidrage til at virksomheder vokser med fokus på fundamentale salgsprocesser og kundetilfredshed. Denne proces har altid motiveret mig og er en konstant læring. Det er grunden til, jeg gør hvad jeg gør, og har stiftet <strong>LETSGROW.SALE</strong></p>
            <StaticImage 
              src="../images/toke.png"
              alt="toke"
              width={120}
            />
            <StaticImage 
              src="../images/logo_vi_stoetter_julehjaelpen.png"
              alt="julehjaelp"
              width={120}
            />
          </div>
          <div className="footer__col">
            <h4 className="footer__header">Virksomhed:</h4>
            <span>LETSGROW ApS</span>
            <h4 className="footer__header">CVR:</h4>
            <span>42231371</span>
            <h4 className="footer__header">Besøgsadresse:</h4>
            <span>Næsseslottet, Dronninggårds alle 136, 2840 Holte</span>
            <h4 className="footer__header">Sydbank:</h4>
            <span>Regnr.: 7117 Kontonr.: 0001446942</span>
          </div>
          <div className="footer__col">
            <h4 className="footer__header">Sociale medier:</h4>
            <span><a href="https://www.linkedin.com/in/tokeholledig/" target="_blank" rel="noreferrer">LinkedIn</a></span>
            <h4 className="footer__header">Direkte kontakt:</h4>
            <span>(+45) 51517783</span>
            <h4 className="footer__header">Telefontid:</h4>
            <span>24/7</span>
            <h4 className="footer__header">Mail:</h4>
            <span><a href="mailto:toke@letsgrow.sale">toke@letsgrow.sale</a></span>
            <div className="credit-link">
            <a href="https://www.freepik.com/vectors/business" target="_blank" rel="noreferrer">Business vector created by stories - www.freepik.com</a><br />
            <a href="https://www.freepik.com/vectors/infographic" target="_blank" rel="noreferrer">Other vectors created by pch.vector - www.freepik.com</a>
            </div>
          </div>
        </footer>
      </div>
    )}
  />
)

export default Footer
