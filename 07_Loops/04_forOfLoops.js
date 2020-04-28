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

console.log("-----");

//____________________________________________________________________

// FOR...OF with OBJECTS

// NOTE: Wrapping the key name with "" allows us to use spaces.

const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  "In Bruges": 9,
  Amadeus: 10,
  "Kill Bill": 8,
  "Little Miss Sunshine": 8.5,
  Coraline: 7.5,
};

// IMPORTANT: OBJECTS are NOT iterables! To loop through them we need to use an alternative method. Object.keys() will provide us with an array of keys that can be iterated over and Object.values() will do the same for values.

// List each movie and its score (keys and values)

for (let movie of Object.keys(movieReviews)) {
  console.log(movie, movieReviews[movie]);
}

// Arrival 9.5
// Alien 9
// Amelie 8
// In Bruges 9
// Amadeus 10
// Kill Bill 8
// Little Miss Sunshine 8.5
// Coraline 7.5

console.log("-----");

// Find average rating of all movies:

const ratings = Object.values(movieReviews);
let total = 0;
for (let r of ratings) {
  total += r;
}

let avg = total / ratings.length;
console.log(avg);

console.log("-----");
