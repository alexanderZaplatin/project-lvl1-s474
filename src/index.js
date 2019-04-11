import readlineSync from 'readline-sync';

const userName = () => {
  console.log('Welcome to the Brain Games!');
  const getName = readlineSync.question('May I have your name?');
  console.log(`Hi ${getName}!`);
};

export default userName;
