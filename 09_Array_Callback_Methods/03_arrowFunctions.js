// ARROW FUNCTIONS

// Alternative and compact way of defining a function expression.

// Regular Expression

const square = function (x) {
  return x * x;
};

// Arrow

const square2 = x => {
  return x * x;
};

// Regular Expression

const sum = function (x, y) {
  return x + y;
};

// Arrow

const sum2 = (x, y) => {
  return x + y;
};

// Regular Expression

const isEven = function (num) {
  return num % 2 === 0;
};

// Arrow

const isEven2 = num => {
  return num % 2 === 0;
};

// Regular Expression

const multiply = function (x, y) {
  return x * y;
};

// Arrow

const multiply2 = (x, y) => {
  return x * y;
};

//___________________________________________________________________________

// Parens are optional if there is only one parameter:

const square3 = x => {
  return x * x;
};

// Empty parens must be used if there are no parameters:

const greet = () => {
  console.log("Hi");
};

//___________________________________________________________________________

// IMPLICIT RETURN

// When dealing with a single short expression, we can substitute the curly braces for parens and omit the return keyword.

// We can also write it is a one liner like this:

const square4 = n => n * n;

//___________________________________________________________________________

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// Regular Expression

const doubles2 = nums.map(function (n) {
  return n * 2;
});

// Arrow

const doubles3 = nums.map(n => {
  return n * 2;
});

// One Liner Arrow

const doubles4 = nums.map(n => n * 2);

// Regular Expression

const parityList = nums.map(function (n) {
  if (n % 2 === 0) return "even";
  return "odd";
});

// Arrow

const parityList2 = nums.map(n => {
  if (n % 2 === 0) return "even";
  return "odd";
});

// One Liner w/ Ternary

const parityList3 = nums.map(n => (n % 2 === 0 ? "even" : "odd"));
