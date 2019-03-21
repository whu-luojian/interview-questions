const STATUS = {
  PENGDING: 0,
  FULFILLED: 1,
  REJECTED: 2
}

class Promise {
  constructor(task) {
    this.status = STATUS.PENGDING
    this.resolveData = null
    this.rejectData = null
    this.onFulfilledList = []
    this.onRejectedList = []

    this.resolve = (data) => {
      if(this.status === STATUS.PENGDING){
        this.status = STATUS.FULFILLED
        this.resolveData = data
        this.onFulfilledList.forEach(fn => {
          fn(this.resolveData)
        })
      }
    }
    this.reject = (err) => {
      if(this.status === STATUS.PENGDING){
        this.status = STATUS.REJECTED
        this.rejectData = err
        this.onRejectedList.forEach(fn => {
          fn(this.resolveData)
        })
      }
    }

    this.resolvePromise = (data, resolve, reject) => {
      if(data instanceof Promise) {
        if(data.status === STATUS.PENGDING) {
          data.then(val => {
            this.resolvePromise(val, resolve, reject)
          })
        } else if (data.status === STATUS.FULFILLED) {
          resolve(data.resolveData)
        } else {
          reject(data.rejectData)
        }
      } else if (data !== null && data instanceof Object) {
        try {
          let then = data.then
          if(then instanceof Function) {
            then.call(data, val => {
              this.resolvePromise(val, resolve, reject)
            }, reject)
          } else {
            resolve(data)
          }
        } catch (err) {
          reject(err)
        }
      } else {
        resolve(data)
      }
    }

    try {
      task(this.resolve.bind(this), this.reject.bind(this))
    } catch (e) {
      this.reject(e)
    }
  }

  then(onFulfilled, onRejected) {
    let promise
    if(this.status === STATUS.FULFILLED) {
      promise = new Promise((resolve, reject) => {
        if(!(onFulfilled instanceof Function)) {
          resolve(this.resolveData)
        } else {
          let data = onFulfilled(this.resolveData)
          this.resolvePromise(data, resolve, reject)
        }
      })
    } else if (this.status === STATUS.REJECTED) {
      promise = new Promise((resolve, reject) => {
        if(!(onRejected instanceof Function)) {
          reject(this.rejectData)
        } else {
          let data = onRejected(this.rejectData)
          this.resolvePromise(data, resolve, reject)
        }
      })
    } else {
      promise = new Promise((resolve, reject) => {
        this.onFulfilledList.push(() => {
          if(!(onFulfilled instanceof Function)) {
            resolve(this.resolveData)
          } else {
            let data = onFulfilled(this.resolveData)
            this.resolvePromise(data, resolve, reject)
          }
        })
        this.onRejectedList.push(() => {
          if(!(onRejected instanceof Function)) {
            reject(this.rejectData)
          } else {
            let data = onRejected(this.rejectData)
            this.resolvePromise(data, resolve, reject)
          }
        })
      })
    }
    return promise
  }

  catch(rejectFn) {
    if(!(rejectFn instanceof Function)) {
      return
    }
    if(this.status === STATUS.PENGDING) {
      this.onRejectedList.push(() => {
        if(this.rejectData !== null) {
          rejectFn(this.rejectData)
        }
      })
    } else if (this.status === STATUS.REJECTED) {
      if(this.rejectData !== null) {
        rejectFn(this.rejectData)
      }
    }
  }
}

// 测试
let p = new Promise((resolve, reject) => {
  resolve(3)
}).then(3).then(val => {
  console.log(val)
})