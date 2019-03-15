// 以数字集合 1, 2 和 3 初始化数组。
// let nums = [1, 2, 3]
// let solution = new Solution(nums);

// 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。
// solution.shuffle();

// 重设数组到它的初始状态[1,2,3]。
// solution.reset();

// 随机返回数组[1,2,3]打乱后的结果。
// solution.shuffle();

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
// 洗牌算法：在前n-1张牌洗好的情况下，第n张牌随机与前n-1张牌的其中一张交换，或者不换
Solution.prototype.shuffle = function() {
    let res = this.nums.slice(0)
    let len = res.length
    for(let i = 1; i < len; i++) {
      let random = parseInt(Math.random() * (i + 1))
      if (random !== i) {
        let temp = res[i]
        res[i] = res[random]
        res[random] = temp
      }
    }
    return res
};

// 测试
let a = [1, 2, 3]
let solution = new Solution(a)
console.log(solution.shuffle())
console.log('…………………………………………………………')
console.log(solution.reset())
console.log('…………………………………………………………')
console.log(solution.shuffle())
console.log('…………………………………………………………')