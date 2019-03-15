/**
 * 
 * @param {*} s 输入的字符串
 * @param {*} k 可替换次数
 */
var characterReplacement = function(s, k) {
  let max = 0, start = 0, end = 0, cur = 0
  let counts = {} // 记录当前窗口中各字母出现的次数
  while(end < s.length) {
    counts[s[end]] = !counts[s[end]] ? 1 : counts[s[end]] + 1 // 更新窗口中当前字母的次数
    cur = Math.max(cur, counts[s[end]]) // cur为当前窗口中出现次数的字母的次数
    while(end - start + 1 - cur > k) {  // 如果当前窗口大小减去窗口中出现次数的字母的次数大于k
      counts[s[start]] -- // 将当前窗口最左边的字符的次数减1，因为窗口要右移
      start ++ // 窗口右移一位
    }
    max = Math.max(max, end - start + 1)
    end ++
  }
  return max
};

// 测试
let s = 'AABABBA', k = 1
console.log(characterReplacement(s, k))