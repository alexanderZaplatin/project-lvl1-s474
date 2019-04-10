const readlineSync = require('readline-sync');
const getName = readlineSync.question('May I have your name?');
console.log('Hi ' + getName + '!');

export default getName
