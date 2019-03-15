var maxDepth = function(root) {
  if(root === null) {
      return 0
  } else {
      let leftDepth = maxDepth(root.left)
      let rightDepth = maxDepth(root.right)
      return Math.max(leftDepth, rightDepth) + 1
  }
};
let a  = [3,9,20,null,null,15,7]
console.log(maxDepth(a))