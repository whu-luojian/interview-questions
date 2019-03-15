/**
 * 冒泡排序: 交换排序
 * 时间复杂度：平均（O(n^2)）；最好（O(n)）；最坏（O(n^2)）
 * 外循环用于控制冒泡的轮数
 * 内循环用于从下往上两两对比交换
 * flag标志位用于判断排序是否完成，避免无意义的循环
 * @param {*} arr 
 */
function bubbleSort(arr) {
	let len = arr.length
	let i, j
	let flag = true // 标志位，如果此轮无交换，则为false，即代表已排序完成，无需进行下一轮交换
	for (i = 0; i < len && flag; i++) {
		flag = false
		for (j = len - 1; j > i; j--) {
			if (arr[j - 1] > arr[j]) {
				let temp = arr[j - 1]
				arr[j - 1] = arr[j]
				arr[j] = temp
				flag = true
			}
		}
	}
	return arr
}

// 测试
let arr = [2, 4, 6, 1, 5]
console.log(bubbleSort(arr))