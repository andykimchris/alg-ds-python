/*
Write a fn connectedComponentsCount, that takes in the adjacency list of an undirected graph. The fn should return the number
of connected components within the graph.
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

const connectedComponentsCount = graph => {
  const visited = new Set()
  let count = 0

  for (var node in graph) {
    if (explore(graph, node, visited) === true) {
      console.log('visited', visited)
      count += 1
    }
  }
  return count
}

const explore = (graph, current, visited) => {
  // String() ensures we keep nodes as strings NOT numbers
  if (visited.has(String(current))) return false

  visited.add(String(current))

  for (var neighbor of graph[current]) {
    explore(graph, neighbor, visited)
  }
  return true
}

console.log(connectedComponentsCount(graph)) // 2
