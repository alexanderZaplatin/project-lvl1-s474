import play from '..';
import getRandomInt from '../tools/getRandomInt';

const description = 'What number is missing in the progression?';
const length = 10;
const minRandom = 1;
const maxRandom = 100;

const getProgression = () => {
  const progression = [];
  const firstElement = getRandomInt(minRandom, maxRandom);
  const step = getRandomInt(minRandom, maxRandom);

  for (let i = 0; i < length; i += 1) {
    const newElement = firstElement + (i * step);
    progression.push(newElement);
  }
  return progression;
};

const getDataGeme = () => {
  const progression = getProgression();
  const indexPositionColon = getRandomInt(0, length - 1);

  const correctAnswer = String(progression[indexPositionColon]);
  progression[indexPositionColon] = '..';
  const question = String(progression.join(' '));

  return [question, correctAnswer];
};

export default () => play(description, getDataGeme);
