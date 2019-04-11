import readlineSync from 'readline-sync';

const userName = () => {
  const getName = readlineSync.question('May I have your name?');
  console.log(`Hi ${getName}!`);
};

export default userName;
