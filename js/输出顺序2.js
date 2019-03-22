setTimeout(()=>{
  console.log('timer1')

  Promise.resolve().then(function() {
      console.log('promise1')
  })
}, 0)

setTimeout(()=>{
  console.log('timer2')

  Promise.resolve().then(function() {
      console.log('promise2')
  })
}, 0)



// 浏览器输出：
// time1
// promise1
// time2
// promise2

// Node输出：
// time1
// time2
// promise1
// promise2
/**
 * 在这个例子中，Node的逻辑如下：

最初timer1和timer2就在timers阶段中。开始时首先进入timers阶段，执行timer1的回调函数，打印timer1，并将promise1.then回调放入microtask队列，同样的步骤执行timer2，打印timer2；
至此，timer阶段执行结束，event loop进入下一个阶段之前，执行microtask队列的所有任务，依次打印promise1、promise2。

而浏览器则因为两个setTimeout作为两个MacroTask, 所以先输出timer1, promise1，再输出timer2，promise2。
 */
