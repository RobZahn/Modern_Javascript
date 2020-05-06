// Default Parameters

function multiply(x, y) {
  return x * y;
}

multiply(4, 5); // 20
multiply(4); // NaN --> 4 * undefined

// Safeguard against omitted arguments - The Old Way:

function multiply2(x, y) {
  if (typeof y === 'undefined') {
    y = 1;
  }
  return x * y;
}

multiply2(2); //2

// Alternative using ternary:

function multiply3(x, y) {
  y = typeof y === 'undefined' ? 1 : y;
  return x * y;
}

// If y is not passed in, set y === 1, otherwise, y === y

//_____________________________________________________________________________

// New Default Parameter Syntax

function multiplyNew(x, y = 1) {
  return x * y;
}

multiply(4, 5); // 20
multiply(4); // 4

console.log('-----');

// Example with strings:

const greet = (person, greeting = 'Hi') => {
  console.log(`${greeting}, ${person}!`);
};

greet('Tim', 'Yo'); // Yo, Tim!

console.log('-----');

const blah = (x, y = [1, 2, 3]) => {
  console.log(x, y);
};

blah(10); // 10 [1, 2, 3]
