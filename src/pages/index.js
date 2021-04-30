import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import CoverImage from "../components/coverImage"
import { Cocktail } from "../components/cocktail"
import { getFilterParams } from "../utils/getFilterParams"
import { inclusiveFilter, exclusiveFilter } from "../utils/filters"

const CocktailIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  /* Get filtering options */
  const spirits = data.allContentfulCocktail.baseSpirits.map(s =>
    s.toLowerCase()
  )
  // Remove repeats from the base spirit list
  const ingredients = data.allContentfulCocktail.ingredients
    .map(s => s.toLowerCase())
    .filter(s => !spirits.includes(s))
  const styles = data.allContentfulCocktail.styles
  const flavorProfiles = data.allContentfulCocktail.flavorProfiles

  const filteringOptions = {
    spirits,
    ingredients,
    styles,
    flavorProfiles,
  }

  // Generate filters from url query parameters
  let siteUrl =
    process.env.NODE_ENV === "production"
      ? `${data.site.siteMetadata.siteUrl}${location.href}`
      : location.href
  const url = new URL(siteUrl)
  const params = new URLSearchParams(url.search.slice(1))
  let filters = getFilterParams(params)

  const filteredCocktails = data.allContentfulCocktail.nodes
    .filter(cocktail =>
      exclusiveFilter(cocktail.baseSpirit, filters.baseSpirit)
    )
    .filter(cocktail => exclusiveFilter(cocktail.style, filters.style))
    .filter(cocktail =>
      inclusiveFilter(cocktail.ingredients, filters.ingredients)
    )
    .filter(cocktail =>
      inclusiveFilter(cocktail.flavorProfile, filters.flavorProfile)
    )

  return (
    <Layout
      location={location}
      title={siteTitle}
      filteringOptions={filteringOptions}
    >
      <SEO title="All cocktails" />
      <CoverImage />
      <ul id="cocktail-list">
        {filteredCocktails.map(cocktail => (
          <Cocktail key={cocktail.name} cocktail={cocktail} />
        ))}
      </ul>
    </Layout>
  )
}

export default CocktailIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
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
      baseSpirits: distinct(field: baseSpirit)
      ingredients: distinct(field: ingredients)
      styles: distinct(field: style)
      flavorProfiles: distinct(field: flavorProfile)
    }
  }
`
