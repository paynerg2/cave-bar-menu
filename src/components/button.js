import React from "react"
import { Link } from "gatsby"

export const Button = props => (
  <div className="button">
    <Link style={{ textDecoration: "none" }} to={`/${props.to}`}>
      {props.children}
    </Link>
  </div>
)
