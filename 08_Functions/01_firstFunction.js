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

// Squares a number

function square(num) {
  console.log(num * num);
}

// Finds the sum of two numbers

function sum(x, y) {
  console.log(x + y);
}

// Divides two numbers

function divide(a, b) {
  console.log(a / b);
}

// RETURN

// RETURN statements end function execution immediately and return a single value.

function returnSum(x, y) {
  return x + y;
}

// Checks if a color is purple

function isPurple(color) {
  if (color.toLowerCase() === "purple") {
    return true;
  } else {
    return false;
  }
}

// Refactored version

function isPurpleRefactored(color) {
  return color.toLowerCase() === "purple";
}

// Loops through an array and returns true if a color is purple or magenta and false if neither exists.

function containsPurple(colorsArr) {
  for (let color of colorsArr) {
    if (color === "purple" || color === "magenta") {
      return true;
    }
  }
  return false;
}
