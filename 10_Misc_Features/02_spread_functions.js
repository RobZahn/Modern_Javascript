// Spread Operator ...

// Spread syntax allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

// TLDR: Expands an iterable (array, string, etc.) into a list of arguments.

// In a function call:

// Math.max and Math.min both accept multiple arguments. If we tried passing in an array of numbers, these functions wouldn't work. Using spread, we have a work around.

Math.max(3, 5, 11, 346, 33, 22, 99); // 346
Math.min(3, 5, 11, 346, 33, 22, 99); // 3

const nums = [45, 23, 34, 7, 5];

Math.max(nums); // NaN
Math.max(...nums); // 45

//______________________________________________________________________________

// Another example:

function giveMeFour(a, b, c, d) {
  console.log('a', a);
  console.log('b', b);
  console.log('c', c);
  console.log('d', d);
}

const colors = ['red', 'orange', 'yellow', 'green'];

// If we want to pass each of these colors into giveMeFour, we can use the spread operator to effectively remove the [] they are wrapped in.

giveMeFour(...colors);

// a red
// b orange
// c yellow
// d green

console.log('-----');

// This also works with strings (and any other iterable):

const str = 'GOAT';
giveMeFour(...str);

// a G
// b O
// c A
// d T

console.log('-----');

//______________________________________________________________________________
