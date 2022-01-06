import * as React from "react"
import { StaticQuery, graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import Markdown from "react-markdown"
import { SRLWrapper } from "simple-react-lightbox";

const query = graphql`
  query {
    strapiHow {
      title
      content
      headline
    }
  }
`;

const How = () => (
  <StaticQuery
    query={query}
    render={data => (
      <div className="content--full-width content--grey">
      <div className="content">
        <h1 id="salgsproces" className="content-title">
            {data.strapiHow.title}
          </h1>
          <div className="content__flex">
          <div className="content__col content-image">
          <SRLWrapper showCaption={false} showThumbnails={false}>
          <StaticImage
              src="../images/process.jpg"
              alt="Process"
              className="cursor-hover"
            />
          </SRLWrapper>
        </div>
        <div className="content__col">
          
          <h2 className="content-headline content-headline--no-padding-right">
            {data.strapiHow.headline}
          </h2>
          <div className="content-description">
            <Markdown children={data.strapiHow.content} />
          </div>
        </div>
        
        
      </div>
      </div>
      </div>
    )}
  />
)

export default How
