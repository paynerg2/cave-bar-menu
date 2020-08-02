import React from "react"

import "./styles.css"

export const StickySectionHeader = ({ children }) => {
  return (
    <>
      <a href="#" id={children} />
      <h1 className="sticky section-header">{children}</h1>
    </>
  )
}
