function fn(arr, n, m) {
  arr.sort((a, b) => {
    return a - b
  })
  let max = 0
  if(m <= n) {
    max = arr[n - m]
    let i = 2
    while(arr[n - 1] > max * i){
      max = Math.min(arr[n - m + i - 1], arr[n - 1] / i)
      i ++
    }
  } else {
    max = Math.min(arr[0], arr[n - 1] / (m - n + 1))
  }
  return toDecimal(max)
}

let arr = [3,4,5]
console.log(fn(arr, 3, 4))

function toDecimal(x) {    
  let f = parseFloat(x);      
  f = Math.round(x*100)/100;    
  let s = f.toString()   
  let rs = s.indexOf('.')   
  if (rs < 0) {    
      rs = s.length;    
      s += '.'  
  }    
  while (s.length <= rs + 2) {    
      s += '0'   
  }    
  return s 
}
