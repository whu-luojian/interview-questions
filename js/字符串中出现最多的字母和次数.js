function getMostFrequentStr(str) {
  let max = 0
  let res = []
  let map = new Map()
  let len = str.length
  for(let i = 0; i < len; i++) {
    let num = map.has(str[i]) ? map.get(str[i]) + 1 : 1
    map.set(str[i], num)
    if (num > max) {
      max = num
      res = [str[i]]
    } else if (num === max) {
      res.push(str[i])
    }
  }
  return {
    count: max,
    letters: res
  }
}

// 测试
let str = 'abcgdhfryfem'
console.log(getMostFrequentStr(str))