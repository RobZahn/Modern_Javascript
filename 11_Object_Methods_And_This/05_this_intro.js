// THIS is a reference to the current execution scope.

// It will give an object back that will change depending on the current scope.

function sayHi() {
  console.log('Hi');
  console.log(this);
}

sayHi();
// Hi
// Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}

// The Window object is the global scope in the browser.

// By defining sayHi() in the top level, we are actually adding it as a property to the Window object.

// This is also true with a function expression:

const greet = function () {
  console.log('Hello');
  console.log(this);
};

greet();
// Hello
// Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}

//______________________________________________________________________________

// When we define a variable using var, it is added to the global scope:

var color = 'teal';
window.color; // teal

// let and const do NOT add the variable to the global scope:

let color1 = 'orange';
window.color1; // undefined

const color2 = 'burnt sienna';
window.color2; // undefined
