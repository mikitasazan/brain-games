import readlineSync from 'readline-sync'

const askQuestion = (text) => {
  console.log(`Question: ${text}`)
}

const getAnswer = text => readlineSync.question(text)

const askAndGetName = () => {
  console.log('Welcome to the Brain Games!')

  const name = getAnswer('May I have your name? ')

  console.log(`Hello, ${name}!`)

  return name
}

const congratulate = (name) => {
  console.log(`Congratulations, ${name}!`)
}

const sympathize = (name) => {
  console.log(`Let's try again, ${name}!`)
}

const getResponseAfterRound = (condition, userAnswer, rightAnswer) => {
  if (!condition) {
    return `${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`
  }

  return 'Correct!'
}

export {
  askQuestion,
  getAnswer,
  askAndGetName,
  getResponseAfterRound,
  congratulate,
  sympathize,
}
