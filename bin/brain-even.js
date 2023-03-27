import readlineSync from 'readline-sync';
import helloUser from '../src/cli.js';
import { showRules } from '../src/cli.js';
import { makeRand } from '../src/cli.js';
import { checkCorrect } from '../src/cli.js';
import { tryAgain } from '../src/cli.js';
import { showVictory } from '../src/cli.js';

let successCount = 0;
const game = startBrainEven;

export default function startBrainEven() {
  successCount = 0;
  const name = helloUser();

  const gameProccess = () => {
    showRules();
    const randNum = makeRand();
    console.log('Question: ' + randNum);
    const answer = readlineSync.question('Your answer: ');
    if (checkCorrect(answer, randNum)) {
      if (successCount < 2) {
        successCount++;
        gameProccess();
      } else {
        showVictory(name, game);
      }
    } else {
      tryAgain(name, game);
    }
  };
  gameProccess();
}
