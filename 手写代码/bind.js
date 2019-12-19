Function.prototype.bind = function() {
  let fToBound = this // 缓存原函数
  let boundThis = arguments[0]  // 绑定函数的this值
  let boundArgs = Array.prototype.slice.call(arguments, 1) // 绑定函数的前置参数数组

  /**
   * bind只能被函数调用
   */
  if (typeof fToBound !== 'function') {
    throw new TypeError('Function.prototype.bind - ' + 'what is trying to be bound is not callable')
  }

  /**
   * 绑定函数
   * 绑定函数被new构造调用（this instanceof fBound为true）时，this不变
   */
  let fBound = function() {
    let _this = this instanceof fBound ? this : boundThis
    let args = boundArgs.concat(Array.prototype.slice.call(arguments))
    return fToBound.apply(_this, args)
  }

  /**
   * 维护原型关系
   * 绑定函数标准上是没有prototype，绑定函数被new构造调用相当于把原函数当做构造器，因此
   * polyfill时需要将绑定函数的prototype指向原函数的prototype
   */
  if(fToBound.prototype) {
    /**
     * 和标准保持一致，因为
     * let obj = new fBound()
     * obj.__proto__ === fToBound.prototype // true
     * 风险就是修改fBound.prototype就是修改fToBound.prototype
     */
    fBound.prototype = fToBound.prototype

    // fBound.prototype = Object.create(fToBound.prototype, {
    //   constructor: {
    //     value: fToBound
    //   }
    // })
  }

  return fBound
}

// 测试

let fToBound = function(a, b) {
  this.a = a
  this.b = b
}

fToBound.prototype.c = 3

let o = {}

let fbound = fToBound.bind(o, 1)

console.log(fToBound.name)
console.log(fbound.name)

let obj = new fbound(2)
console.log(obj.constructor === fToBound)
console.log(obj.__proto__ === fToBound.prototype)
console.log(obj.c)