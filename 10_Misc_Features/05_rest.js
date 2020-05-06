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

function sumNums() {
  return arguments.reduce((accum, currentVal) => {
    return accum + currentVal;
  });
}

// sumNums(1, 2, 3, 4, 5);
// Uncaught TypeError: arguments.reduce is not a function

// Since arguments is NOT an array but an array-like object, we can't call methods like reduce on it.

function sumNums2() {
  const argsArr = [...arguments]; // turn arguments into an ACTUAL array using spread
  return argsArr.reduce((accum, currentVal) => {
    return accum + currentVal;
  });
}

sumNums2(1, 2, 3, 4, 5); // 15

// Another example where arguments is not ideal:

function fullName(first, last) {
  // first, last and optional titles like "Jr.", "Sr.", "III"
  console.log(arguments);
  console.log(first);
}

fullName('Tom', 'Jones', 'III', 'Esquire');

// 0: "Tom"
// 1: "Jones"
// 2: "III"
// 3: "Esquire"
// Tom

// We can see here that arguments includes everything with no deliniation between the data.

// In summary, using the arguments object is not a fun time. No array functionality because it's not a real array. It has to be turned into one.

//______________________________________________________________________________

// Rest ...

// Looks like Spread, but it's not. Does the opposite.
// Consolidates data down into a single array.

// Function that returns the sum of any amount of number arguments:

// function sum()
