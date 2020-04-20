import React from "react"

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "1rem",
      }}
    >
      <div>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
      <div>
        <a href="https://www.github.com/paynerg2">github/paynerg2</a>
      </div>
    </footer>
  )
}

export default Footer
