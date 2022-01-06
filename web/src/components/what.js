import * as React from "react"
import { StaticQuery, graphql } from 'gatsby'
import Markdown from "react-markdown"
import { StaticImage } from "gatsby-plugin-image"

const query = graphql`
  query {
    strapiWhat {
      title
      content
      headline
    }
  }
`;

const What = () => (
  <StaticQuery
    query={query}
    render={data => (
      <div className="content">
        <h1 id="crm" className="content-title">
            {data.strapiWhat.title}
          </h1>
          <h2 className="content-headline">
            {data.strapiWhat.headline}
          </h2>
          <div className="content__flex">
        <div className="content__col">
          
          
          <div className="content-description">
            <Markdown children={data.strapiWhat.content} />
          </div>
        </div>
        
        <div className="content__col content-image">
          <StaticImage
              src="../images/crm.jpg"
              alt="Crm"
            />
        </div>
      </div>
      </div>
      
    )}
  />
)

export default What
