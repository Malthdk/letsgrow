import * as React from "react"
import { StaticQuery, graphql } from 'gatsby'
import Markdown from "react-markdown"

const query = graphql`
  query {
    strapiWhy {
      title
      content
    }
  }
`;

const Why = () => (
  <StaticQuery
    query={query}
    render={data => (
      <div className="content">
        <h1 className="content-title">
          {data.strapiWhy.title}
        </h1>
        <h2 className="content-headline">
          {data.strapiWhy.headline}
        </h2>
        <div className="content-description">
          <Markdown children={data.strapiWhy.content} />
        </div>
      </div>
    )}
  />
)

export default Why
