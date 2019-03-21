function flattenArr(arr) {
  let res = []
  for(let i = 0; i < arr.length; i++) {
    flatten(res, arr[i])
  }
  return res
}

function flatten(res, item) {
  if (item instanceof Array) {
    for(let i = 0; i < item.length; i++) {
      flatten(res, item[i])
    }
  } else {
    res.push(item)
  }
}

// 使用join打平数组,适用于值全为数字的数组
function flattenArr1(arr) {
  return arr.join().split(',').map(item => {
    return Number(item)
  })
}

// 使用原生的flat函数，只能打平一层
function flattenArr2(arr) {
  return arr.flat()
}

// 测试
let arr = [1, 2, [6], [2, 3, [4]]]
console.log(flattenArr(arr))