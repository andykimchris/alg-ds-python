/*
Write a fn 'canConstruct(target, wordBank)' that accepts a strings and an array of strings

The fn should return a boolean indicating whether or not the `target` can be created by concatenating
element of the wordBank array

You may reuse elements from the array as many times as needed
*/

const canConstruct = (target, wordBank, memo={}) => {
  if (target in memo) return memo[target]
  if (target === '') return true

  for (var word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length)
      if (canConstruct(suffix, wordBank, memo) === true) {
        memo[target] = true
        return true
      }
    }
  }

  memo[target] = false
  return false
}

console.log(canConstruct('abcdef', ['ab','abc','cd','def','abcd'])) // true
console.log(canConstruct('skateboard',['bo','rd','ate','t','ska','sk','boar'])) // false
console.log(canConstruct('menu',['m','en','nu'])) // false
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e','ee','eeeee','f'])) //true
