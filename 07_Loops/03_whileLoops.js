// WHILE LOOPS

// Slightly more flexible than for loops but require a bit more code.

// The following loops are functionally identical:

for (let j = 0; j <= 5; j++) {
  console.log(j);
}

console.log("-----");

let j = 0;

while (j <= 5) {
  console.log(j);
  j++;
}

console.log("-----");

// While loops are especially useful when writing a loop where the number of repetitions needed is unknown. For example, game loops where the number of player turns is unknown.

// while(!gameOver)
// while(livesLeft > 0)

// JS chooses a random integer from 1 - 10
const target = Math.floor(Math.random() * 10) + 1;

// JS guesses a random integer from 1 - 10
let guess = Math.floor(Math.random() * 10 + 1);

// While guess and target are not the same, guess again
while (guess !== target) {
  console.log(`Target: ${target} Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10 + 1);
}

console.log(`Target: ${target} Guess: ${guess}`);
console.log("Winner winner chicken dinner");

// ______________________________________________________________________

// BREAK Keyword
