// 去掉三连重复（aaa）的最后一个，两对（aabb）的最后一个
function amendStr(str) {
  let len = str.length  //字符串长度
  let pre = ''
  let isAA = false  //当前位的前两位是否为AA型
  let isAAB = false //当前位的前三位是否为AAB型
  let res = ''
  for(let i = 0; i < len; i ++) {
    if (isAA && pre === str[i]) {
      continue
    } else if (!isAA && isAAB && pre === str[i]) {
      continue
    }else {
      isAAB = isAA
      if(pre === str[i]) {
        isAA = true
      } else {
        isAA = false
      }
      pre = str[i]
      res += str[i]
    }
  }
  return res
}

// 测试
let str = 'wooocccoooa'
console.log(amendStr(str)) // woocooa

// 法二：使用正则
// 法一
function validateStr(str) {
  // 先解决AAA型
  // /([a-z])\1{2}/i
  // 正则表达式中 \1, \2等要和括号()一起用，\1表示重复正则第一个圆括号匹配到的内容，{2}表示重复两次
  while(/([a-z])\1{2}/i.test(str)){
    str = str.replace(/([a-z])\1{2}/i,function(val) {
      return val.substring(0, 2)
    })
  }
  // 再解决AABB型
  // (?!\1)为领宽负向先行断言，用于修饰它前面的([a-z])，表示第一个([a-z])匹配到的内容后面不等于自己
  while(/([a-z])\1(?!\1)([a-z])\2/i.test(str)){
    str = str.replace(/([a-z])\1(?!\1)([a-z])\2/i,function(val) {
      return val.substring(0, 3)
    })
  }
  return str
}