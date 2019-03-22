// 归并排序
// 1.递归调用，存在爆栈的风险
function sort(array) {
  mergeSort(array, 0, array.length - 1)
  return array
}

function mergeSort(array, left, right) {
  if(left >= right) {
    return
  }
  let mid = parseInt(left + (right - left) / 2)
  mergeSort(array, left, mid)
  mergeSort(array, mid + 1, right)

  let help = []
  let i = 0
  let p1 = left
  let p2 = mid + 1
  while(p1 <= mid && p2 <= right) {
    help[i++] = array[p1] < array[p2] ? array[p1++] : array[p2++]
  }
  while(p1 <= mid) {
    help[i++] = array[p1++]
  }
  while(p2 <= right) {
    help[i++] = array[p2++]
  }
  for(let i = 0; i < help.length; i++) {
    array[left + i] = help[i]
  }
  return array
}

// 测试
let a = [2,3,1,5,6,0]
console.log(sort(a))