// Spread With Array Literals

// Spread creates a new array from an existing array by spreading the elements from the original.

const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

[...nums1, ...nums2];

// [1, 2, 3, 4, 5, 6]

['a', 'b', ...nums2];

// ['a', 'b', 4, 5, 6]

[...nums1, ...nums2, 7, 8, 9];

// [1, 2, 3, 4, 5, 6, 7, 8, 9]

//______________________________________________________________________________

const cephalopods = [
  'dumbo octopus',
  'humboldt squid',
  'flamboyant cuttlefish'
];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];

const mollusks = [...cephalopods, ...gastropods];
console.log(mollusks);

// ["dumbo octopus",
//  "humboldt squid",
//  "flamboyant cuttlefish",
//  "giant african snail",
//  "banana slug",
//  "variable neon slug"
// ]

// NOTE: We can achieve this exact same result by using Array.concat()

const mollusks2 = cephalopods.concat(gastropods);
console.log(mollusks2);

// ["dumbo octopus",
//  "humboldt squid",
//  "flamboyant cuttlefish",
//  "giant african snail",
//  "banana slug",
//  "variable neon slug"
// ]

//______________________________________________________________________________

// If all we want is a copy of an array, we can use spread:

const cephCopy = [...cephalopods];

// This will give us a new array called cephCopy with identical content to that of cephalopods but with a unique reference.
