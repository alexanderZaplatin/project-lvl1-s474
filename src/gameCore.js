import readlineSync from 'readline-sync';

const roundCount = 3;

const game = (description, getGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}`);
  const playerName = readlineSync.question('May I have your name?');
  console.log(`Hi ${playerName}!`);

  for (let i = 0; i < roundCount; i += 1) {
    const [question, correctAnswer] = getGame();

    console.log(`Question: ${question}`);
    const answerPlayer = readlineSync.question('Your answer: ');

    if (answerPlayer !== String(correctAnswer)) {
      console.log(`${answerPlayer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${playerName}`);
      return;
    }
    if (answerPlayer === String(correctAnswer) && i === roundCount - 1) {
      console.log(`Congratulations, ${playerName}!`);
    } else {
      console.log('Correct!');
    }
  }
};

export default game;
