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

// When destructuring objects, the syntax is the same as with arrays.
// IMPORTANT: The variable names must match the key names within the object!!!

const runner = {
  firstName: 'Eliud',
  lastName: 'Kipchoge',
  country: 'Kenya',
  title: 'Elder of the Order of the Golden Heart of Kenya'
};

const { firstName, lastName } = runner;
console.log(firstName); // Eliud
console.log(lastName); // Kipchoge

//const {first, last} = runner; --> Will NOT work. first and last will be undefined.

// If we wanted to use a different name than that of the key:

const { country: nation, title: honorific } = runner;
console.log(nation); // Kenya
console.log(honorific); // Elder of the Order of the Golden Heart of Kenya

console.log('-----');

// We can use rest with destructured objects:

const { firstName: first1, lastName: last1, ...other } = runner;
console.log(first1); // Eliud
console.log(last1); // Kipchoge
console.log(other); // {country: "Kenya", title: "Elder of the Order of the Golden Heart of Kenya"}

//______________________________________________________________________________

// Nested Destructuring

const results = [
  {
    firstName1: 'Eliud',
    lastName1: 'Kipchoge',
    country1: 'Kenya'
  },
  {
    firstName1: 'Feyisa',
    lastName1: 'Lilesa',
    country1: 'Ethiopia'
  },
  {
    firstName1: 'Galen',
    lastName1: 'Rupp',
    country1: 'United States'
  }
];

// Extract country of the second place runner:

// Comma skips the first object, then we access country from the second object.

const [, { country1 }] = results;

console.log('-----');

//______________________________________________________________________________

// Destructuring Parameters

// Traditional method:

function print(person) {
  const { firstName, lastName, title } = person;
  console.log(`${firstName} ${lastName}, ${title}`);
}

print(runner); // Eliud Kipchoge, Elder of the Order of the Golden Heart of Kenya

// Using destructuring:

function print1({ firstName, lastName, title }) {
  console.log(`${firstName} ${lastName}, ${title}`);
}

print1(runner); // Eliud Kipchoge, Elder of the Order of the Golden Heart of Kenya

// Using arrays:

const response = ['HTTP/1.1', '200 OK', 'application/json'];

function parseResponse([protocol, statusCode, contentType]) {
  console.log(`Status: ${statusCode}`);
}

parseResponse(response); // Status: 200 OK
