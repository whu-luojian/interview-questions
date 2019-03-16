// 有1,4,16,64面值的硬币，买价格p的东西，给了面值1024的纸币，求找回硬币的最少个数
// 贪心算法
function giveChange(price) {
  let ans = 0
  let change = 1024 - price
  let arr = [64, 16, 4, 1] 
  for(let i = 0; i < arr.length; i ++) {
    ans += parseInt(change / arr[i])
    change %= arr[i]
  }
  return ans
}

// 测试
console.log(giveChange(200))