// Tallying with Array.reduce()

// Our initial value will be an empty object!

const votes = [
  'yea',
  'nay',
  'nay',
  'nay',
  'yea',
  'yea',
  'yea',
  'nay',
  'yea',
  'nay',
  'yea'
];

const results = votes.reduce((tally, val) => {
  if (tally[val]) {
    tally[val]++;
  } else {
    tally[val] = 1;
  }
  return tally;
}, {});

console.log(results); // {yea: 6, nay: 5}

// Is there a key called yea in our tally object? If not, assign it to 1. If yes, increment in by one.

// {}
// {yea: 1}
// {yea: 1, nay: 1}

// Alternative:

const results2 = votes.reduce((tally, val) => {
  tally[val] = (tally[val] || 0) + 1;
  return tally;
});

// (tally[val] || 0) is a nice boolean shortcut.
// The first time we see yea, we will set tally[yea] to 0 and then add 1 to it.
// On subsequent iterations, we will set tally[yea] to the current tally[yea] and add 1.
