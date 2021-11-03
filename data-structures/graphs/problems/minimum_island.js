/*
Write a fn minimumIsland, that takes in a grid containing Ws and Ls. W represents water and L represents land.
The fn should return the size of the smallest island. An island is a vertically or horizontally connected region of land.

You may assume that the grid contains at least one island.
*/

const minimumIsland = grid => {
  const visited = new Set()

  let minSize = Infinity
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid.length; c++) {
      const size = exploreSize(grid, r, c, visited)
      minSize = size > 0 ? Math.min(size, minSize) : minSize
    }
  }
  return minSize
}

const exploreSize = (grid, r, c, visited) => {
  const rowInBounds = 0 < r && r < grid.length
  const colInBounds = 0 < c && c < grid[0].length

  if (!rowInBounds || !colInBounds) return 0

  if (grid[r][c] === 'W') return 0

  const pos = r + ',' + c
  if (visited.has(pos)) return 0
  visited.add(pos)

  let size = 1
  size += exploreSize(grid, r+1, c, visited)
  size += exploreSize(grid, r-1, c, visited)
  size += exploreSize(grid, r, c+1, visited)
  size += exploreSize(grid, r, c-1, visited)
  return size
}

const grid = [
    ['L','W','W','W','W'],
    ['L','W','W','W','W'],
    ['W','W','W','L','W'],
    ['W','W','L','L','W'],
    ['L','W','W','L','L'],
    ['L','W','W','W','W'],
]
console.log(minimumIsland(grid)) // 2
