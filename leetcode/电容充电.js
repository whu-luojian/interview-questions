// https://blog.csdn.net/u014251675/article/details/81572135
function fn(a, b, c) {
  if (c === a || c === b) {
    return 1
  }
  if (c > a && c > b) {
    return 0
  }
  let arr = [a, b, c].sort((a, b) => {
    return a - b
  })
  let m = 0
  if (arr[0] === c) {
    if ((arr[0] + arr[2]) % arr[1] === 0) {
      m = (arr[0] + arr[2]) / arr[1] * 2
    }
    if ((arr[2] - arr[0]) % arr[1] === 0) {
      m = m === 0 ? (arr[2] - arr[0]) / arr[1] * 2 : Math.min((arr[2] - arr[0]) / arr[1] * 2, m)
    }
  } else if (arr[1] === c) {
    if ((arr[2] - arr[0]) % arr[1] === 0) {
      m = (arr[2] - arr[0]) / arr[1] * 2
    }
  }
  return m
}

// 测试
console.log(fn(2, 6, 4))