/*
write a fn hasPath that takes in an object representing the adjacency list of a directed acyclic graph & two nodes(src & dst).
The fn should return a boolean indicating whether there exists a path from src to dst.
*/

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
}

// DFS recursive solution
const hasPathDFS = (graph, src, dst) => {
  if (src === dst) return true

  for (var neighbor of graph[src]) {
      if (hasPathDFS(graph, neighbor, dst) === true) {
        return true
      }
  }
  return false
}

console.log(hasPathDFS(graph, 'f', 'k')) // true
console.log(hasPathDFS(graph, 'f', 'j')) // false
