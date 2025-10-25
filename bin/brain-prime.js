#!/usr/bin/env node

import brainGames from './brain-games.js'
import { primeGame } from '../src/games/index.js'

brainGames.startGame(
  primeGame,
  'Answer "yes" if given number is prime. Otherwise answer "no".',
)
