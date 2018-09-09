function maxIpCount(str) {
  let len = str.length
  let ans = 0
  for (let i = 1; i < 4 && i < len - 2; i++) {
    for (let j = i + 1; j < i + 4 && j < len - 1; j++) {
      for (let k = j + 1; k < j + 4 && k < len; k++) {
        if (len - k > 3) {
          continue
        }
        let a = parseInt(str.substring(0, i))
        let b = parseInt(str.substring(i, j))
        let c = parseInt(str.substring(j, k))
        let d = parseInt(str.substring(k))
        if (a > 255 || b > 255 || c > 255 || d > 255) {
          continue
        }
        let ip = a + "." + b + "." + c + "." + d
        //避免00的情况
        if (ip.length < len + 3) {
          continue
        }
        ans += 1
      }
    }
  }
}