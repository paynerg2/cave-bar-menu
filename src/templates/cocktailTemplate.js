import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function CocktailRecipe({ data }) {
  console.log(data)
  const cocktail = data.contentfulCocktail

  return (
    <Layout>
      <h1>{cocktail.name}</h1>
      <div>{cocktail.baseSpirit}</div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulCocktail(slug: { eq: $slug }) {
      name
      ingredients
      baseSpirit
    }
  }
`
