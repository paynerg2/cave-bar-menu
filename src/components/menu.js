import React, { useState } from "react"

import "./styles.css"
import "../utils/hamburgers.css"

export const Menu = ({ sectionHeaders }) => {
  const [active, setActive] = useState(false)

  return (
    <div>
      <button
        class={`menu-btn hamburger--elastic ${active ? "is-active" : ""}`}
        type="button"
        aria-label="Menu"
        aria-controls="navigation"
        onClick={() => setActive(prev => !prev)}
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>

      <ul
        id="sidenav"
        className={active ? "menu-wrapper menu-open" : "menu-wrapper"}
      >
        <h3 className="menu-header underline">Spirits</h3>
        {sectionHeaders.map(sectionHeader => (
          <a
            href={`#${sectionHeader}`}
            key={sectionHeader}
            onClick={() => setActive(false)}
          >
            {sectionHeader}
          </a>
        ))}
      </ul>
    </div>
  )
}
