function cal(arr) {
  let len = arr.length
  if(len === 1){
    return 1
  }
  if(len === 2){
    return 3
  }
  let index = arr.indexOf(Math.min.apply(Math, arr))
  let res = Array(len)
  res[index] = 1
  for(let i = index + 1; i < len - 1; i++){
    if(arr[i] > arr[i-1]) {
      res[i] = res[i - 1] + 1
    } else {
      if(res[i + 1] > res[i]) {
        res[i] = 1
      }
      res[i] = res[i - 1]
    }
  }
}