import _ from 'lodash'

import { askQuestion, getAnswer, getResponseAfterRound } from '../cli.js'

const progressionGame = () => {
  const start = _.random(0, 30)
  const step = _.random(1, 20)
  const length = 10

  const progression = Array.from({ length }, (value, index) => start + index * step)
  const targetIndex = _.random(0, length - 1)
  const hiddenProgression = progression.map((value, index) => (index === targetIndex ? '..' : value))

  const questionText = hiddenProgression.join(' ')

  askQuestion(questionText)

  const userAnswer = getAnswer('Your answer: ')
  const rightAnswer = progression[targetIndex]

  const isUserRight = Number(userAnswer) === rightAnswer
  const resultString = getResponseAfterRound(isUserRight, userAnswer, rightAnswer)

  console.log(resultString)

  return isUserRight
}

export default progressionGame
