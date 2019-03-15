// 假设斐波那契数列第一项为1，第二项为2，即：1 2 3 5 8 13
// 递归，存在爆栈风险
function fibonacci(n) {
  if (n <= 2) {
    return n
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

// 尾递归, 解决爆栈问题
function fibonacci1(n, a, b) {
  if (n === 1) {
    return b
  } else {
    return fibonacci1(n - 1, b, a + b)
  }
}

fibonacci1(6, 1, 1)

// 动态规划
function fibonacci2(n) {
  if (n <= 2) {
    return n
  }
  let a = 1
  let b = 2
  let res = 0
  let i = 2
  while(i < n) {
    res = a + b
    a = b
    b = res
    i ++
  }
  return res
}

console.log(fibonacci(6))
console.log(fibonacci1(6, 1, 1))
console.log(fibonacci2(6))