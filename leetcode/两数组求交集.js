// 给定两个无序数组求交集，时间复杂度要求 O(nlogn) 或 O(n)
// 二分查找（O(nlogn)）
let intersection = function(nums1, nums2) {
  let len = nums1.length
  let res = []
  let obj = {}
  // 先排序
  nums2 = nums2.sort((a, b) => {
    return a - b
  })
  for(let i = 0; i < len; i++) {
    if(!obj[nums1[i]] && binarySearch(nums2, nums1[i])){
      res.push(nums1[i])
        obj[nums1[i]] = true
    }
  }
  return res
};

function binarySearch(arr, value) {
  let left = 0
  let right = arr.length - 1
  while(left <= right) {
    let mid = left + parseInt((right - left) / 2)
    if (arr[mid] === value) {
      return true
    } else if (arr[mid] > value) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return false
}

// 使用set
let intersection1 = function(nums1, nums2) {
  let set1 = new Set(nums1)
  let set2 = new Set(nums2)
  let res = []
  set1.forEach(val => {
    if(set2.has(val)) {
      res.push(val)
    }
  })
  return res
};

// 使用set + map(推荐)
let intersection1 = function(nums1, nums2) {
  let set = new Set(nums1)
  let map = new Map
  nums2.forEach(val => {
    map.set(val, true)
  })
  let res = []
  set.forEach(val => {
    if(map.has(val)) {
      res.push(val)
    }
  })
  return res
};

// 测试
let a = [4, 9, 5]
let b = [9, 4, 9, 8, 4]
console.log('………………')
console.log(intersection(a, b))
console.log('………………')