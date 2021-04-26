/**
 * Generates query parameter string.
 * @param {object} location object provided by @reach/router
 * @param {string} field
 * @param {string || array[string]} input
 * @returns Query Parameter string e.g. "?field1=input1&field2=input2,input3"
 */

export const getSearchParams = (location, field, input) => {
  let url = new URL(location.href)
  let searchParams = new URLSearchParams(url.search)
  if (searchParams.has(field)) {
    // Fully replace parameter to update
    searchParams.delete(field)
  }

  // Exit early if the filter value was removed, otherwise populate the query string
  if (Array.isArray(input)) {
    if (!input.length) {
      return searchParams
    }
    input = input.map(i => i.value).join(",")
  } else if (input === null) {
    return searchParams
  } else {
    input = input.value
  }

  searchParams.set(field, input)

  return searchParams
}
