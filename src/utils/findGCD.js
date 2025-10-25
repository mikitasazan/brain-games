const findGCD = (num1, num2) => {
  let a = num1
  let b = num2

  while (b !== 0) {
    [a, b] = [b, a % b]
  }

  return a
}

export default findGCD
