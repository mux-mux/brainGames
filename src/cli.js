import readlineSync from 'readline-sync';

export default function helloUser() {
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  return name;
}

export function showRules() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

export function makeRand() {
  return Math.floor(Math.random() * 999);
}

export function checkCorrect(answer, randNum) {
  const isAnswerOdd = randNum % 2;
  if (isAnswerOdd === 0 && answer === 'yes') {
    console.log('Correct!');
    return 1;
  } else if (isAnswerOdd && answer === 'no') {
    console.log('Correct!');
    return 1;
  } else {
    console.log(
      `"${answer}" is wrong answer ;(. Correct answer was "${isAnswerOdd ? 'no' : 'yes'}".`
    );
    return 0;
  }
}

export function tryAgain(name, gameName) {
  const isAgain = readlineSync.question(`Let's try again, ${name}! `);
  isAgain === 'yes' ? gameName() : console.log('Bye!');
}

export function showVictory(name, game) {
  console.log(`Congratulations, ${name}!`);
  tryAgain(name, game);
}
