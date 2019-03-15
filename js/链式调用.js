/**
 * 题目要求
 * LazyMan("Jack").sleep(10).eat("dinner")
 * 输出：
 * Hi, this is Jack
 * //等待10s
 * Wake up after 10
 * Eat dinner
 */

 function LazyMan(name) {
   return new _lazyMan(name)
 }

 function _lazyMan(name) {
  this.name = name
  this.tasks = []
  this.tasks.push(() => {
    console.log(`Hi, this is ${this.name}`)
    this.next()
  })
  setTimeout(() => {
    this.next()
  })
 }

 _lazyMan.prototype.sleep = function(num) {
   console.log(this)
   this.tasks.push(() => {
     setTimeout(() => {
      console.log(`Wake up after ${num}`)
      this.next()
     }, num * 1000)
   })
   return this
 }

 _lazyMan.prototype.eat = function() {
  this.tasks.push(() => {
    console.log(`Eat dinner`)
    this.next()
  })
  return this
}
_lazyMan.prototype.next = function () {
  let task = this.tasks.shift()
  task && task()
}

LazyMan("Jack").sleep(10).eat("dinner")

