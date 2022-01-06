import * as React from "react"
import { StaticQuery, graphql } from 'gatsby'

const query = graphql`
  query {
    strapiQuote {
      quote
    }
  }
`;

const QuoteBottom = () => (
  <StaticQuery
    query={query}
    render={data => (
      <div className="content content--full-width content--alt-color">
        <h3 className="content-fact">
        Keep it simple, and work smart!
        </h3>
      </div>
    )}
  />
)

export default QuoteBottom
