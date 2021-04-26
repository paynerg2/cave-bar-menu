/**
 * Concatenates strings in an array into a commma separated list.
 * @param {array[string]} arr
 * @returns {string} of the form "arr[0],arr[1],...,arr[n-1]"
 */

export const toStringList = arr => {
  let newArr = []
  if (arr) {
    for (let i = 0; i < arr.length; i++) {
      newArr[i] = arr[i].toLowerCase()
    }
  }
  return newArr.join(", ")
}
