function merge(left, right) {
  let result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  /* 当左右数组长度不等.将比较完后剩下的数组项链接起来即可 */
  return result.concat(left).concat(right);
}

function mergeSort(arr) {
  if (arr.length == 1) {
    return arr
  };
  let mid = Math.floor(arr.length / 2);
  let left_arr = arr.slice(0, mid),
    right_arr = arr.slice(mid);
  return merge(mergeSort(left_arr), mergeSort(right_arr));
}

// 测试
let arr = [12, 20, 30, 21, 15, 33, 26, 19, 40, 25];
console.log(mergeSort(arr))
