import readlineSync from 'readline-sync';
import { showRules } from '../src/index.js';
import { makeRand } from '../src/index.js';
import { checkCorrect } from '../src/index.js';
import { showVictory } from '../src/index.js';

let successCount;
const game = 'startBrainProgr';

export default function startBrainProgr(name) {
  successCount = 0;

  const gameProccess = () => {
    showRules(game);
    const randStart = makeRand(30);
    const randGuessNum = makeRand(9);
    const randStep = makeRand(5);
    const progrArr = [];
    let numGuess;
    for (let i = 0; i < 10; i++) {
      i !== randGuessNum ? progrArr.push(randStart + randStep * i) : progrArr.push('...');
      numGuess = randStart + randStep * i;
    }
    console.log(`Question: ${progrArr.join(' ')}`);
    const answer = readlineSync.question('Your answer: ');
    if (checkCorrect(answer, numGuess, game, name)) {
      if (successCount < 2) {
        successCount++;
        gameProccess();
      } else {
        console.log(`Congratulations, ${name}!`);
        showVictory(name, game);
      }
    }
  };
  gameProccess();
}
