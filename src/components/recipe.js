import React from "react"

import "./styles.css"

export const Recipe = ({ recipe }) => {
  return (
    <>
      <h5 className="recipe source">{recipe.source}</h5>
      <ul className="recipe ingredients">
        {recipe.ingredients.map((ingredient, i) => (
          <li key={`${recipe.source} ingredient ${i}`}>{ingredient}</li>
        ))}
      </ul>
      <div className="recipe instructions">{recipe.instructions}</div>
    </>
  )
}
