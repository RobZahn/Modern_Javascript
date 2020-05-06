// Advanced uses for Array.reduce()

// Find the maximum value in an array:

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

const maxGrade = grades.reduce((max, currentVal) => {
  if (currentVal > max) return currentVal;
  return max;
});

console.log(`Max Grade: ${maxGrade}`); // Max Grade: 99

// Breakdown:

// max                  currentVal                 return
//
// 87                   64                         87
//
// 87                   96                         96
//
// 96                   92                         96
//
// 96                   88                         96
//
// 96                   99                         99
//
// 99                   73                         99
//
// 99                   70                         99
//
// 99                   64                         99
//
// FINAL MAX: 99

//______________________________________________________________________________

// Alternative using Math.max()

const maxGrade2 = grades.reduce((max, currentVal) => {
  return Math.max(max, currentVal);
});

console.log(`Max Grade: ${maxGrade2}`); // Max Grade: 99

// Using implicit return, omitted curly braces
const minGrade = grades.reduce((min, currentVal) => Math.min(min, currentVal));

console.log(`Minimum Grade: ${minGrade}`); // Minimum Grade: 64

// Using an initial value with reduce:

[4, 5, 6, 7, 8].reduce((accum, currentVal) => {
  return accum + currentVal;
}, 100); // 100 is initial value for accumulator

// 100 + 4 | 104 + 5 | 109 + 6 ...
