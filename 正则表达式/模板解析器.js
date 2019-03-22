let data = {
  name: "luojian",
  isHandsome: true
}

let template = "<div><span>{{data.name}} is {{data.isHandsome ? 'handsome' : 'cute'}}</span></div>"

function templateParser(template, data){
  /* 
   1. replace函数返回新值，不影响旧值；replace函数第二个参数接受一个函数, 函数的第一个参数为匹配的字符串，接下来的参数为子表达式匹配的字符串
   如 item 为 {{data.name}}, exp 为 data.name
   2. 正则表达式需要加 ? 表示非贪婪模式，即匹配到第一个 }} 处
   3. new Function 接受的参数：最后一个表示函数表达式， 之前的参数表示函数接收的参数
  */
  let newTemplate = template.replace(/\{\{(.+?)\}\}/g, function(item, exp){
      let fn = new Function("data", "return " + exp)
      return fn(data)
  })
  // 或者使用正则断言匹配出被{{}}包裹的表达式, 替换表达式后再替换掉{{}}
  // let newTemplate = template.replace(/(?<={{).+?(?=}})/g, function(item){
  //     let fn = new Function("data", "return " + item)
  //     return fn(data)
  // }).replace(/[{}]/g, "")
  return newTemplate
}
console.log(templateParser(template, data))