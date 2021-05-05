import React from "react"
import Select from "react-select"

const customStyles = {
  control: () => ({
    height: "auto",
    width: "70%",
    background: "#0a0404",
    margin: "0 auto",
    fontSize: "2rem",
    lineHeight: "2rem",
    borderRadius: "0.15em",
    border: "1px solid #f7d5ba",
    display: "flex",
    flexDirection: "row",
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1
    const transition = "opacity 300ms"

    return { ...provided, opacity, transition, color: "#f7d5ba" }
  },
  multiValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1
    const transition = "opacity 300ms"

    return {
      ...provided,
      opacity,
      transition,
      color: "#f7d5ba",
      backgroundColor:
        state.isSelected || state.isFocused ? "#361108" : "#0a0404",
    }
  },
  multiValueLabel: provided => ({
    ...provided,
    color: "#f7d5ba",
  }),
  valueContainer: provided => ({
    ...provided,
    flexDirection: "row",
  }),
  menu: provided => ({
    ...provided,
    backgroundColor: "#0a0404",
    border: "1px solid #f7d5ba",
    width: "70%",
    left: "15%",
    margin: 0,
  }),
  option: (provided, state) => ({
    ...provided,
    width: "100%",
    color: state.isSelected ? "#ba4333" : "#f7d5ba",
    backgroundColor: state.isSelected ? "#361108" : "#0a0404",
    padding: 20,
    fontSize: "2rem",
  }),
  clearIndicator: provided => ({
    ...provided,
    color: "hsl(0,0%,50%)",
  }),
  indicatorSeparator: provided => ({
    ...provided,
    backgroundColor: "hsl(0,0%,50%)",
  }),
  dropdownIndicator: provided => ({
    ...provided,
    color: "hsl(0,0%,50%)",
  }),
}

const StyledSelect = props => (
  <Select
    styles={customStyles}
    {...props}
    inputProps={{ readOnly: true }}
    isSearchable={false}
    openMenuOnClick={false}
  />
)

export default StyledSelect
