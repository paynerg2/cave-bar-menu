/**
 * Filter for string values where the value must match the singular filter.
 * @param {string} value
 * @param {string} filter
 * @returns {boolean}
 */
export const exclusiveFilter = (value, filter) => {
  if (value === null) {
    return false
  }
  if (filter === null) {
    return true
  }
  return value.toLowerCase() === filter.toLowerCase()
}

/**
 * Filter for determining if two arrays share *any* common values and filtering based on that.
 * @param {array[string]} values
 * @param {array[string]} filters
 * @returns {boolean}
 */
export const inclusiveFilter = (values, filters) => {
  // Null checks
  if (filters === null) {
    return true
  }
  if (values === null) {
    return false
  }
  filters = filters.map(filter => filter.toLowerCase())

  //Check to see if ANY OF the filter values are in the list of ingredients.
  return values.some(value => filters.includes(value.toLowerCase()))
}
