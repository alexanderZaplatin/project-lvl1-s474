import play from '..';
import getRandomInt from '../tools/getRandomInt';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getDataGame = () => {
  const number = getRandomInt(1, 100);

  const question = number;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => play(description, getDataGame);
