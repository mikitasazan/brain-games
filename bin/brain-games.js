#!/usr/bin/env node

import BrainGames from '../src/index.js'
import { askAndGetName, congratulate, sympathize } from '../src/cli.js'

const brainGames = new BrainGames(
  askAndGetName,
  congratulate,
  sympathize,
  3,
)

export default brainGames
