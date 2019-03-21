// 1. bind实现，返回一个新函数
Function.prototype.mybind = function(context) {
  // 缓存绑定的函数
  let _this = this
  // 获取bind时添加的参数
  let args = [...arguments].slice(1)
  // 返回一个函数
  return function F() {
    // 因为返回了一个函数，所有可以new F(),所有需要判断
    if(this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}

// 2. call实现
Function.prototype.mycall = function(context) {
  // 给context添加一个属性fn，等于被call的函数
  context.fn = this
  // 获取context后面的参数
  let args = [...arguments].slice(1)
  // 执行context.fn，这样fn的this指向就是contextle
  let result =  context.fn(...args)
  // 删除添加的fn属性
  delete context.fn
  return result
}

// 2. apply实现,跟call类似，只是接受参数数组
Function.prototype.myapply = function(context) {
  // 给context添加一个属性fn，等于被call的函数
  context.fn = this
  // 执行context.fn，这样fn的this指向就是contextle
  let result =  context.fn(...arguments[1])
  // 删除添加的fn属性
  delete context.fn
  return result
}

// 测试
let obj = {
  a: 4
}
let fn = function(b = 3) {
  return this.a + b
}
console.log(fn.mycall(obj, 4))
console.log(fn.myapply(obj, [5]))