// **********
// Prototypes
// **********

// Prototypes are the mechanism by which JS objects inherit features from one another.

// __proto__ is a property that references the prototype of a JS object and contains all of the methods that are inherited from the parent object.

console.dir(Array.prototype);

String.prototype.yell = function () {
  // this refers to the string the method is called on
  return `${this.toUpperCase()}!!!!`;
};

const str = 'hello';
str.yell();
// "HELLO!!!!"

// Possible to overwrite built-in methods:

Array.prototype.pop = function () {
  return 'You just broke the pop method!';
};

const arr = [1, 2, 3];
arr.pop();
// "You just broke the pop method!"
