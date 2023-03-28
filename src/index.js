import startBrainEven from '../bin/brain-even.js';
import startBrainCalc from '../bin/brain-calc.js';
import readlineSync from 'readline-sync';
//------------------------------------------------------------------switchGame
const switchGame = (game) => {
  switch (game) {
    case 'startBrainEven':
      startBrainEven();
      break;
    case 'startBrainCalc':
      startBrainCalc();
      break;
    default:
      return;
  }
};
//------------------------------------------------------------------showRules
export function showRules(game) {
  switch (game) {
    case 'startBrainEven':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'startBrainCalc':
      console.log('What is the result of the expression?');
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
    switch (game) {
      case 'startBrainEven':
        console.log(
          `"${answer}" is wrong answer ;(. Correct answer was "${correct ? 'no' : 'yes'}".`
        );
        break;
      case 'startBrainCalc':
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correct}".`);
        break;
      default:
        return;
    }
  }
}
//------------------------------------------------------------------makeRand
export function makeRand() {
  return Math.floor(Math.random() * 999);
}
//------------------------------------------------------------------checkCorrect
export function checkCorrect(answer, randNum, game, operator) {
  let result;
  if (game === 'startBrainEven') {
    result = randNum % 2;
    if (isAnswerOdd === 0 && answer === 'yes') {
      showMessage(1, game, answer, result);
      return 1;
    } else if (isAnswerOdd && answer === 'no') {
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
  }
}
//------------------------------------------------------------------showVictory
export function showVictory(name, game) {
  console.log(`Congratulations, ${name}!`);
  const isAgain = readlineSync.question(`Let's try again, ${name}! `);
  isAgain === 'yes' ? switchGame(game) : console.log('Bye!');
}
