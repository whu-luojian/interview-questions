function validateStr(str) {
  while(/([a-z])\1{2}/i.test(str)){
    str = str.replace(/([a-z])\1{2}/i,function(val) {
      return val.substring(0, 2)
    })
  }
  while(/([a-z])\1(?!\1)([a-z])\2/i.test(str)){
    str = str.replace(/([a-z])\1(?!\1)([a-z])\2/i,function(val) {
      return val.substring(0, 3)
    })
  }
  return str
}
let str = "wooooooow"
// str = str.replace(/([a-z])\1(?!\1)([a-z])\2/i,function(val) {
//   console.log(val)
//   return val.substring(0, 3)
// })
console.log(validateStr(str))