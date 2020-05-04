// CALLBACK FUNCTIONS are functions that are passed into another function as an argument and which are then invoked inside the outer function.

// Often times callbacks will be anonymous functions.

// setTimeout() will execute a callback function after x number of milliseconds have passed.

function grumpus() {
  alert("Go Away!");
}

setTimeout(grumpus, 5000);

// With an anonymous function:

setTimeout(function () {
  alert("Welcome!");
}, 5000);

//___________________________________________________________________________

// Execute code when the button is clicked:

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  alert("Why Did You Click Me??");
});
