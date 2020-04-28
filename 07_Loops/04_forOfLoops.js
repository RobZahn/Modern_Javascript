// FOR...OF LOOPS

// Syntax pattern:

// for (variable of iterable) {
// statement
// }

let subreddits = ["soccer", "popheads", "cringe", "books"];

// For Loop:

for (let i = 0; i < subreddits.length; i++) {
  console.log(subreddits[i]);
}

console.log("-----");

// For...Of Loop

for (let sub of subreddits) {
  console.log(sub);
}

console.log("----");

for (let char of "cockadoodledoo") {
  console.log(char.toUpperCase());
}

console.log("-----");

//____________________________________________________________________

// FOR vs. FOR...OF

const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];

// Check whether each row sums to 15:

// For Loop

for (let i = 0; i < magicSquare.length; i++) {
  let row = magicSquare[i];
  let sum = 0;

  for (let j = 0; j < row.length; j++) {
    sum += row[j];
  }

  console.log(`${row} summed to ${sum}`);
}

console.log("-----");

// For...Of Loop

for (let row of magicSquare) {
  let sum = 0;

  for (let num of row) {
    sum += num;
  }

  console.log(`${row} summed to ${sum}`);
}

console.log("-----");

// Loop over words 1 and print each corresponding element from words 2:

// Here, we need a traditional FOR loop because it provides us with an index where FOR...OF does not.

const words1 = ["mail", "milk", "bath", "black"];
const words2 = ["box", "shake", "tub", "berry"];

for (let i = 0; i < words1.length; i++) {
  console.log(`${words1[i]}${words2[i]}`);
}
