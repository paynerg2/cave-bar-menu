import { cocktailParams } from "./constants"

/**
 * Generates an object for filtering based on url query params.
 * @param {URLSearchParams} urlSearchParams : object containing information about query parameters.
 * @returns {object} of the form { baseSpirit: value, ingredients: [values], style: value, flavorProfile: [values]}
 */

export const getFilterParams = urlSearchParams => {
  return {
    baseSpirit: urlSearchParams.get(cocktailParams.BASE_SPIRIT),
    ingredients: urlSearchParams.has(cocktailParams.INGREDIENTS)
      ? urlSearchParams.get(cocktailParams.INGREDIENTS).split(",")
      : null,
    style: urlSearchParams.get(cocktailParams.STYLE),
    flavorProfile: urlSearchParams.has(cocktailParams.FLAVOR_PROFILE)
      ? urlSearchParams.get(cocktailParams.FLAVOR_PROFILE).split(",")
      : null,
  }
}
