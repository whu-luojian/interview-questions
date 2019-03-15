// 快速选择法（快排）
var findKthLargest = function(nums, k) {
  let left = []
  let right = []
  let pivot = Math.floor(nums.length / 2)
  let mid = nums.splice(pivot, 1)[0]
  for(let i = 0; i < nums.length; i ++) {
      if (nums[i] >= mid) {
          right.push(nums[i])
      } else {
          left.push(nums[i])
      }
  }
  if (right.length === k - 1) {
      return mid
  } else if (right.length >= k) {
      return findKthLargest(right, k)
  } else {
      return findKthLargest(left, k - right.length - 1)
  }
  
};
let nums = [3,2,3,1,2,4,5,5,6]
console.log(findKthLargest(nums, 5))