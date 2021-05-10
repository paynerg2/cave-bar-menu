import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import CoverImage from "../components/coverImage"
import { Cocktail } from "../components/cocktail"
import { Button } from "../components/button"

const CocktailIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const cocktails = data.allContentfulCocktail.nodes

  const [randomCocktail, setRandomCocktail] = useState()

  useEffect(() => {
    let randomIndex = Math.floor(Math.random() * cocktails.length)
    const randomlySelectedCocktail = cocktails[randomIndex]
    setRandomCocktail(randomlySelectedCocktail)
  }, [])

  return (
    <Layout location={location} title={siteTitle} showMenu={false}>
      <SEO title="Random Cocktail" />
      <CoverImage />
      <ul id="cocktail-list">
        {randomCocktail && (
          <Cocktail key={randomCocktail.name} cocktail={randomCocktail} />
        )}
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
