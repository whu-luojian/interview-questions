/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let len = ratings.length
    let candy = Array(len).fill(1)
    for(let i = 1; i < len; i++) {
      if(ratings[i] > ratings[i - 1]) {
        candy[i] = candy[i - 1] + 1
      }
    }
    for(let i = len - 2; i >= 0; i--) {
      if((ratings[i] > ratings[i + 1]) && (candy[i] <= candy[i + 1])) {
        candy[i] = candy[i + 1] + 1
      }
    }
    let sum = candy.reduce((a, b) => {
      return a + b
    })
    return sum
};