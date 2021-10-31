/*
Write a fn largestComponent, that takes in the adjacency list of an undirected graph. The fn should return the size
of the largest component within the graph.
*/
graph = {
  0: [8,1,5],
  1: [0],
  5: [0,8],
  8: [0,5],
  2: [3,4],
  3: [2,4],
  4: [3,2]
}
const largestComponent = graph => {
  const visited = new Set()
  let largest = 0

  for (var node in graph) {
    const size = exploreSize(graph, node, visited)
    largest = Math.max(size, largest)
  }
  return largest
}

const exploreSize = (graph, current, visited) => {
  if (visited.has(String(current))) return 0

  visited.add(String(current))

  let size = 1
  for (var neighbor of graph[current]) {
    size += exploreSize(graph, neighbor, visited)
  }
  return size
}
console.log(largestComponent(graph)) // 4
