/**
 * 利用递归进行对象深拷贝
 * @param {*} obj 
 */
function deepColne(obj) {
  let newObj
  if(!(obj instanceof Object)) {
    return obj
  } 

  if (obj instanceof Date) {
    return new Date(obj)
  } 

  if (obj instanceof RegExp) {
    return new RegExp(obj)
  } 

  if (obj instanceof Array) {
    newObj = []
    obj.forEach(item => {
      newObj.push(deepColne(item))
    })
  } else {
    newObj = {}
    for(let key of Object.keys(obj)) {
      newObj[key] = deepColne(obj[key])
    }
  }
  return newObj
}

let a = {
  a: 2,
  c: {
    b: 2,
    e: [1, 1, 1]
  }
}
console.log(deepColne2(a))

/**
 * 利用宽度优先和队列实现深拷贝，解决出现环的问题
 * @param {*} obj 
 */
function deepColne2(obj) {
  if(!(obj instanceof Object)) {
    return obj
  }

  if(obj instanceof Date) {
    return new Date(obj)
  }

  if(obj instanceof RegExp) {
    return new RegExp(obj)
  }

  let newObj = obj instanceof Array ? [] : {}
  let srcQue = [obj]
  let srcVisitedQue = []
  let copyQue = [newObj]
  while(srcQue.length > 0) {
    let curSrcElement = srcQue.shift()
    let curCopyElement = copyQue.shift()
    srcVisitedQue.push(curSrcElement)

    for(let key in curSrcElement) {
      if(curSrcElement.hasOwnProperty(key)) {
        if(!(curSrcElement[key] instanceof Object)) {
          curCopyElement[key] = curSrcElement[key]
        } else if(curSrcElement[key] instanceof Date) {
          curCopyElement[key] = new Date(curSrcElement[key])
        } else if(curSrcElement[key] instanceof RegExp) {
          curCopyElement[key] = new RegExp(curSrcElement[key])
        } else {
          //判断是否出现环，即是否被访问
          let index = srcVisitedQue.indexOf(curSrcElement[key])
          if(index !== -1) {
            curCopyElement[key] = srcVisitedQue[index]
          } else {
            curCopyElement[key] = curSrcElement[key] instanceof Array ? [] : {}
            srcQue.push(curSrcElement[key])
            copyQue.push(curCopyElement[key])
          }
        }
      }
    }
  }
  return newObj
}