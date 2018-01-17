function countWords (inputWords) {
  return inputWords.reduce(function (acc, currentValue) {
    if (currentValue in acc) { acc[currentValue]++ } else {
      acc[currentValue] = 1
    }
    return acc
  }, {})
}
module.exports = countWords

function equalObject (a, b) {
  let aProps = Object.getOwnPropertyNames(a)
  let bProps = Object.getOwnPropertyNames(b)
  if (aProps.length !== bProps.length) { return false } else {
    for (let i = 0; i < aProps.length; i++) {
      let propNameA = aProps[i]
      let propNameB = bProps[i]
      if (propNameA !== propNameB) { return false }
    }
    return true
  }
}

let obj1 = {a: 1, b: 2, c: 3}
let obj2 = {a: 1, b: 2, d: 3}
let obj3 = {a: 1, b: 2}
let fruits = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
let reducedFruits = {Apple: 2, Banana: 1, Durian: 3}

console.log('checking equalObject with same objects', equalObject(obj1, obj1) === true)
console.log('checking equalObject with objects of equal length but different keys', equalObject(obj1, obj2) === false)
console.log('checking equalObject with different lengths', equalObject(obj1, obj3) === false)
console.log('reducing objects correctly', equalObject(countWords(fruits), reducedFruits) === true)
