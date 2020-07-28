import React from "react"

import { toStringList } from "../utils/toStringList"

import "./styles.css"

export const Cocktail = ({ node }) => {
  const ingredientList = toStringList(node.ingredients)

  return node ? (
    <div className="container">
      <div className="cocktail-name underline">{node.name}</div>
      <div className="ingredients">{ingredientList}</div>
      {node.image && (
        <a href={`/${node.slug}`}>
          <img src={node.image.fluid.src} alt={node.name} />
        </a>
      )}
      {node.description && (
        <div className="quote">{node.description.internal.content}</div>
      )}
    </div>
  ) : null
}
