const isObject = obj => {
  return typeof obj === "object" && obj != null
}

const cloneDeep = (obj, hash = new WeakMap()) => {
  if (!isObject(obj)) {
    return obj
  }

  if (hash.has(obj)) { // 避免成环
    return hash.get(obj)
  }

  const type = [Date, RegExp, Set, Map, WeakMap, WeakSet]
  if (type.includes(obj.constructor)) {
    return new obj.constructor(obj)
  }

  const allDesc = Object.getOwnPropertyDescriptors(obj) // 遍历传入参数所有键的特性
  const cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc) // 继承原型
  hash.set(obj, cloneObj)

  for (let key of Reflect.ownKeys(obj)) {
    // Reflect.ownKeys(obj)可以拷贝不可枚举属性和Symbol类型
    // 注意：writable 为 false 的属性会赋值失败，因此 writable 为 false 的属性是浅拷贝
    cloneObj[key] = isObject(obj[key]) ? cloneDeep(obj[key], hash) : obj[key]
  }

  return cloneObj
}

// 测试
let obj = {
  bigInt: BigInt(12312),
  set: new Set([2]),
  map: new Map([
    ["a", 22],
    ["b", 33]
  ]),
  num: 0,
  str: "",
  boolean: true,
  unf: undefined,
  nul: null,
  obj: {
    name: "我是一个对象",
    id: 1
  },
  arr: [0, 1, 2],
  func: function () {
    console.log("我是一个函数")
  },
  date: new Date(0),
  reg: new RegExp("/我是一个正则/ig"),
  [Symbol("1")]: 1
}

Object.defineProperty(obj, "inenumerable", {
  enumerable: false,
  value: [1, [2]]
})

obj = Object.create(obj, Object.getOwnPropertyDescriptors(obj))
obj.loop = obj

let cloneObj = cloneDeep(obj)

console.log("obj", obj)
console.log("cloneObj", cloneObj)

for (let key of Reflect.ownKeys(cloneObj)) {
  if (isObject(cloneObj[key])) {
    // 注意：inenumerable 属性 writable 为 false, 为浅拷贝，输出 true
    console.log(`${key}相同吗？ `, cloneObj[key] === obj[key])
  }
}

// set相同吗？  false
// map相同吗？  false
// obj相同吗？  false
// arr相同吗？  false
// date相同吗？  false
// reg相同吗？  false
// innumerable相同吗？  true
// loop相同吗？  false
