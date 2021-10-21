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

const can_construct = (target, wordBank) => {
  const table = Array(target.length + 1).fill(false)
  table[0] = true

  for (var i = 0; i < target.length; i++) {
    if (table[i]) {
      for (var word of wordBank) {
        // if the word matches the characters starting at position 1
        if (target.slice(i, i + word.length) === word) {
          table[i + word.length] = true
        }
      }
    }
  }
  return table[target.length]
}

console.log('iterative solution');
console.log(can_construct('abcdef', ['ab','abc','cd','def','abcd'])) // true
console.log(can_construct('skateboard',['bo','rd','ate','t','ska','sk','boar'])) // false
console.log(can_construct('menu',['m','en','nu'])) // false
console.log(can_construct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e','ee','eeeee'])) // false
