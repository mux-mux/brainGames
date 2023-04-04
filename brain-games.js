#!/usr/bin/env node
import helloUser from './src/cli.js';
import { getGameNum } from './src/index.js';
import { switchGame } from './src/index.js';

console.log('Welcome to the Brain Games!');

helloUser();

let game = getGameNum();

import startBrainEven from './bin/brain-even.js';
import startBrainCalc from './bin/brain-calc.js';
import startBrainNod from './bin/brain-nod.js';
import startBrainProgr from './bin/brain-progr.js';
import startBrainPrime from './bin/brain-prime.js';

switchGame(game);
// startBrainEven(name);
// startBrainCalc(name);
// startBrainNod(name);
// startBrainProgr();
// startBrainPrime();
