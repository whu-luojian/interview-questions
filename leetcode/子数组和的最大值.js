// 时间复杂度O(n)
let maxSubArray = function(arr) {
  let len = arr.length
  let sum = arr[0]
  let max = arr[0]
  let i = 1
  while(i < len) {
    sum += arr[i]
    max = max > sum ? max : sum
    if (sum < 0) {
      sum = 0
    }
    i ++
  }
  return max
}


// 测试
let arr = [-5, -3, -1, -3, -2]
console.log(maxSubArray(arr))