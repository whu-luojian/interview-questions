// + 运算符优先于三元运算符
var val = 'smtg'
console.log('Value is' + (val === 'smtg') ? 'Something' : 'Nothing')

let a = [3,2,1]
// 未提供基数从第二项开始调用函数
a.reduce(function(b, c, d, e){
  console.log(b, c)
  return b + c
})

// 提供基数从第一项开始调用函数
a.reduce(function(b, c, d, e){
  console.log(b, c)
  return b + c
}, 0)


// 第一次 Math.pow(3, 2)
// 第二次 Math.pow(9, 1)，返回9
console.log(a.reduce(Math.pow))