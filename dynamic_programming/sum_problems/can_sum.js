/*
Write a fn 'canSum(targetSum, numbers)' that should return a boolean indicating whether or not it is possible
to generate the targetSum using numbers from the array.

You may use an element from the array as many times as needed
You may assume all numbers are positive integers.

*/
 const canSum = (targetSum, numbers, memo={}) => {
   if (targetSum in memo) return memo[targetSum]

   if (targetSum === 0) return true
   if (targetSum < 0) return false

   for (let num of numbers) {
     const remainder = targetSum - num
     if (canSum(remainder, numbers, memo) === true) {
       memo[targetSum] = true
       return true
     }
   }

  memo[targetSum] = false
  return false
 }

console.log(canSum(7, [2,3])) // true
console.log(canSum(7, [5,3,4,7])) // true
console.log(canSum(7, [2,4])) // false
console.log(canSum(8, [2,3,5])) //true
console.log(canSum(300, [7,14])) //false

const can_sum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(false)
  table[0] = true

  for (var i = 0; i < targetSum; i++) {
    if (table[i]) {
      for (var num of numbers) {
        table[i + num] = true
      }
    }
  }
  return table[targetSum]
}

console.log('iterative solution');
console.log(canSum(5, [2,3])) // true
console.log(canSum(5, [1,1,4])) // true
console.log(canSum(5, [2,4])) // false
console.log(canSum(12, [2,7,5])) //true
console.log(canSum(100, [7,14])) //false
