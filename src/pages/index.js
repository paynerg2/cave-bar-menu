import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import CoverImage from "../components/coverImage"
import { Cocktail } from "../components/cocktail"

const CocktailIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const cocktails = data.allContentfulCocktail.edges
  console.log(cocktails)
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All cocktails" />
      <CoverImage />
      {cocktails.map(({ node }) => (
        <Cocktail key={node.name} node={node} />
      ))}
    </Layout>
  )
}

export default CocktailIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulCocktail(sort: { fields: name, order: ASC }) {
      edges {
        node {
          name
          ingredients
          description {
            internal {
              content
            }
          }
          image {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`
