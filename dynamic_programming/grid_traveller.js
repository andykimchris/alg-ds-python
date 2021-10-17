/*
Say that you are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel to the
bottom-right corner. You may only move down or right.

gridTraveler(2,3) i.e a -> f
[ a,b,c,
  d,e,f ]
 There are 3 ways to travel on this grid.
    b -> c -> f
    d -> e -> f
    b -> e -> f
*/

/*
 m = rows
 n = columns
*/

const gridTraveler = (m, n, memo={}) => {
  const key = m + ',' + n
  if (key in memo) {
    return memo[key]
  }
  if (m == 1 && n == 1) return 1
  if (m == 0 || n == 0) return 0

  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)
  return memo[key]
}

console.log(gridTraveler(1,1)) // 1
console.log(gridTraveler(3,3)) // 6

// order or rows and columns doesn't matter
console.log(gridTraveler(2,3)) // 3
console.log(gridTraveler(3,2)) // 3

console.log(gridTraveler(18,18)) // 2333606220
