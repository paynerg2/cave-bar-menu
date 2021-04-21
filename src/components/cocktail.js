import React from "react"

import { toStringList } from "../utils/toStringList"

import "./styles.css"

export const Cocktail = ({ node }) => {
  const ingredientList = toStringList(node.ingredients)

  return node ? (
    <li className="container">
      <div id="cocktail-heading">
        <div className="cocktail-name underline">{node.name}</div>
        <div className="ingredients">{ingredientList}</div>
      </div>
      {node.image && (
        <a className="image" href={`/${node.slug}`}>
          <img src={node.image.fluid.src} alt={node.name} />
        </a>
      )}
      {node.description && (
        <div className="quote description">
          {node.description.internal.content}
        </div>
      )}
    </li>
  ) : null
}
