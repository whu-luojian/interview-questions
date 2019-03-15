// 运行超时
function fn(data, start, end, k) {
  return data.slice(start - 1, end).filter(val => {
    return val === k
  }).length
}


function fn1(map, start, end, k) {
  return (map.get(k) || []).filter(val => {
    return start - 1 <= val && val < end
  }).length
}

let data = [1,2,3,3,5]
let map = new Map()
let len = data.length
for(let i = 0; i < len; i++) {
  let val = map.has(data[i]) ? map.get(data[i]).concat(i) : [i]
  map.set(data[i], val)
}
console.log(fn1(map, 3, 5, 3))