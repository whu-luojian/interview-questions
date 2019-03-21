// 判断obj是否是target的实例
function myInstanceof(obj, target){
  let prototype = target.prototype
  obj = obj.__proto__
  while(true) {
    if (left === null || left === undefined) {
      return false
    }
    if (prototype === obj) {
      return true
    }
    obj = obj.__proto__
  } 
}