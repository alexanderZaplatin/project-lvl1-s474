import readlineSync from 'readline-sync';

const greeting = () => console.log('Welcome to the Brain Games!');
const rules = () => console.log('Answer "yes" if number even otherwise answer "no".');
const userName = () => {
  const getName = readlineSync.question('May I have your name?');
  console.log(`Hi ${getName}!`);
  return getName;
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isEven = num => num % 2 === 0;

const game = () => {
  greeting();
  rules();
  const playerName = userName();
  const roundCount = 3;

  for (let i = 0; i < roundCount; i += 1) {
    const questionNumber = getRandomInt(1, 100);
    console.log(`Question: ${questionNumber}`);
    const answerPlayer = readlineSync.question('Your answer: ');
    const validAnswer = isEven(questionNumber) ? 'yes' : 'no';

    if (answerPlayer !== validAnswer) {
      return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${playerName}!`);
    }
    if (answerPlayer === validAnswer && i === roundCount - 1) {
      return console.log(`Congratulations, ${playerName}!`);
    }
    console.log('Correct!');
  }
  return true;
};

export default userName;
export { game };
