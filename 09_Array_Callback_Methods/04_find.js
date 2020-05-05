// Array.find()

// Returns the value of the FIRST ELEMENT in the array that satisfies the provided testing function.

let movies = [
  'The Fantastic Mr. Fox',
  'Mr. and Mrs. Smith',
  'Mrs. Doubtfire',
  'Mr. Deeds'
];

const movie = movies.find(movie => {
  return movie.includes('Mrs.');
});

console.log(movie); // Mr. and Mrs. Smith

const movie2 = movies.find(movie => movie.indexOf('Mrs.') === 0);

console.log(movie2); // Mrs. Doubtfire

console.log('-----');
