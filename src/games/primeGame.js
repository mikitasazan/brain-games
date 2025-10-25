import _ from 'lodash'

import { askQuestion, getAnswer, getResponseAfterRound } from '../cli.js'
import { isPrime } from '../utils/index.js'
import { BOOLEAN_TO_ANSWER_MAP } from '../constants/index.js'

const primeGame = () => {
  const num = _.random(1, 1000)

  askQuestion(num)

  const isNumPrime = isPrime(num)

  const userAnswer = getAnswer('Your answer: ')
  const rightAnswer = BOOLEAN_TO_ANSWER_MAP[isNumPrime]

  const isUserRight = userAnswer === rightAnswer
  const resultString = getResponseAfterRound(isUserRight, userAnswer, rightAnswer)

  console.log(resultString)

  return isUserRight
}

export default primeGame
