// 1. \s
// 2. *
// 3. g
function myTrim(str) {
  return str.replace(/^\s*|\s*$/g, '')
}

let str = '  sasd d d  '
console.log(myTrim(str) === 'sasd d d')