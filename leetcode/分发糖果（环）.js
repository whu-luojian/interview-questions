/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  let len = ratings.length
  let candy = Array(len).fill(1)
  // 正向循环一遍
  for(let i = 1; i < len; i++) {
    if(ratings[i] > ratings[i - 1]) {
      candy[i] = candy[i - 1] + 1
    }
  }
  // 正向边界处理，如果candy[0]变了，再循环更新一遍，直至不需更新为止
  while((ratings[0] > ratings[len - 1]) && (candy[0] <= candy[len - 1])) {
    candy[0] = candy[len - 1] + 1
    for(let i = 1; i < len; i++) {
      if(ratings[i] > ratings[i - 1]) {
        candy[i] = candy[i - 1] + 1
      }
    }
  }
  // 反向循环一遍
  for(let i = len - 2; i >= 0; i--) {
    if((ratings[i] > ratings[i + 1]) && (candy[i] <= candy[i + 1])) {
      candy[i] = candy[i + 1] + 1
    }
  }
  // 反向边界处理，如果candy[len - 1]变了，再循环更新一遍，直至不需更新为止
  while((ratings[0] < ratings[len - 1]) && (candy[0] >= candy[len - 1])) {
    candy[len - 1] = candy[0] + 1
    for(let i = len - 2; i >= 0; i--) {
      if((ratings[i] > ratings[i + 1]) && (candy[i] <= candy[i + 1])) {
        candy[i] = candy[i + 1] + 1
      }
    }
  }
  let sum = candy.reduce((a, b) => {
    return a + b
  })
  return sum
};

let ratings = [1,2,2]
console.log(candy(ratings)) // 5
let ratings1 = [3,4,1,2]
console.log(candy(ratings1)) // 10