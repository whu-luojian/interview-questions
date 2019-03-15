// dijkstra算法，单源点最短路径问题，指定源点，求它到其余各个结点的最短路径

function dijkstra(n) {
  let dis = []
  for(let i = 1; i <= n; i ++) {
    dis[i] = e[1][i]
  }
  let book = Array(n).fill(0)
  book[1] = 1
  for(let i = 1; i <= n - 1; i++) {
    let min = -1
    let u
    for(let j = 1; j <= n; j++) {
      if(book[j] == 0 && dis[j] < min) {
        min = dis[j]
        u = j
      }
    }
    book[u] = 1
    for(let v = 1; v <= n; v++) {
      if(e[u][v] < min) {
        if(dis[v] > dis[u] + e[u][v]) {
          dis[v] = dis[u] + e[u][v]
        }
      }
    }
  }
}