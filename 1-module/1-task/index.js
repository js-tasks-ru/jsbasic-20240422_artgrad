function factorial(n) {

  let firstStep = 1
  for (let i = 1; i <= n; ++i) { // выведет выше 1 (при n = 4 - 1,2,3,4)
    firstStep *= i
  }
  return firstStep
}

// 4! = 4*3*2*1

console.log(factorial(4))
console.log(factorial(3))
console.log(factorial(1))
console.log(factorial(0))

// факториал 0 и 1 = 1
