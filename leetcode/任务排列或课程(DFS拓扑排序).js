// Kahn算法
/*L一个用来存放已排序顶点的List
S一个用来存放如度为0的顶点List  
当S不为空时执行循环执行以下步骤
    从S中移除一个顶点(没有顺序要求，随意移除)n
    将n插入到L中
    循环遍历从n发出的边，对于所有的孩子节点m
        移除边<n,m>
        如果m的入度为0，则将m放入S中
如果循环结束后图中还有边则说明图中有环
否则L是拓扑排序的结果
*/
/**
 * 
 * @param {*} numCourses 课程总数
 * @param {*} prerequisites 先决条件
 */
var canFinish = function(numCourses, prerequisites) {
    let nodes = new Set() // 顶点
    let adjacencyList = new Map() // 邻接表
    // 初始化图
    let len = prerequisites.length
    for (let i = 0; i < len; i ++) {
      let from = prerequisites[i][1]
      let to = prerequisites[i][0]
      nodes.add(from)
      nodes.add(to)
      let edges = adjacencyList.has(from) ? adjacencyList.get(from).add(to) : new Set([to])
      adjacencyList.set(from, edges)
    }
    let empty = []
    let res = []
    nodes.forEach(item => {
      if(!(adjacencyList.has(item))) {
        empty.push(item)
      }
    })
    while(empty.length > 0) {
      let node = empty.shift()
      res.push(node)
      adjacencyList.forEach((edge, key) => {
        if(edge.has(node)) {
          edge.delete(node)
          if(edge.size === 0) {
            empty.unshift(key)
          }
        }
      })
    }
    // 已完成的课程等于顶点数量即可，不需要等于numCourses
    // 因为numCourses大于等于nodes.size（nodes为由优先级要求的课程）
    return res.length === nodes.size
};

// 测试
let a = 1
let b = []
console.log(canFinish(a, b))