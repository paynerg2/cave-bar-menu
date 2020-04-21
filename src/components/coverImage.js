import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { quotes } from "../../content/constants/quotes"

import "./styles.css"

const CoverImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "jon-cellier-jbeW1fG79HI-unsplash.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1080, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const quotation = quotes[0]

  return (
    <>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />

      <div className="quote main">
        <div>{quotation.quote}</div>
        <div className="quote attribution">
          <span
            style={{ fontStyle: "normal" }}
          >{`•    ${quotation.attribution}`}</span>

          <span>{`,      ${quotation.source}`}</span>
        </div>
      </div>
    </>
  )
}

export default CoverImage
