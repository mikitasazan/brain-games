#!/usr/bin/env node

import brainGames from './brain-games.js'
import { evenGame } from '../src/games/index.js'

brainGames.startGame(
  evenGame,
  'Answer "yes" if the number is even, otherwise answer "no".',
)
