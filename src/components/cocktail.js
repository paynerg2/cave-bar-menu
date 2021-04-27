import React from "react"

import { toStringList } from "../utils/toStringList"

import "./styles.css"

export const Cocktail = ({ cocktail }) => {
  const ingredientList = toStringList(cocktail.ingredients)

  return cocktail ? (
    <li className="container">
      <div id="cocktail-heading">
        <div className="cocktail-name underline">{cocktail.name}</div>
        <div className="ingredients">{ingredientList}</div>
      </div>
      {cocktail.image && (
        <a className="image" href={`/${cocktail.slug}`}>
          <img src={cocktail.image.fluid.src} alt={cocktail.name} />
        </a>
      )}
      {cocktail.description && (
        <div className="quote description">
          {cocktail.description.internal.content}
        </div>
      )}
    </li>
  ) : null
}
