function add(a) {
  let sum = a
  function addMore(b) {
    sum += b
    return addMore
  }
  addMore.valueOf = addMore.toString = function() {
    return sum
  }
  return addMore
}

console.log(add(1))
console.log(add(1)(2))
console.log(add(1)(2)(3))