// 函数防抖
function debounce(fn, delay) {
  let timeout = null
  return function(...args) {
    let context = this
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      fn.apply(context, args)
    }, delay)
  }
}

// 函数节流
function throttle(fn, threshhold) {
  let start = new Date()
  return function(...args) {
    let context = this
    let current = new Date()
    if (current - start > threshhold) {
      fn.apply(context, args)
      start = current
    }
  }
}