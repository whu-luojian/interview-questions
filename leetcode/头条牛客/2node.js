var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
let lineCount = 0;
let n = 0,
  m = 0,
  c = 0,
  unlegalCount = 0;
//颜色珠子的分布，位于哪些珠子上（位置）
let colorball = new Map();
rl.on('line', function (line) {
  var lineArray = line.trim().split(' ');
  //输入的是第一行
  if (0 == lineCount) {
    n = parseInt(lineArray[0]);
    m = parseInt(lineArray[1]);
    c = parseInt(lineArray[2]);
    lineCount++;
  }
  //录入每颗珠子的颜色所在位置，位置是从1开始
  else if (n >= lineCount) {
    let i = 0;
    while (i++ < lineArray[0]) {
      if (colorball.has(lineArray[i])) {
        colorball.get(lineArray[i]).push(lineCount); //把第几颗珠子位置压入
      } else {
        colorball.set(lineArray[i], [lineCount]);
      }
    }
    lineCount++;
  }
  //录入结束
  if (lineCount > n) {
    //判断有几个珠子的颜色不合格
    for (onecolor of colorball.values()) {
      for (let [index, v] of onecolor.entries()) {
        if (index == onecolor.length - 1) { //最后一颗
          if (n - v + onecolor[0] < m) {
            unlegalCount++;
            break;
          }
          continue;
        }
        if (onecolor[index + 1] - v < m) {
          unlegalCount++;
          break;
        }
      }
    }
    console.log(unlegalCount);
  }
})