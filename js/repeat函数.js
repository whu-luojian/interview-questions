/**
 * const repeatFunc = repeat(console.log, 4, 3000)
 * repeatFunc('helloworld') //会输出四次helloworld，每次间隔3秒
 */

/**
 * 
 * @param {*} fn 要重复的执行的函数
 * @param {*} times 执行次数
 * @param {*} wait 每次执行间的间隔
 */
function repeat(fn, times, wait) {
  return function func() {
    let args = [].slice.call(arguments, 0)
    let i = 0
    let fn1 = () => {setTimeout(() => {
      fn.apply(null, args)
      i ++
      if(i < times) {
        fn1()
      }
    }, wait)}
    fn1()
  }
}

// 使用promise
function repeat1(fn, times, wait) {
  return function() {
    let args = [].slice.call(arguments, 0)
    let p = Promise.resolve()
    for(let i = 0; i < times; i ++) {
      p = p.then(() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            fn.apply(null, args)
            resolve()
          }, wait)
        })
      })
    }
  }
}

// 使用async await
function repeat2(fn, times, wait) {
  return async function() {
    let args = [].slice.call(arguments, 0)
    for(let i = 0; i < times; i ++) {
      fn.apply(null, args)
      await waitTime(wait)
    }
  }
}

function waitTime(s) {
  return new Promise((resolve) => {
    setTimeout(resolve, s)
  })
}

// 测试
const repeatFunc = repeat2(console.log, 4, 3000)
repeatFunc('helloworld', 'whu')

