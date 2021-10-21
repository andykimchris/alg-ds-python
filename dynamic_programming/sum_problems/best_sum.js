/*
Write a fn 'bestSum(targetSum, numbers)' that should return an array containing the shortest combination of elements
that add up to exactly the targetSum.

if there is a tie for the shortest combinations, return any single one.
*/

const bestSum = (targetSum, numbers, memo={}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return []
  if (targetSum < 0) return null


  let shortestCombination = null

  for (let num of numbers) {
    const remainder = targetSum - num
    const remainderCombination = bestSum(remainder, numbers, memo)
    if (remainderCombination !== null) {
      const combination = [ ...remainderCombination, num ]
        // if the combination is shorter than shortestCombination, Uupdate it
      if (shortestCombination === null || combination.length < shortestCombination.length) {
          shortestCombination = combination
      }
    }
  }

  memo[targetSum] = shortestCombination
  return shortestCombination
}

// m = target.sum
// n = numbers.length

// Brute force
// time: O(n^m * m)
// space: O(m^2)

// Memoized
// time: O(m^2 * n)
// space: O(m^2)

console.log(bestSum(7, [5,3,4,7])) // [7]
console.log(bestSum(8, [2,3,5])) // [3,5]
console.log(bestSum(8, [1,4,5])) // [4,4]
console.log(bestSum(100, [1,2,5,25])) // [25,25,25,25]


const how_sum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null)
  table[0] = []

  for (var i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
        for (var num of numbers) {
          const combination = [ ...table[i], num ]
          // check table[i + num] is not null
          if (!table[i + num] || table[i + num].length > combination.length) {
            table[i + num] = combination
          }
        }
    }
  }
  return table[targetSum]
}

console.log('iterative solution');
console.log(how_sum(6, [1,2,4])) // [2,4]
console.log(how_sum(6, [3,4])) // [3,3]
console.log(how_sum(12, [2,4,5])) // [2,5,5]
console.log(how_sum(100, [7,14])) // null
