// 原生Ajax
let xhr = new XMLHttpRequest()
xhr.open('post', url)
xhr.onload = function() {
  console.log(xhr.responseText)
}
let data = new FormData()
data.append('key', 'value')
xhr.send(data)

xhr.onreadystatechange = function() {
  if(xhr.readyState === 4) {
    if((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      console.log(xhr.responseText)
    }
  }
}