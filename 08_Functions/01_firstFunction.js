// Function Declaration

// function funcName() {
//  do something
// }

// Generates a random number from 1 - 6

function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled: ${roll}`);
}

// Generates random numbers from 1 - 6 x times

function throwDice(numRolls) {
  for (let i = 0; i < numRolls; i++) {
    rollDie();
  }
}

// Greets a person passed in as argument

function greet(name) {
  console.log(`Hi, ${name}!`);
}
