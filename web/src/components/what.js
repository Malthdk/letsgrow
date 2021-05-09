import * as React from "react"
import { StaticQuery, graphql } from 'gatsby'
import Markdown from "react-markdown"

const query = graphql`
  query {
    strapiWhat {
      title
      content
    }
  }
`;

const What = () => (
  <StaticQuery
    query={query}
    render={data => (
      <div className="content">
        <h1 className="content-title">
          {data.strapiWhat.title}
        </h1>
        <h2 className="content-headline">
          {data.strapiWhat.headline}
        </h2>
        <div className="content-description">
          <Markdown children={data.strapiWhat.content} />
        </div>
      </div>
    )}
  />
)

export default What
