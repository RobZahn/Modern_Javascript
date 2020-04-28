// FOR...IN Loops

// These loops are used for looping over the keys in an object

// Syntax pattern:

// for (variable in object) {
//   statement
// }

const jeopardyWinnings = {
  regularPlay: 2522700,
  watsonChallenge: 300000,
  tournamentOfChampions: 500000,
  battleOfTheDecades: 100000,
};

// Display category and winnings

for (let property in jeopardyWinnings) {
  console.log(property);
  console.log(jeopardyWinnings[property]);
}

// regularPlay
// 2522700
// watsonChallenge
// 300000
// tournamentOfChampions
// 500000
// battleOfTheDecades
// 100000

console.log("-----");

// Sum of all winnings

let total = 0;
for (let property in jeopardyWinnings) {
  total += jeopardyWinnings[property];
}

console.log(`Ken Jennings Total Earnings: ${total}`); // Ken Jennings Total Earnings: 3422700
