import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import CoverImage from "../components/coverImage"
import { Cocktail } from "../components/cocktail"
import { Button } from "../components/button"

const CocktailIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  /* Get filtering options */
  const cocktails = data.allContentfulCocktail.nodes
  const randomlySelectedCocktail =
    cocktails[Math.floor(Math.random() * cocktails.length)]

  return (
    <Layout location={location} title={siteTitle} showMenu={false}>
      <SEO title="All cocktails" />
      <CoverImage />
      <ul id="cocktail-list">
        <Cocktail
          key={randomlySelectedCocktail.name}
          cocktail={randomlySelectedCocktail}
        />
      </ul>
      <Button to="/">Main Menu</Button>
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
      nodes {
        name
        ingredients
        description {
          internal {
            content
          }
        }
        image {
          fluid(maxWidth: 680) {
            src
          }
        }
        slug
        baseSpirit
        style
        flavorProfile
      }
    }
  }
`
