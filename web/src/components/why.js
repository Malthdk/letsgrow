import * as React from "react"
import { StaticQuery, graphql } from 'gatsby'
import Markdown from "react-markdown"
import { StaticImage } from "gatsby-plugin-image"

const query = graphql`
  query {
    strapiWhy {
      title
      content
      headline
    }
  }
`;

const Why = () => (
  <StaticQuery
    query={query}
    render={data => (
      <div className="content">
        <h1 id="modebooking" className="content-title">
            {data.strapiWhy.title}
          </h1>
          <h2 className="content-headline">
            {data.strapiWhy.headline}
          </h2>
          <div className="content__flex">
        <div className="content__col">
          
          
          <div className="content-description">
            <Markdown children={data.strapiWhy.content} />
          </div>
        </div>
        
        <div className="content__col content-image">
          <a href="https://blissfulprospecting.com/" target="_blank" rel="noreferrer"><StaticImage
              src="../images/reply-method.png"
              alt="reply-method"
            />
          </a>
        </div>
      </div>
      </div>
      
    )}
  />
)

export default Why
