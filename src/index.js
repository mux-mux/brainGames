import startBrainEven from '../bin/brain-even.js';
import startBrainCalc from '../bin/brain-calc.js';
import startBrainNod from '../bin/brain-nod.js';
import startBrainProgr from '../bin/brain-progr.js';
import startBrainPrime from '../bin/brain-progr.js';
import readlineSync from 'readline-sync';
//------------------------------------------------------------------gameNum
export function getGameNum() {
  const gameNum = readlineSync.question(`
Swith the Game [1 - 5]: 
1: isEven
2: Math Calc
3: Nod
4: Fill Progression
5: isPrime
`);
  switch (gameNum) {
    case '1':
      switchGame('startBrainEven');
      break;
    case '2':
      switchGame('startBrainCalc');
      break;
    case '3':
      switchGame('startBrainNod');
      break;
    case '4':
      switchGame('startBrainProgr');
      break;
    case '5':
      switchGame('startBrainPrime');
      break;
    default:
      break;
  }
}
//------------------------------------------------------------------switchGame
export function switchGame(game) {
  switch (game) {
    case 'startBrainEven':
      startBrainEven();
      break;
    case 'startBrainCalc':
      startBrainCalc();
      break;
    case 'startBrainNod':
      startBrainNod();
      break;
    case 'startBrainProgr':
      startBrainProgr();
      break;
    case 'startBrainPrime':
      startBrainPrime();
      break;
    default:
      return;
  }
}
//------------------------------------------------------------------showRules
export function showRules(game) {
  switch (game) {
    case 'startBrainEven':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'startBrainCalc':
      console.log('What is the result of the expression?');
      break;
    case 'startBrainNod':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 'startBrainProgr':
      console.log('What number is missing in the progression?');
      break;
    case 'startBrainPrime':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      break;
    default:
      return;
  }
}
//------------------------------------------------------------------showMessage
export function showMessage(result, game, answer, correct) {
  if (result) {
    console.log('Correct!');
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correct}".`);
    showVictory(game);
  }
}
//------------------------------------------------------------------makeRand
export function makeRand(max) {
  return Math.floor(Math.random() * max + 1);
}
//------------------------------------------------------------------checkCorrect
export function checkCorrect(answer, randNum, game, operator = '+') {
  let result;
  if (game === 'startBrainEven') {
    result = randNum % 2;
    if (result === 0 && answer === 'yes') {
      showMessage(1, game, answer, result);
      return 1;
    } else if (result && answer === 'no') {
      showMessage(1, game, answer, result);
      return 1;
    } else {
      showMessage(0, game, answer, result);
      return 0;
    }
  } else if (game === 'startBrainCalc') {
    switch (operator) {
      case '+':
        result = randNum.reduce((accum, curr) => accum + curr);
        if (+answer === result) {
          showMessage(1, game, answer, result);
          return 1;
        } else {
          showMessage(0, game, answer, result);
          return 0;
        }
      case '-':
        result = randNum.reduce((accum, curr) => accum - curr);
        if (+answer === result) {
          showMessage(1, game, answer, result);
          return 1;
        } else {
          showMessage(0, game, answer, result);
          return 0;
        }
      case '*':
        result = randNum.reduce((accum, curr) => accum * curr);
        if (+answer === result) {
          showMessage(1, game, answer, result);
          return 1;
        } else {
          showMessage(0, game, answer, result);
          return 0;
        }
      default:
        return 0;
    }
  } else if (game === 'startBrainNod') {
    const [x, y] = randNum;
    const min = Math.min(x, y);
    const max = Math.max(x, y);
    for (let i = min; i > 1; i--) {
      if (max % i === 0 && min % i === 0) {
        result = i;
      } else {
        result = 1;
      }
    }
    if (+answer === result) {
      showMessage(1, game, answer, result);
      return 1;
    } else {
      showMessage(0, game, answer, result);
      return 0;
    }
  } else if (game === 'startBrainProgr') {
    result = randNum;
    if (answer === randNum) {
      showMessage(1, game, answer, result);
      return 1;
    } else {
      showMessage(0, game, answer, result);
      return 0;
    }
  } else if (game === 'startBrainPrime') {
    result = 'yes';
    for (let i = 2; i < 9; i++) {
      if (randNum !== i && randNum % i === 0) {
        result = 'no';
        break;
      }
    }
    if (answer === result) {
      showMessage(1, game, answer, result);
      return 1;
    } else {
      showMessage(0, game, answer, result);
      return 0;
    }
  }
}
//------------------------------------------------------------------showVictory
export function showVictory(game) {
  const isAgain = readlineSync.question(`Let's try again? [yes, no, switch] `);
  if (isAgain === 'yes') {
    switchGame(game);
  } else if (isAgain === 'switch') {
    getGameNum();
  } else {
    console.log('Bye!');
  }
}
