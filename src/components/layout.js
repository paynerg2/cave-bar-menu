import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import { Menu } from "./menu"
import "./layout.css"
import "./styles.css"

const Layout = ({ children, location, filteringOptions, showMenu = true }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      {showMenu && (
        <Menu location={location} filteringOptions={filteringOptions} />
      )}
      <div id="mainContainer">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
