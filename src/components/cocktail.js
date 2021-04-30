import React from "react"
import { Link } from "gatsby"

import { toStringList } from "../utils/toStringList"

import "./styles.css"

export const Cocktail = ({ cocktail }) => {
  const ingredientList = toStringList(cocktail.ingredients)
  let imgSrc = cocktail.image.fluid.src

  return cocktail ? (
    <li className="container">
      <div id="cocktail-heading">
        <div className="cocktail-name underline">{cocktail.name}</div>
        <div className="ingredients">{ingredientList}</div>
      </div>
      {cocktail.image && (
        <Link className="image" to={`/${cocktail.slug}`}>
          <img src={imgSrc} alt={cocktail.name} />
        </Link>
      )}
      {cocktail.description && (
        <div className="quote description">
          {cocktail.description.internal.content}
        </div>
      )}
    </li>
  ) : null
}
