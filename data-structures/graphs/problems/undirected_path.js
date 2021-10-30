/*
Write a fn, undirectedPath, that takes in an array of edges for an undirected graph and two nodes(nodeA, nodeB). The fn should return
a boolean indicating whether or not there exists a path between nodeA and nodeB.
*/
const edges = [
  ['i','j'],
  ['k','i'],
  ['m','k'],
  ['k','l'],
  ['o','n']
]

// convert edges list to adjacency list to make it easier to traverse
const buildGraph = edges => {
  const graph = {}

  for (var edge of edges) {
    const [a, b] = edge
    if (!(a in graph)) graph[a] = []
    if (!(b in graph)) graph[b] = []
    graph[a].push(b)
    graph[b].push(a)
  }
  return graph
}

console.log(buildGraph(edges))

const hasPath = (graph, src, dst, visited) => {
  if (src === dst) return true
  // confirm we aren't repeating a node in a cycle
  if (visited.has(src)) return false

  visited.add(src)

  for (var neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited) === true) {
      return true
    }
  }
  return false
}

const undirectedPath  = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges)
  // create a set to track visited nodes
  return hasPath(graph, nodeA, nodeB, new Set())
}

console.log(undirectedPath(edges, 'i', 'l')) // true
console.log(undirectedPath(edges, 'j', 'm')) // true
console.log(undirectedPath(edges, 'k', 'n')) // false
console.log(undirectedPath(edges, 'l', 'o')) // false
