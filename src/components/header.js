import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#361108`,
      position: "sticky",
      top: "-1px",
      height: "10vh",
      borderBottom: "solid 2px #000",
      lineHeight: "10vh",
      zIndex: 4,
      display: "flex",
      textAlign: "left",
      padding: "2vh 4vh",
    }}
  >
    <div
      style={{
        maxWidth: 960,
        // padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#BA4333`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
