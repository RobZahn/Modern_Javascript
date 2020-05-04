// FUNCTION SCOPE

// Variables defined within a function are scoped to that function.

function helpMe() {
  let msg = "I'm on fire!";

  msg; // "I'm on fire!"
}

// msg; // NOT DEFINED

// BLOCK SCOPE

// LET and CONST are scoped to the block they are defined in. VAR is NOT block scoped - it is only scoped to Functions. Nowadays, it is bad practice to use VAR.

// In the below example, animal is scoped within the if block.

// if (true) {
//   let animal = "eel";
// }

// console.log(animal); // Uncaught ReferenceError: animal is not defined

if (true) {
  var animal = "eel";
}

console.log(animal); // 'eel'
