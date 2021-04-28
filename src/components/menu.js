import React, { useState } from "react"
import { navigate } from "gatsby"

import Select from "./select"
import { cocktailParams } from "../utils/constants"
import { createSelectOptions } from "../utils/createSelectOptions"
import { getSearchParams } from "../utils/getSearchParams"

import "./styles.css"
import "../utils/hamburgers.css"

export const Menu = ({ location, filteringOptions }) => {
  const [active, setActive] = useState(false)

  const spiritOptions = createSelectOptions(filteringOptions.spirits)
  const ingredientsOptions = createSelectOptions(filteringOptions.ingredients)
  const styleOptions = createSelectOptions(filteringOptions.styles)
  const flavorProfileOptions = createSelectOptions(
    filteringOptions.flavorProfiles
  )

  const handleChange = (value, action) => {
    const searchParams = getSearchParams(location, action.name, value)
    if (searchParams.toString() !== "") {
      navigate("?" + searchParams.toString())
    } else {
      navigate("/")
    }
  }

  // TODO: Style react-select components appropriately.

  return (
    <div>
      <button
        className={`menu-btn hamburger--elastic ${active ? "is-active" : ""}`}
        type="button"
        aria-label="Menu"
        aria-controls="navigation"
        onClick={() => setActive(prev => !prev)}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <div
        id="sidenav"
        className={active ? "menu-wrapper menu-open" : "menu-wrapper"}
      >
        <h3 className="menu-header">Spirits</h3>
        <Select
          isClearable
          name={cocktailParams.BASE_SPIRIT}
          options={spiritOptions}
          onChange={handleChange}
        />
        <h3 className="menu-header">Ingredients</h3>
        <Select
          isClearable
          isMulti
          name={cocktailParams.INGREDIENTS}
          options={ingredientsOptions}
          onChange={handleChange}
        />
        <h3 className="menu-header">Style</h3>

        <Select
          isClearable
          name={cocktailParams.STYLE}
          options={styleOptions}
          onChange={handleChange}
        />
        <h3 className="menu-header">Flavor Profile</h3>
        <Select
          isClearable
          isMulti
          name={cocktailParams.FLAVOR_PROFILE}
          options={flavorProfileOptions}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}
