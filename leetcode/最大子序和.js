/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = Math.max.apply(null, nums)
  if(max <= 0) {
      return max
  }
  let left = nums.length - 1
  let right = 0
  let sum = 0
  let i = 0
  while (i < left) {
      sum += nums[i]
      i ++
      if (sum < 0) {
          sum = 0
          right = i
      }
  }
  sum = 0
  let j = left
  while(j >= right) {
      sum += nums[j]
      j --
      if (sum < 0) {
          sum = 0
          left = j
      }
  }
  return sum
};
let a = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(a))