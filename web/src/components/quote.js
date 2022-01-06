import * as React from "react"
import { StaticQuery, graphql } from 'gatsby'

const query = graphql`
  query {
    strapiQuote {
      quote
    }
  }
`;

const Quote = () => (
  <StaticQuery
    query={query}
    render={data => (
      <div className="content content--full-width content--alt-color">
        <h3 className="content-fact">
        {data.strapiQuote.quote}
        </h3>
      </div>
    )}
  />
)

export default Quote
