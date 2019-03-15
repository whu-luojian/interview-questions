const readline = require("readline"); //引入readline模块
const rl = readline.createInterface({ //创建readline实例
  input: process.stdin, //传入标准输入输出作为数据的输入输出流
  output: process.stdout
});
var lintCount = 0; //行数
var userCount = 0; //用户数
var groupCount = 0; //组数
var likeMap = {};

rl.on("line", function (line) {
  if (lintCount == 0) {
    userCount = parseInt(line);
    lintCount++;
  } else if (lintCount == 1) {
    var likeArray = line.split(" ");
    likeArray.forEach(function (likeVal, index) {
      if (likeMap[likeVal]) {
        likeMap[likeVal].push(index + 1);
      } else {
        likeMap[likeVal] = [index + 1]
      }
    })
    lintCount++;
  } else if (lintCount == 2) {
    groupCount = parseInt(line);
    lintCount++;
  } else {
    var valueArray = line.split(" ");
    var l = parseInt(valueArray[0]);
    var r = parseInt(valueArray[1]);
    var key = parseInt(valueArray[2]);
    var result = 0;
    if (likeMap[key]) {
      likeMap[key].forEach((index) => { //取map的值数组for循环
        if (index <= r && index >= l) {
          result++;
        }
      });
    }
    lintCount++;
    console.log(result);
    groupCount--;
    if (groupCount == 0) {
      lintCount = 0;
      process.exit(0);
    }
  }
})