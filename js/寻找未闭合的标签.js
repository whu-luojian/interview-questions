/**
 * 寻找html中未闭合的标签
 */
let html = `
    <div>
        <h1>Hello Alibaba</h1>
    </div>
    <div>
        <p>
            <span>
                2018-01-01
        </p>
    </div>
    <div>
        <p>
            <span>
                2018-01-01
            </span> 
    </div>
`

function checkHtml() {
  let data = html.toString()
  let line = 1  //行数
  let pos = 1   //位置
  let result = []
  let i = 0
  while(i < data.length) {
    if(data[i] !== " " && /\s/.test(data[i])) {
      //换行
      line += 1
      pos = 0
    } else if (data[i]==="<") {
      i ++
      pos ++
      let tag = ""
      let flag = false
      while(data[i] !== ">") {       
        if(data[i] === "/") {
          flag = true         
        } else {
          tag += data[i]
        }     
        i ++
        pos ++
      }
      if(flag) { 
        //如果是闭合标签，则清除与之最近的开始标签
        for(let j = result.length -1; j >= 0; j --) {
          if(tag === result[j].tag) {
            result.splice(j, 1)
            break
          }
        }      
      } else {
        result.push({
          tag: tag,
          line: line,
          pos: pos
        })
      }   
    }
    i ++
    pos ++
  }
  return result
}
console.log(checkHtml(html))