import * as React from "react"
import { StaticQuery, graphql } from 'gatsby'
import Markdown from "react-markdown"

const query = graphql`
  query {
    strapiHow {
      title
      content
    }
  }
`;

const How = () => (
  <StaticQuery
    query={query}
    render={data => (
      <div className="content">
        <h1 className="content-title">
          {data.strapiHow.title}
        </h1>
        <h2 className="content-headline">
          {data.strapiHow.headline}
        </h2>
        <div className="content-description">
          <Markdown children={data.strapiHow.content} />
        </div>
      </div>
    )}
  />
)

export default How
