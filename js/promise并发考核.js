/**
 * 基于Promise的执行数量控制
 *  class PromiseLimit<T> {
      constructor(private limit: number) {}
      
      waitForFree() {}
      
      runTask(task: () => Promise<T>)
    }

    async function main() {
      let limit = new PromiseLimit<void>(3)
      for (let i = 0; i < 1000; i++) {
        await limit.waitForFree()
        limit.runTask(async () => {
          /// 耗时任务，PromiseLimit会保证最多同时运行三个，第四个会被卡在waitForFree里
          /// 一旦有任务完成，后续任务自动执行
        })
      }
    }
 */


class PromiseLimit { 
  constructor(limit) {
    this.limit = limit
    this.handlingP = []
    this.num = 0
  }
  async waitForFree() {
    if (this.num < this.limit) {
      return
    } else {
      return new Promise((resolve, reject) => {
        Promise.race(this.handlingP).then(() => {
          resolve()
        })
      })
    }
  }
  
  async runTask(fn) {
    const p = new Promise(async (resolve, reject) => {
      this.num++
      await fn()
      this.num--
      resolve()
    }).finally(() => {
      const index = this.handlingP.findIndex(v => v === p)
      this.handlingP.splice(index, 1)
    })
    this.handlingP.push(p)
  }
}

const ctask = (i) => {
  return () => {
    return new Promise(async (resolve, reject) => {
      console.log(i)
      setTimeout(() => {
        resolve()
      }, 2000 * Math.random())
    })
  }
}

async function main() {
  let limit = new PromiseLimit(3)
  for (let i = 0; i < 10; i++) {
    await limit.waitForFree()
    limit.runTask(ctask(i))
  }
}

main()