import * as React from "react"
import { StaticQuery, graphql } from 'gatsby'
import Markdown from "react-markdown"
import { StaticImage } from "gatsby-plugin-image"

const query = graphql`
  query {
    strapiMarkedsdata {
      title
      content
      headline
    }
  }
`;

const Markedsdata = () => (
  <StaticQuery
    query={query}
    render={data => (
      <div className="content">
        <h1 id="markedsdata" className="content-title">
            {data.strapiMarkedsdata.title}
          </h1>
          <h2 className="content-headline">
            {data.strapiMarkedsdata.headline}
          </h2>
          <div className="content__flex">
          <div className="content__col content-image">
          <StaticImage
              src="../images/marketdata.jpg"
              alt="Markedsdata"
            />
        </div>
        <div className="content__col">
          
          
          <div className="content-description">
            <Markdown children={data.strapiMarkedsdata.content} />
          </div>
        </div>
        
        
      </div>
      </div>
      
    )}
  />
)

export default Markedsdata
