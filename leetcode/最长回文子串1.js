// 暴力穷举法
// 假设s的长度为len，先看长为len的字符串是不是回文字符串，不是在看长为len-1的字符串
var longestPalindrome = function(s) {
  let len = s.length
  let j = 0
  while(true) {
      for(let i = 0; i <= j; i++) {
          let left = i
          let right = len - 1 - j + i
          let flag = true
          while(left < right) {
              if (s[left] !== s[right]) {
                  flag = false
                  break
              }
              left ++
              right --
          }
          if(flag) {
              return s.substr(i, len - j)
          }
          
      }
      j ++
  }
};

// 中心扩展法
function longestPalindrome1(str) {
  if(!str) {
    return ''
  }
  let start = 0, end = 0
  for(let i = 0; i < str.length; i ++) {
    let len1 = expandAroundCenter(str, i, i)
    let len2 = expandAroundCenter(str, i, i + 1)
    let len = Math.max(len1, len2)
    if (len > end - start) {
      start = i - parseInt((len - 1) / 2)
      end = i + parseInt(len / 2)
    }
  }
  return str.substring(start, end + 1)
}

function expandAroundCenter(str, left, right) {
  while(left >= 0 && right < str.length && str[left] === str[right]) {
    left --
    right ++
  }
  return right - left - 1
}
longestPalindrome1('sggd')