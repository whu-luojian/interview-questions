function getMostFrequentWord(str) {
  let words = str.split(/\W+/)  // \W非字母和数字符号
  let countObj = {}
  let max = 0      //最大次数
  let result = []  //出现次数最多的单词，可能有多个，故为数组
  words.forEach(word => {
    countObj[word] = countObj.hasOwnProperty(word) ? countObj[word] + 1 : 1
    if(countObj[word] > max) {
      max = countObj[word]
      result = [word]
    } else if (countObj[word] === max) {
      result.push(word)
    }
  })
  return {
    words: result,
    count: max
  }
}
let str = "one sheep, one sheep, two"
console.log(getMostFrequentWord(str))

//正则判断一个域名是否属于腾讯子域名
console.log((/^https?:\/\/([^\/.]*.)?qq.com/).test("https://a.qq.com"))