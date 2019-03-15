var longestCommonPrefix = function(strs) {
  let len = strs.length
  let res = ''
  let flag = true
  let i = 0
  while(flag) {
      for (let j = 0; j < len && flag; j++) {
          if(!strs[j][i]) {
              flag = false
              break
          }
          if(res.length === i) {
              res += strs[j][i]
              continue
          }
          if(strs[j][i] !== res[i]) {
              flag = false
              break
          }
      }
      i ++
  }
  return res
};
let a = ["flower","flow","flight"]
longestCommonPrefix(a)