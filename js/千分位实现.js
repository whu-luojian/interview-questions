function fn(number) {
  let str = number.toString()
  let res = ''
  let len = str.length
  for(let i = 1; i <= len; i++) {
    res = str[len - i] + res
    if ((i % 3 === 0) && i !== len) {
      res = ',' + res
    }
  }
  return res
}

// 测试
let n = 123456
console.log(fn(n))