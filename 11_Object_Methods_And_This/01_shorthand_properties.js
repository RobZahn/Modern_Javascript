// Shorthand Properties

// Function that collects various stats of an array and creates a new object that stores the data in key value pairs. Longhand version (the old way):

const getStats = arr => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum / arr.length;

  return {
    max: max,
    min: min,
    sum: sum,
    avg: avg
  };
};

const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

const stats = getStats(reviews); // {max: 5, min: 2.8, sum: 26.74, avg: 3.82}

// Shorthand version:

const getStatsShort = arr => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum / arr.length;

  return {
    max,
    min,
    sum,
    avg
  }; // JS automatically generates key-value pairs by intelligently pairing keys with the corresponding local variables and the values assigned to them.
};

const stats2 = getStatsShort(reviews); // {max: 5, min: 2.8, sum: 26.74, avg: 3.82}
