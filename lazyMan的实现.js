/**
 * 题目要求
 * LazyMan("Jack").sleep(10).eat("dinner")
 * 输出：
 * Hi, this is Jack
 * //等待10s
 * Wake up after 10
 * Eat dinner
 */

/**
 * 方法一：
 * 借鉴任务队列 + express中间件思想，每执行完一个任务调用next执行下一个
 */
function LazyMan(name) {
    return new _LazyMan(name)
}

function _LazyMan(name) {
    this.name = name
    this.tasks = []
    let self = this
    let task = function() {
        console.log("Hi! this is " + self.name + "!")
        self.next()
    }
    this.tasks.push(task)
    // 下一个时间循环启动任务
    setTimeout(function(){
        self.next()
    }, 0)
}

_LazyMan.prototype.next = function(){
    let fn = this.tasks.shift()
    fn && fn()
}

_LazyMan.prototype.eat = function(name){
    let self = this
    let task = function() {
        console.log("Eat " + name)
        self.next()
    }
    this.tasks.push(task)
    // 实现链式调用
    return this
}

_LazyMan.prototype.sleep = function(time) {
    let self = this
    let task = function(){
        setTimeout(function(){
            console.log("Wake up after " + time + "s")
            self.next()
        }, time * 1000)
    }
    this.tasks.push(task)
    return this
}

// 测试
LazyMan("Jack").sleep(10).eat("dinner")

