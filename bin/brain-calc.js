#!/usr/bin/env node

import brainGames from './brain-games.js'
import { calcGame } from '../src/games/index.js'

brainGames.startGame(calcGame, 'What is the result of the expression?')
