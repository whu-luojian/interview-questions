/**
 * 找出start end之间所有的对称数
 * 方法一（推荐）：
 * 利用对称数对称的原理，先将数反转，在比较是否相等
 * @param {*} start 
 * @param {*} end 
 */
function findSymmetryNum(start, end) {
    let ans = []
    for(let i = start; i < end + 1; i ++){
        let j = + (i.toString().split("").reverse().join(""))
        if(i === j) {
            ans.push(i)
        }
    }
    return ans
}

/**
 * 方法二：
 * 依次判断对称位置的数是否相等来确定是否是对称数
 * 不够高效，因为每一个对称数需要判断 length/2 次
 * @param {*} start 
 * @param {*} end 
 */
function findSymmetryNum2(start, end) {
    let ans = []
    for(let i = start; i < end + 1; i ++) {
        let flag = true
        let j = i.toString()
        let len = j.length
        let mid = Math.floor(len / 2)
        for(let k = 0; k < mid; k ++){
            if(j.charAt(k) !== j.charAt(len - k - 1)) {
                flag = false
                break
            }
        }
        if(flag){
            ans.push(i)
        }
    }
    return ans
}

// 测试
console.log(findSymmetryNum(10, 100))
console.log(findSymmetryNum2(10, 100))