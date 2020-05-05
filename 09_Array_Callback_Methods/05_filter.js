// Array.filter()

// Creates a new array with all elements that pass the test implemented by the provided function.

const nums2 = [34, 35, 67, 54, 109, 102, 32, 9];

const odds = nums2.filter(n => n % 2 === 1);
const evens = nums2.filter(n => n % 2 === 0);
const bigNums = nums2.filter(n => n > 50);

console.log(odds); // [35, 67, 109, 9]
console.log(evens); // [34, 54, 102, 32]
console.log(bigNums); // [67, 54, 109, 102]

console.log('-----');
