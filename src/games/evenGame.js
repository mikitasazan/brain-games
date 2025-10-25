import _ from 'lodash'

import { BOOLEAN_TO_ANSWER_MAP } from '../constants/index.js'
import { askQuestion, getAnswer, getResponseAfterRound } from '../cli.js'
import { isEven } from '../utils/index.js'

const evenGame = () => {
  const num = _.random(1, 1000)

  askQuestion(num)

  const isNumEven = isEven(num)

  const userAnswer = getAnswer('Your answer: ')
  const rightAnswer = BOOLEAN_TO_ANSWER_MAP[isNumEven]

  const isUserRight = userAnswer === rightAnswer
  const resultString = getResponseAfterRound(isUserRight, userAnswer, rightAnswer)

  console.log(resultString)

  return isUserRight
}

export default evenGame
