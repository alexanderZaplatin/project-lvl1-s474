import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isEven = num => num % 2 === 0;

const game = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');

  const playerName = readlineSync.question('May I have your name?');
  console.log(`Hi ${playerName}!`);

  const roundCount = 3;

  for (let i = 0; i < roundCount; i += 1) {
    const question = getRandomInt(1, 100);
    console.log(`Question: ${question}`);
    const answerPlayer = readlineSync.question('Your answer: ');
    const validAnswer = isEven(question) ? 'yes' : 'no';

    if (answerPlayer !== validAnswer) {
      return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${playerName}!`);
    }
    if (answerPlayer === validAnswer && i === roundCount - 1) {
      console.log(`Congratulations, ${playerName}!`);
    } else {
      console.log('Correct!');
    }
  }
  return true;
};


export default game;
