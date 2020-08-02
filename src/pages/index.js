import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import CoverImage from "../components/coverImage"
import { Cocktail } from "../components/cocktail"
import { StickySectionHeader } from "../components/stickySectionHeader"

const CocktailIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const categories = data.allContentfulCocktail.group

  // Used (in /Layout/Menu) to navigate to StickySectionHeader with matching ID
  const spirits = categories.map(({ nodes }) => nodes[0].baseSpirit)

  return (
    <Layout location={location} title={siteTitle} sectionHeaders={spirits}>
      <SEO title="All cocktails" />
      <CoverImage />
      {categories.map(({ nodes }) => (
        <>
          <StickySectionHeader>{nodes[0].baseSpirit}</StickySectionHeader>
          {nodes.map(cocktail => (
            <Cocktail key={cocktail.name} node={cocktail} />
          ))}
        </>
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
      group(field: baseSpirit) {
        nodes {
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
          slug
          baseSpirit
        }
      }
    }
  }
`
