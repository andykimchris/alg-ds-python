/*
Write a fn islandCount, that takes in a grid containing Ws and Ls. W represents water and L represents land. 
The fn should return the number of islands on the grid. An island is a vertically or horizontally connected region of land.
*/

const islandCount = grid => {
    const visited = new Set()
    let count = 0

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid.length; c++) {
            if (explore(grid, r, c, visited) === true) {
                count++
            }
        }
    }
    console.log(visited);
    return count
}

const explore = (grid, r, c, visited) => {
    const rowInBounds = 0 < r && r < grid.length
    const colInBounds = 0 < c && c < grid[0].length
    // Check row or col is not out of bounds in grid
    if (!rowInBounds || !colInBounds) return false

    if (grid[r][c] === 'W') return false

    const position = r + ',' + c
    if (visited.has(position)) return false
    visited.add(position)

    // At this point, we are at an unvisited piece of land 
    explore(grid, r - 1, c, visited)
    explore(grid, r + 1, c, visited)
    explore(grid, r, c - 1, visited)
    explore(grid, r, c + 1, visited)

    return true
}

const grid = [
    ['W','L','W','W','W'],
    ['W','L','W','W','W'],
    ['W','W','W','L','W'],
    ['W','W','L','L','W'],
    ['L','W','W','L','L'],
    ['L','L','W','W','W'],
    ['W','W','W','L','W'],
]
console.log(islandCount(grid)) // 3