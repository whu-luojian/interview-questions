console.log('begin')
setTimeout(() => {
  console.log('setTimeout 1')

  Promise.resolve().then(() => {
    console.log('promise 1')
    setTimeout(() => {
      console.log('setTimeout 2')
    })
  }).then(() => {
    console.log('promise 2')
  })

  new Promise(resolve => {
    console.log('a')
    resolve()
  }).then(() => {
    console.log('b')
  })
}, 0)
console.log('end')