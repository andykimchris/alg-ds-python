/*
Write a fn, shortestPath, that takes in an array of edges for an undirected graph and two nodes(nodeA, nodeB). The fn should return
the length of the shortest path between nodes A and B. Consider the length as the number of edges in the path, not the number of nodes
If there is no path between A and B, return -1
*/
const edges = [
  ['i','j'],
  ['k','i'],
  ['m','k'],
  ['k','l'],
  ['o','n']
]

const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges)
  const visited = new Set([ nodeA ])
  const queue = [ [nodeA,0] ]

  while (queue.length > 0) {
    const [ node, distance ] = queue.shift()
    if (node === nodeB) return distance

    for (var neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor)
        queue.push([ neighbor, distance + 1 ])
      }
    }
  }
  return -1
}

const buildGraph = edges => {
  const graph = {}

  for (var edge of edges) {
    const [ a,b ] = edge
    if (!(a in graph)) graph[a] = []
    if (!(b in graph)) graph[b] = []
    graph[a].push(b)
    graph[b].push(a)
  }
  return graph
}

console.log(buildGraph(edges))
console.log(shortestPath(edges, 'i', 'l')) // 2
console.log(shortestPath(edges, 'k', 'o')) // -1
console.log(shortestPath(edges, 'o', 'n')) // 1
