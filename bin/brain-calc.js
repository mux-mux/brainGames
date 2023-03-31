import readlineSync from 'readline-sync';
import { showRules } from '../src/index.js';
import { makeRand } from '../src/index.js';
import { checkCorrect } from '../src/index.js';
import { showVictory } from '../src/index.js';

let successCount;
const game = 'startBrainCalc';

export default function startBrainCalc(name) {
  successCount = 0;

  const gameProccess = () => {
    showRules(game);
    const randNum1 = makeRand(10);
    const randNum2 = makeRand(10);
    const randNum = [randNum1, randNum2];
    const operator = makeRand() < 3 ? '+' : makeRand() > 3 && makeRand() < 6 ? '-' : '*';
    console.log(`Question: ${randNum1} ${operator} ${randNum2}`);
    const answer = readlineSync.question('Your answer: ');
    if (checkCorrect(answer, randNum, game, operator)) {
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
