/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.heap = []
  this.k = k
  for(let i = 0; i < nums.length; i++) {
      this.add(nums[i])
  }
};

/** 
* @param {number} val
* @return {number}
*/
KthLargest.prototype.add = function(val) {
  if(this.heap.length < this.k) {
      this.heap.push(val)
      this.createHeap(this.heap)
  } else if (val > this.heap[0]) {
      this.heap[0] = val
      this.heapAdjust(this.heap, 0)
  }
  return this.heap[0]
};

/** 
* Your KthLargest object will be instantiated and called as such:
* var obj = Object.create(KthLargest).createNew(k, nums)
* var param_1 = obj.add(val)
*/
KthLargest.prototype.createHeap = function(arr) {
  let len = arr.length
  // 初始化小顶堆，从第一个非叶子结点开始
  for(let i = Math.floor(len / 2) - 1; i >= 0; i--){
      this.heapAdjust(arr, i)
  }
};

KthLargest.prototype.heapAdjust = function(arr, i) {
  let len = arr.length
  let temp = arr[i]
  // 堆使用数组存储（层序遍历），对于节点i，其子节点为2i + 1 和 2i + 2
  for (let k = 2 * i + 1; k < len; k = 2 * k + 1) {
      // 找到孩子节点的最小值
      if (k + 1 < len && arr[k] > arr[k + 1]) {
        k = k + 1;
      }
      // 如果根节点大于孩子节点，根节点下沉
      if (temp > arr[k]) {
          let temp1 = arr[i];
          arr[i] = arr[k];
          arr[k] = temp1;
          i = k;
      } else {
          break;
      }
  }
};

let k = 3
let arr = [4, 5, 8, 2, 6, 7, 4]
let kl = new KthLargest(3, arr)