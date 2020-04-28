// NESTED LOOPS

// Remember that for every time the outer loop completes a single iteration, the inner loop completes all possible iterations.

for (let i = 1; i < 10; i++) {
  console.log("OUTER LOOP", i);

  for (let j = 10; j >= 0; j -= 2) {
    console.log("     INNER LOOP", j);
  }
}

console.log("-----");

// Loop through 2D array and add all numbers:

const gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2],
];

let totalScore = 0;

for (let i = 0; i < gameBoard.length; i++) {
  let row = gameBoard[i];

  for (let j = 0; j < row.length; j++) {
    totalScore += row[j];
  }
}

console.log(totalScore); // 230

// ________________________________________________________________
