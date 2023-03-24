import readlineSync from 'readline-sync';

const rand = () => Math.floor(Math.random() * 999);

const checkCorrect = (anwerStr) => anwerStr==='yes' || anwerStr==='no';

export default function startBrainGame() {
  const name = readlineSync.question('May I have your name? ');
  let successCount = 0;

  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question: ${rand}`);
  const answer = readlineSync.question('Your answer: ');
  if (checkCorrect(answer) && answer % 2 === 0) {
    console.log('Correct!');
    if (successCount < 3) {
      successCount++;
      rand();
    } else {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log('"yes" is wrong answer ;(. Correct answer was "no".');
    console.log(`Let's try again, ${name}!`);
  }
}
