import readlineSync from 'readline-sync';

const roundsCount = 3;

const play = (description, getDataGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}`);
  const playerName = readlineSync.question('May I have your name?');
  console.log(`Hi ${playerName}!`);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = getDataGame();

    console.log(`Question: ${question}`);
    const answerPlayer = readlineSync.question('Your answer: ');

    if (answerPlayer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answerPlayer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${playerName}`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export default play;
