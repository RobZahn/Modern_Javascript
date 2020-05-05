// Array.every()

// Tests whether ALL elements in the array pass the provided function. Returns a boolean.

const words1 = ['dog', 'dig', 'log', 'bag', 'wag'];

const threeLetWords = words1.every(word => word.length === 3);

console.log(threeLetWords); // true

const allEndWithG = words1.every(word => {
  const lastIdx = word.length - 1;
  return word[lastIdx] === 'g';
});

console.log(allEndWithG); // true

// _____________________________________________________________________________

// Array.some()

// Tests whether AT LEAST ONE element in the array passes the provided function. Returns a boolean.

const someStartWithD = words.some(word => word[0] === 'd');

console.log(someStartWithD); // true
