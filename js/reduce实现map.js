function reduceToMap(arr) {
  let res = []
  arr.reduce((a, b) => {
    a.push(b + 1)
    return a
  }, res)
  return res
}

// 测试
let arr = [1, 2, 3, 4, 5, 6]
console.log(reduceToMap(arr))