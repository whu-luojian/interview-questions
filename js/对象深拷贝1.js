// 1.递归实现
function deepClone(obj) {
  if (!(obj instanceof Object)) {
    return obj
  }
  let res = obj instanceof Array ? [] : {}
  Object.keys(obj).forEach(key => {
    res[key] = deepClone(obj[key])
  })
  return res
}

// 测试
let a = {
  a: 1,
  b: {
    c: 2
  },
  d: [1, 2, 3]
}
console.log(deepClone2(a))

// 2.利用宽度优先和队列实现深拷贝，解决环的问题
function deepClone2(obj) {
  if (!(obj instanceof Object)) {
    return obj
  }
  let newObj = obj instanceof Array ? [] : {}
  let srcQueue = [obj]
  let srcVisitedQueue = []
  let copyQueue = [newObj]
  while(srcQueue.length > 0) {
    let curSrcEle = srcQueue.shift()
    let curCopyEle = copyQueue.shift()
    srcVisitedQueue.push(curSrcEle)
    Object.keys(curSrcEle).forEach(key => {
      if(!(curSrcEle[key] instanceof Object)) {
        curCopyEle[key] = curSrcEle[key]
      } else {
        if(srcVisitedQueue.indexOf(curSrcEle[key]) !== -1) {
          curCopyEle[key] = curSrcEle[key]
        } else {
          curCopyEle[key] = curSrcEle[key] instanceof Array ? [] : {}
          srcQueue.unshift(curSrcEle[key])
          copyQueue.unshift(curCopyEle[key])
        }
      }
    })
  }
  return newObj
}