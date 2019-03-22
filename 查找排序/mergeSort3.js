// 迭代排序
// https://blog.csdn.net/dugudaibo/article/details/79508198
function mergeSort(array) {
  let len = array.length
  let leftStart, leftEnd, rightStart, rightEnd
  for(let i = 1; i < len; i *= 2) {
    for(leftStart = 0; leftStart < len - i; leftStart = rightEnd + 1){
      leftEnd = leftStart + i - 1
      rightStart = leftEnd + 1
      rightEnd = leftEnd + i >= len ? len - 1 : leftEnd + i
      let help = []
      let p1 = leftStart
      let p2 = rightStart
      let j = 0
      while(p1 <= leftEnd && p2 <= rightEnd) {
        help[j++] = array[p1] < array[p2] ? array[p1++] : array[p2++]
      }
      while(p1 <= leftEnd) {
        help[j++] = array[p1++]
      }
      while(p2 <= rightEnd) {
        help[j++] = array[p2++]
      }
      for(let k = 0; k < help.length; k++) {
        array[leftStart + k] = help[k]
      }
    }
  }
  return array
}

// 测试
let a = [2,4,3]
console.log(mergeSort(a))