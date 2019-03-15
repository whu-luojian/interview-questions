/**
 * 定义树的结点（使用孩子表示法）
 * @param {*结点数据} data 
 * @param {*结点左孩子} left 
 * @param {*结点右孩子} right 
 */
function Node(data, left, right){
    this.data = data
    this.left = left
    this.right = right
}

/**
 * 定义一个二叉排序树
 */
function BST(){
    this.root = null
}

/**
 * 二叉排序树的插入方法
 * 1. 根据数据创建结点
 * 2. 从根结点开始判断结点数据和插入数据的大小关系，确定结点的插入的位置
 * @param {*插入的数据} data 
 */
BST.prototype.insert = function(data){
    let node = new Node(data, null, null)
    if(this.root === null) {
        this.root = node
    } else {
        let current = this.root
        let parent
        while(current) {
            parent = current
            if(data < current.data){
                current = current.left
                if(current === null) {
                    parent.left = node
                    break
                }
            } else {
                current = current.right
                if(current === null) {
                    parent.right = node
                    break
                }
            }
        }
    }
}

/**
 * 翻转二叉树
 * @param {*要翻转的二叉树的根结点root} root 
 */
function invertTree(root){
    if(root !== null) {
        var temp = root.left
        root.left = root.right
        root.right = temp
        invertTree(root.left)
        invertTree(root.right)
    }
    return root
}

function _main(){
    let tree = new BST()
    let arr = [62, 88, 58, 47, 35, 73, 51, 99, 37, 93]
    arr.forEach(data => {
        tree.insert(data)
    })
    console.log(tree)
    invertTree(tree.root)
    console.log(tree)
}

_main()