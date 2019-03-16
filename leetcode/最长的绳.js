// arr为绳长数组， m为需要裁剪成的绳数
var longestRope = function(arr, m) {
  arr.sort((a, b) => {
    return a - b
  })
  let lower = 0
  let higher = arr[arr.length - 1]
  while((higher - lower) > 0.001) {
    let mid = (lower + higher) / 2
    if (enough(arr, m, mid)) {
      lower = mid
    } else {
      higher = mid
    }
  }
  return toDecimal(lower, 2)
}

function enough(arr, m, ropeLength) {
  let sum = 0
  let len = arr.length
  for(let i = 0; i < len; i ++) {
    sum += parseInt(arr[i] / ropeLength)
    if (sum >= m) {
      return true
    }
  }
  return false
}

// 保留n位小数，不足补0
function toDecimal(number, n) {    
  number = number.toFixed(n)
  let index = number.indexOf('.')
  if (index < 0) {    
      index = s.length 
      number += '.'  
  }    
  while (number.length <= index + n) {    
    number += '0'   
  }    
  return number 
}

// 测试用例
let arr = [3, 4, 5]
console.log(longestRope(arr, 4))