/**
 * 定义链表的结点
 * @param {*结点数据} data 
 * @param {*结点指向的下一个结点} next 
 */
function Node(data, next){
    this.data = data
    this.next = next
}

/**
 * 定义一个单链表
 */
function LinkedList(head){
    this.head = head || null
}

/**
 * 单链表的插入
 * @param {*} data 
 */
LinkedList.prototype.insert = function(data){
    let node = new Node(data, null)
    if(this.head === null){
        this.head = node
    } else {
        let current = this.head
        let parent
        while(current){
            parent = current
            current = current.next
        }
        parent.next = node
    }
}

/**
 * 单链表的翻转
 * @param {*单链表} linkedList 
 */
function invertLinkedList(linkedList){
    let head = linkedList.head
    let newHead = null
    while (head !== null) {
        let temp = head.next
        head.next = newHead
        newHead = head
        head = temp
    }
    return new LinkedList(newHead)
}

function _main(){
    let linkedList = new LinkedList()
    let arr = [1, 2, 3, 4, 5, 6]
    arr.forEach(data => {
        linkedList.insert(data)
    })
    console.log(linkedList)
    console.log(invertLinkedList(linkedList))
}

_main()