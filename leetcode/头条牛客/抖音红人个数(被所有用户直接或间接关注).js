/**
 * 计算抖音红人个数
 * @param {*用户数} n 
 * @param {*用户之间的关注关系对，如[2, 1]表示2关注1} data 
 */
function count(n, data) {
  let obj = {}
  let ans = 0
  for (let i = 0; i < data.length; i++) {
    let a = data[i][0]
    let b = data[i][1]
    if (obj[b]) {
      obj[b].push(a)
    } else {
      obj[b] = [a]
    }
  }
  for (let key of Object.keys(obj)) {
    obj[key] = Array.from(new Set(obj[key]))
    let arr = obj[key]
    let len = arr.length
    let i = 0
    while (i < len) {
      let j = arr[i]
      if (obj[j] && obj[j].length > 0) {
        obj[j].forEach(item => {
          if (item !== parseInt(key) && !arr.includes(item)) {
            arr.push(item)
          }
        })
      }
      len = arr.length
      i++
    }
  }
  for (let key of Object.keys(obj)) {
    if (obj[key].length === n - 1) {
      ans += 1
    }
  }
  return ans
}
let n = 3
let data = [
  [1, 2],
  [2, 1],
  [2, 3]
]
console.log(count(n, data))