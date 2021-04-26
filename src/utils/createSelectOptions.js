/**
 * Generates the object consisting of value/label pairs that React-Select expects for its options parameter.
 * @param {array} values
 * @returns {array} of the form [{ value: 'foo', label: 'Foo'}, {value: 'bar', label: 'Bar'},...]
 */

export const createSelectOptions = values => {
  return values.map(value => {
    return {
      value,
      label: value.charAt(0).toUpperCase() + value.slice(1),
    }
  })
}
