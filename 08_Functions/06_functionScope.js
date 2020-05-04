// FUNCTION SCOPE

// Variables defined within a function are scoped to that function.

function helpMe() {
  let msg = "I'm on fire!";

  msg; // "I'm on fire!"
}

// msg; // NOT DEFINED

//___________________________________________________________________________

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

//___________________________________________________________________________

// LEXICAL SCOPE

// Nested functions are lexically bound to the scope of their parent functions. This is a one way relationship: variables defined within the inner function are not available in the outer parent function.

// In the below example, we have access to hero within the nested function.

function outer() {
  let hero = "Black Panther";

  function inner() {
    let cryForHelp = `${hero}, please save me!`;
    console.log(cryForHelp);
  }

  inner();
}

// Note that it is impossible to call innerTwo from OUTSIDE of the parent function because the inner function is scoped to the parent function.

function outerTwo() {
  let movie = "Amadeus";

  function innerTwo() {
    console.log(movie.toUpperCase());
  }

  innerTwo();
}
