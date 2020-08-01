import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Recipe } from "../components/recipe"

export default function CocktailRecipe({ data }) {
  console.log(data)
  const cocktail = data.contentfulCocktail
  const recipes = cocktail.recipe && cocktail.recipe.recipes

  return (
    <Layout showMenu={false}>
      <h1 id="recipe-name" className="recipe cocktail-name underline">
        {cocktail.name}
      </h1>
      <div>
        {recipes &&
          recipes.map(recipe => <Recipe key={recipe.source} recipe={recipe} />)}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulCocktail(slug: { eq: $slug }) {
      name
      ingredients
      baseSpirit
      recipe {
        recipes {
          source
          instructions
          garnish
          ingredients
          serve
        }
      }
    }
  }
`
