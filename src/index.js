class BrainGames {
  constructor(getName, congratulate, sympathize, attemptsCount = 3) {
    this.name = getName()
    this.congratulate = congratulate
    this.sympathize = sympathize
    this.attemptsCount = attemptsCount
  }

  startGame = (game, description) => {
    if (!game) return

    console.log(description)

    for (let i = 0; i < this.attemptsCount; i += 1) {
      if (!game()) {
        this.sympathize(this.name)
        return
      }
    }

    this.congratulate(this.name)
  }
}

export default BrainGames
