#!/usr/bin/env node

import brainGames from './brain-games.js'
import { GCDGame } from '../src/games/index.js'

brainGames.startGame(
  GCDGame,
  'Find the greatest common divisor of given numbers.',
)
