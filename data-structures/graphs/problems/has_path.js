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


// BFS iterative solution
const hasPathBFS = (graph, src, dst) => {
  const queue = [ src ]

  while (queue.length > 0) {
    const current = queue.shift()
    if (current === dst) return true

    for (var neighbor of graph[current]) {
      queue.push(neighbor)
    }
  }
  return false
}

console.log(hasPathBFS(graph, 'i', 'h')) // true
console.log(hasPathBFS(graph, 'g', 'j')) // false
