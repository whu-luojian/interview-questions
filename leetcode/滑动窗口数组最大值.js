/*
输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7] 
解释: 

  滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
*/
// 双端队列实现
var maxSlidingWindow = function(nums, k) {
  let len = nums.length
  // 边界条件判断
  if(len === 0 || k === 0) {
    return []
  }
  let res = []
  let queue = []
  for(let i = 0; i < len; i++) {
    // 窗口滑动时检查队首元素是否在窗口内，不在则剔除
    if(i >= k && queue[0] <= i - k) {
      queue.shift()
    }
    // 当队尾的元素不大于当前值时，出队，保证队头的元素永远最大
    while(queue.length && nums[queue[queue.length - 1]] <= nums[i]) {
      queue.pop()
    }
    // 当前元素入队
    queue.push(i)
    // 取出当前窗口的最大值
    if(i >= k - 1) {
      res.push(nums[queue[0]])
    }
  }
  return res
};

// 测试
let nums = [7, 2, 4], k = 2
console.log(maxSlidingWindow(nums, k))