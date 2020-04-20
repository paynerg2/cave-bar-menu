export const toStringList = arr => {
  let newArr = []
  if (arr) {
    for (let i = 0; i < arr.length; i++) {
      newArr[i] = arr[i].toLowerCase()
    }
  }
  return newArr.join(", ")
}
