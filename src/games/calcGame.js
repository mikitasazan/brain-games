import _ from 'lodash'

import { askQuestion, getAnswer, getResponseAfterRound } from '../cli.js'

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
}

const operators = Object.keys(operations)

const calcGame = () => {
  const a = _.random(0, 10)
  const b = _.random(0, 10)

  const operator = operators[_.random(0, operators.length - 1)]
  const expression = `${a} ${operator} ${b}`

  askQuestion(expression)

  const userAnswer = getAnswer('Your answer: ')
  const rightAnswer = operations[operator](a, b)

  const isUserRight = Number(userAnswer) === rightAnswer
  const resultString = getResponseAfterRound(isUserRight, userAnswer, rightAnswer)

  console.log(resultString)

  return isUserRight
}

export default calcGame
