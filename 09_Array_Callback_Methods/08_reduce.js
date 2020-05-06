// Array.reduce()

// Executes a reducer function on each element of the array, resulting in a single value. The accumulator is what stores the result.

// Accumulator starts as first ele of array. currentValue starts as second ele.

const sumArr = [3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(sumArr); // 35

// Breakdown:

// Callback       accumulator       currentValue          return value
//
// first call     3                 5                     8
//
// second call    8                 7                     15
//
// third call     15                9                     24
//
// fourth call    24                11                    35

const productArr = [3, 5, 7, 9, 11].reduce((total, currentVal) => {
  return total * currentVal;
});

console.log(productArr); // 10395

console.log('-----');
