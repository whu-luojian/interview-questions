/**
 * 有n个房间，现在i号房间里的人需要被重新分配，分配的规则是这样的：先让i号房间里的人全都出来，
 * 接下来按照 i+1, i+2, i+3, ... 的顺序依此往这些房间里放一个人，n号房间的的下一个房间是1号房间，
 * 直到所有的人都被重新分配。现在告诉你分配完后每个房间的人数以及最后一个人被分配的房间号x，
 * 你需要求出分配前每个房间的人数。数据保证一定有解，若有多解输出任意一个解。
 */
/**
 * 示例
 */
/**
 * 
 * @param {*} n 房间数量
 * @param {*} last 最后一个人被分配的房间号
 * @param {*} rooms 分配后各房间人数
 */
// 回溯找到最小值的房间就是被分配的房间
function findOriginalRoom(n, last, rooms) {
  let num = 0
  last --
  let min =Math.min.apply(null, rooms)
  // 回溯找到第一个最小值
  while(true) {
    if(rooms[last] === min) {
      rooms = rooms.map((val) => {
        return val - min
      })
      rooms[last] = num + min * rooms.length
      return rooms
    }
    rooms[last] --
    last = last === 0 ? n - 1 : last - 1
    num ++
  }
}

// 测试
let n = 3, last = 1, rooms = [6, 5, 1]
console.log(findOriginalRoom(n, last, rooms))