//1. 获取url中指定名称的参数值
// 法一: split分割字符串将查询参数解析成params对象
function getQueryString(url, name) {
  let index = url.indexOf('?')
  let query = url.substring(index + 1, url.length)
  let params = {}
  query.split('&').forEach(item => {
    let [key, value] = item.split('=').map(val => val.trim())
    params[key] = value
  })
  return params[name]
}

// 法二: 使用正则匹配需要参数
function getQueryString1(url, name) {
  let query = url.substr(url.indexOf('?') + 1)
  let reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`)
  let res = query.match(reg)
  if (res !== null) {
    return res[2]
  }
  return null
}

// 测试
let url = 'http://localhost:8080?a=3'
console.log(getQueryString(url, 'a'))
console.log(getQueryString1(url, 'a'))
let url1 = 'http://localhost:8080?a=3&b=4'
console.log(getQueryString(url1, 'b'))
console.log(getQueryString1(url1, 'b'))