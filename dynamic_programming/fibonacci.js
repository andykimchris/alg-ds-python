// memoization
// js object, keys will be args to fn, value will be the return value

// recursion
const fib = (n, memo = {}) => {
  if (n in memo) {
    return memo[n]
  }

  if (n <= 2) {
    return 1
  }

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
  return memo[n]
}

console.log(fib(5)) // 5
console.log(fib(6)) // 8
console.log(fib(40)) // 102334155

// iterative
const fibonacci = n => {
  const table = Array(n+1).fill(0)
  table[1] = 1

  for (var i = 0; i <= n; i++) {
    table[i + 1] += table[i]
    table[i + 2] += table[i]
  }
  return table[n]
}

console.log(fibonacci(7)) // 13
console.log(fibonacci(8)) // 21
console.log(fibonacci(50)) // 12586269025
