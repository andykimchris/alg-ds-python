/*
Write a fn 'allConstruct(target, wordBank)' that accepts a strings and an array of strings

The fn should return a 2D array containing ALL of the arrays that the the `target` can be created by concatenating
elements of the wordBank array.
Each element of the array should represent one combination that constructs the `target`

You may reuse elements from the array as many times as needed
*/

const allConstruct = (target, wordBank, memo={}) => {
  if (target in memo) return memo[target]
  if (target === '') return [[]]

  let result = []

  for (var word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length)
      const suffixWays = allConstruct(suffix, wordBank, memo)
      const targetWays = suffixWays.map(way => [word, ...way])
      result.push(...targetWays)
    }
  }
  memo[target] = result
  return result
}

console.log(allConstruct('abcdef', ['ab','abc','cd','def','abcd']))
// [ [ 'abc', 'def' ] ]
console.log(allConstruct('skateboard',['bo','rd','ate','t','ska','sk','boar']))
// []
console.log(allConstruct('purple',['purp','p','ur', 'le', 'purpl']))
// [ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ] ]
console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e','ee','eeeee']))
// []
