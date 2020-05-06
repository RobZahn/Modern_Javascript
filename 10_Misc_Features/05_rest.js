// Arguments Object

// Available inside every function. It's an array-like object - has a length property - does NOT have array methods like push/pop, etc.

// Contains all the arguments passed to the function. Not available inside of arrow functions.

function sum() {
  console.log(arguments);
}

sum(1, 2, 3);

// [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// 0: 1
// 1: 2
// 2: 3
// 0: 1
// 1: 2
// 2: 3

// Rest ...

// Looks like Spread, but it's not. Does the opposite.
// Consolidates data down into a single array.

// Function that returns the sum of any amount of number arguments:

// function sum()
