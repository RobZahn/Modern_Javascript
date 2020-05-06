// Destructuring

// Short, clean syntax to unpack:
// 1.Values from arrays
// 2.Properties from objects
// ...into distinct variables

// Arrays:

const raceResults = [
  'Eliud Kipchoge',
  'Feyisa Lelisa',
  'Galen Rupp',
  'Ghirmay Ghebreslassie',
  'Alphonce Simou',
  'Jared Ward'
];

// Traditional method:

const gold = raceResults[0];
const silver = raceResults[1];
const bronze = raceResults[2];

// Destructuring method:

const [gold1, silver1, bronze1] = raceResults;

// These variables are assigned according to their position. Gold will be assigned to index 0, silver to index 1, and so on.

console.log(`Gold Medal: ${gold1}`);
console.log(`Silver Medal: ${silver1}`);
console.log(`Bronze Medal: ${bronze1}`);

// Gold Medal: Eliud Kipchoge
// Silver Medal: Feyisa Lelisa
// Bronze Medal: Galen Rupp

console.log('-----');

// It is possible to skip indices with commas by using this syntax:

const [first, , , fourth] = raceResults;
console.log(first); // Eliud Kipchoge
console.log(fourth); // Ghirmay Ghebreslassie

console.log('-----');

// Using rest inside of a destructuring statement:

const [winner, ...others] = raceResults;
console.log(winner); // Eliud Kipchoge
console.log(others); // ["Feyisa Lelisa", "Galen Rupp", "Ghirmay Ghebreslassie", "Alphonce Simou", "Jared Ward"]

console.log('-----');

//______________________________________________________________________________

// Objects:
