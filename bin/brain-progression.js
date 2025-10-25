#!/usr/bin/env node

import brainGames from './brain-games.js'
import { progressionGame } from '../src/games/index.js'

brainGames.startGame(progressionGame, 'What number is missing in the progression?')
