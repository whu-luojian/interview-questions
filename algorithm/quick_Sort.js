/**
 * 快速排序
 * 实现方式一：取数组中间值为基准，循环数组其他值，大于基准的放到
 * right数组，小于基准的放到left数组，再递归排序、合并left数组、
 * 基准和right数组
 * @param {*} arr 
 */
function quickSort(arr) {
	if(arr.length <= 1) {
		return arr
	}
	let base = Math.floor(arr.length / 2)
	let baseData = arr.splice(base, 1)[0]
	let left = []
	let right = []
	for(let i = 0; i < arr.length; i++){
		if(arr[i] < baseData) {
			left.push(arr[i])
		} else {
			right.push(arr[i])
		}
	}
	return quickSort(left).concat([baseData], quickSort(right))
}
// 测试
let arr = [2, 1, 4, 3, 6, 5]
arr = quickSort(arr)
console.log(arr)

/**
 * 经典快速排序算法：交换排序的一种
 * @param {*待排序的数组} arr 
 * @param {*数组的左下标} left
 * @param {*数组的右下标} right
 */
function quickSort1(arr, left, right) {
	left = left || 0
	right = right || arr.length - 1
	let low = left
	let high = right

	/**
	 * 如果默认采用arr[left]，即数组第一个作为基准，则基准可能偏大或偏小，不利于排序，
	 * 故可采用三数取中法确定基准：三数指数组的左端、中间、右端三个数，对比三数进行交换，
	 * 最终左中右的大小关系为中小大，再取数组的左端为基准，即三数的中间数为基准
	 */
	let mid = Math.floor((left + right) / 2)
	if(arr[left] > arr[right]){
		swap(arr, left, right)
	}
	if(arr[mid] > arr[right]){
		swap(arr, mid, right)
	}
	if(arr[mid] > arr[left]){
		swap(arr, mid, left)
	}

	let base = arr[left]   // 用base缓存基准值

	while (left < right) {
		//从左向右找到第一个小于基准的值
		while (left < right && arr[right] >= base) {
			right--
		}
		arr[left] = arr[right]   // 将left处的值替换成小于基准的值
		//从右向左找到第一个大于基准的值
		while (left < right && arr[left] <= base) {
			left++
		}
		arr[right] = arr[left]   // 将right处的值替换成成大于基准的值
	}
	/**
	 * 一轮过后left等于right，且为该轮排序后的基准索引，故把缓存的基准值base赋值给基准索引处
	 */
	arr[left] = base

	// 如果基准左边的个数大于1，则递归排序
	if(low < left - 1) {
		quickSort1(arr, low, left - 1)
	}
	// 如果基准右边的个数大于1，则递归排序
	if(high > left + 1) {
		quickSort1(arr, left + 1, high)
	}
}

/**
 * 交换数组i、j位置的值
 * @param {*} arr 
 * @param {*} i 
 * @param {*} j 
 */
function swap(arr, i, j){
	let temp = arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}

// 测试
let arr1 = [2, 1, 4, 3, 6, 5]
quickSort1(arr1)
console.log(arr1)