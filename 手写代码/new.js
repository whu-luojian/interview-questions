/**
 * 1. 创建一个新对象
 * 2. 新对象的原型指向构造函数的原型
 * 3. 绑定this
 * 4. 确定返回值
 */
// create函数接收的第一个参数为构造函数，其余为构造函数的参数
 function create() {
   // 创建一个空对象
   let obj = {}
   // 获取构造函数
   let Con = Array.prototype.shift.call(arguments)
   // 链接到原型
   Object.setPrototypeOf(obj, Con.prototype)
   // 绑定this，执行构造函数
   let result = Con.apply(obj, arguments)
   // 如果构造函数返回的不是对象，则返回创建的新对象
   return typeof result === 'object' ? result : obj
 }