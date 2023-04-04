import readlineSync from 'readline-sync';
import { showRules } from '../src/index.js';
import { makeRand } from '../src/index.js';
import { checkCorrect } from '../src/index.js';
import { showVictory } from '../src/index.js';

let successCount;
const game = 'startBrainNod';

export default function startBrainNod() {
  successCount = 0;

  const gameProccess = () => {
    showRules(game);
    const randNum1 = makeRand(15);
    const randNum2 = makeRand(15);
    const randNum = [randNum1, randNum2];
    console.log(`Question: ${randNum1} ${randNum2}`);
    const answer = readlineSync.question('Your answer: ');
    if (checkCorrect(answer, randNum, game)) {
      if (successCount < 2) {
        successCount++;
        gameProccess();
      } else {
        console.log(`Congratulations!`);
        showVictory(game);
      }
    }
  };
  gameProccess();
}
