// HOISTING

// JavaScript has a strange behavior where it will hoist variable declarations to the top before evaluating anything else. This is why we can console.log(animal) and get undefined and not throw an error.

// var animal; // this is what is happening under the hood

console.log(animal); //undefined
var animal = "Tapir";
console.log(animal); // Tapir

//___________________________________________________________________________

// Variable declarations made with let are NOT hoisted like they are with var variables. Another reason not to use var.

console.log(shrimp);
// ReferenceError: Cannot access 'shrimp' before initialization.

let shrimp = "Harlequin Shrimp";

//___________________________________________________________________________

// Calling a function before declaring it is still valid because of hoisting. Think of function declarations as existing all the way at the top of the file.

howl(); // Awooooo!

function howl() {
  console.log("Awooooo!");
}

//___________________________________________________________________________

// Function Expressions are NOT hoisted but the variables they are kept in are.

hoot(); // TypeError: hoot is not a function
console.log(hoot); // undefined --- it exists

var hoot = function () {
  console.log("Hoo hoo!");
};

hootTwo(); // ReferenceError: Cannot access 'hoot' before initialization

let hootTwo = function () {
  console.log("Hoo hoo!");
};
