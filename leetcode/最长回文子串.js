// var longestPalindrome = function(s) {
//   let len = s.length
//   let j = 0
//   while(true) {
//       for(let i = 0; i <= j; i++) {
//           let str = s.substr(i, len - i)
//           let str1 = str.split('').reverse().join('')
//           if(str === str1) {
//               return str
//           }
//       }
//       j ++
//   }
// };
// let s = 'babad'
// longestPalindrome(s)
var longestPalindrome = function(s) {
    let str = `^#${s.split('').join('#')}#$`;
    // map[i] 表示str[i] 为中心的回文子串半径
    let map = new Array(str.length);
    let mx = 0;
    let id = 0;
    let resLen = 0;
    let resCenter = 0;
    for (let i = 1; i < str.length; i++) {
        map[i] = mx > i ? Math.min(map[2 * id - i], mx - i) : 1;
        while (str[i + map[i]] == str[i - map[i]]) {
            map[i]++;
        }
        if (mx < i + map[i]) {
            mx = i + map[i];
            id = i;
        }
        if (resLen < map[i]) {
            resLen = map[i];
            resCenter = i;
        }
    }
    return s.substr((resCenter - resLen) / 2, resLen - 1);
};
let s = 'babad'
longestPalindrome(s)
let a = 021
console.log(parseInt(a, 8))