/**
 * 问题： 实现 add(1)(2)(3)
 */

/**
 * 方法1
 * @param {*} a 
 */
function add1(a) {
  let sum = a
  function addMore(b) {
    sum += b
    return addMore
  }
  addMore.valueOf = addMore.toString = function() {
    return sum
  }
  return addMore
}

console.log(add1(1)(2)(3))

/**
 * 柯里化解决方案1：参数长度固定
 */
const curry = fn => {
  return judge = (...args) => args.length === fn.length ? fn(...args) : (...args) => judge(...args, ...args)
}

const add2 = (a, b, c) => a + b + c
const curryAdd2 = curry(add2)

console.log(curryAdd2(1, 2)(3))

/**
 * 柯里化解决方案2：参数长度不固定
 */
const curry2 = fn => {
  let args = []
  return function temp(...newArgs) {
    if (newArgs.length) {
      args = [...args, ...newArgs]
      return temp
    } else {
      let val = fn.apply(this, args)
      args = []
      return val
    }
  }
}

const add3 = (...args) => args.reduce((a, b) => a + b)
const curryAdd3 = curry2(add3)

console.log(curryAdd3(1, 2)(3)())