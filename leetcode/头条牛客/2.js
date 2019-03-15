let [n, m, c] = readline().split(' ').map(val => parseInt(val))
let map = new Map()
for(let i = 1; i <= n; i++) {
  let line = readline().split(' ').map(val => parseInt(val))
  let len = line.length
  if(len > 1) {
    for(let j = 1; j < len; j ++){
      if(map.has(line[j])) {
        map.get(line[j]).push(i)
      } else {
        map.set(line[j], [i])
      }
    }
  }
}
let count = 0
//判断有几个珠子的颜色不合格
for (colors of map.values()) {
  let len = colors.length
  for(let i = 0; i < len; i ++) {
    if(colors[i + 1] && (colors[i + 1] - colors[i] < m)) {
      count ++
      break
    }
    else if(i === len - 1) {
      if(n - colors[len - 1] + colors[0] < m){
        count ++
      }
    }
  }
}
print(count)