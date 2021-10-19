/*
Write a fn 'countConstruct(target, wordBank)' that accepts a strings and an array of strings

The fn should return a count of the number of ways the `target` can be created by concatenating
elements of the wordBank array

You may reuse elements from the array as many times as needed
*/

const countConstruct = (target, wordBank, memo={}) => {
  if (target in memo) return memo[target]
  if (target === '') return 1

  let totalCount = 0

  for (var word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length)
      const numberOfWays = countConstruct(suffix, wordBank, memo)
      totalCount += numberOfWays
    }
  }
  memo[target] = totalCount
  return totalCount
}

console.log(countConstruct('abcdef', ['ab','abc','cd','def','abcd'])) // 1
console.log(countConstruct('skateboard',['bo','rd','ate','t','ska','sk','boar'])) // 0
console.log(countConstruct('menu',['m','en','nu', 'u'])) // 1
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e','ee','eeeee'])) //0
