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

console.log(findSymmetryNum(10,100))