/**
 * 非递归实现二分查找
 * @param {*有序数组} arr 
 * @param {*需要查找的值} value 
 */
function binarySearch(arr, value) {
    let low = 0
    let high = arr.length - 1
    while(low < high) {
        let mid = Math.floor((low + high) / 2)
        if(arr[mid] === value) {
            return mid
        } else if (value > arr[mid]) {
            low = mid + 1
        } else {
            high = mid - 1
        } 
    }
    return "not found"
}


/**
 * 递归实现二分查找
 * @param {*查询所用数组} arr 
 * @param {*要查询的值} value 
 * @param {*} low 
 * @param {*} high 
 */
function binarySearch2(arr, value, l, h) {
    let low = l || 0
    let high = h || arr.length - 1
    if(low > high){
        return "not found"
    }
    let mid = Math.floor((low + high) / 2)
    if(arr[mid] === value) {
        return mid
    } else if (arr[mid] > value) {
        high = mid - 1
        return binarySearch2(arr, value, low, high)
    } else {
        low = mid + 1
        return binarySearch2(arr, value, low, high)
    }
}


//头条面试题
/**
 * 从数组中找两个数，使得两个数之和为sum，找出一对即可
 * 时间复杂度为 O(nlogn)
 * 思路：排序 + 二分
 * @param {*} arr 
 * @param {*} sum 
 */
function twoSum(arr, sum) {
    // 排序的时间复杂度为 O(nlogn)
    arr.sort((a, b) => {
        return a - b
    })
    
    let len = arr.length
    // 二分的时间复杂度为 O(n), 整个循环的时间复杂度为 O(nlogn)
    for(let i = 0; i < len; i ++) {
        let other = sum - arr[i]
        let arr1 = arr.slice(i)
        let index = binarySearch(arr1, other)
        if(typeof index === "number") {
            return [arr[i], arr1[index]]
        }
    }
    return "not found"
}

// 测试
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(twoSum(arr, 5))
