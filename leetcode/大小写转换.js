var letterCasePermutation = function(S) {
  let res = [S]
  let len = S.length
  for(let i = 0; i < len; i++) {
      if(/[a-zA-Z]/.test(Number(S[i]))) {
          let temp = res.map(s => {
              let t = s[i].charCodeAt() > 96 ? s[i].toUpperCase() : s[i].toLowerCase()
              return s.substring(0, i) + t + s.substring(i + 1, len)
          })
          res = res.concat(temp)
      }
  }
  return res
};
// console.log(Number('a') === NaN) // naN不等于NaN
letterCasePermutation("a1b2")