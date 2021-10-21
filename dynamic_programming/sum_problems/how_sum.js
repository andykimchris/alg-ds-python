/*
Write a fn 'howSum(targetSum, numbers)' that should return an array containing any combination of elements
that add up to exactly the targetSum. If there is no combination, return null

if there are multiple combinations, return any single one.
*/

const howSum = (targetSum, numbers, memo={}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  for (var num of numbers) {
    const remainder = targetSum - num
    const remainderResult = howSum(remainder, numbers, memo)
    if (remainderResult !== null) {
      memo[targetSum] = [ ...remainderResult, num ]
      return memo[targetSum]
    }
  }

  memo[targetSum] = null
  return null
}

// TIME & SPACE
// m = target.sum
// n = numbers.length

// Brute force
// time: O(n^m * m)
// space: 0(m)

// Memoized
// time: 0(n*m^2)
// space: 0(m*m)

console.log(howSum(7, [2,3])) // [3,2,2]
console.log(howSum(7, [5,3,4,7])) // [4,3]
console.log(howSum(7, [2,4])) // null
console.log(howSum(8, [2,3,5])) // [2,2,2,2]
console.log(howSum(300, [7, 14])) //null

const how_sum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null)
  table[0] = []

  for (var i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
        for (var num of numbers) {
          table[i + num] = [ ...table[i], num ]
        }
    }
  }
  return table[targetSum]
}

console.log('iterative solution');
console.log(how_sum(5, [2,3])) // [3,2]
console.log(how_sum(5, [5,4])) // [5]
console.log(how_sum(5, [2,4])) // null
console.log(how_sum(12, [9,7,5])) // [7,5]
console.log(how_sum(100, [7,14])) // null
