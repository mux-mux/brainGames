import readlineSync from 'readline-sync';
import helloUser from '../src/cli.js';
import { showRules } from '../src/index.js';
import { makeRand } from '../src/index.js';
import { checkCorrect } from '../src/index.js';
import { showVictory } from '../src/index.js';

let successCount = 0;
const game = 'startBrainCalc';

export default function startBrainCalc() {
  successCount = 0;
  const name = helloUser();

  const gameProccess = () => {
    showRules(game);
    const randNum1 = makeRand();
    const randNum2 = makeRand();
    const randNum = [randNum1, randNum2];
    const operator = makeRand() < 300 ? '+' : makeRand() > 300 && makeRand() < 600 ? '-' : '*';
    console.log(`Question: ${randNum1} ${operator} ${randNum2}`);
    const answer = readlineSync.question('Your answer: ');
    if (checkCorrect(answer, randNum, game, operator)) {
      if (successCount < 2) {
        successCount++;
        gameProccess();
      } else {
        showVictory(name, game);
      }
    }
  };
  gameProccess();
}
