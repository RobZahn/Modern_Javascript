// Write a function avgValue to find the average value in an array of numbers.
// avgValue([0, 50]) // 25
// avgValue([75, 76, 80, 95, 100]) // 85.2

function avgValue(nums) {
  let total = 0;

  for (let num of nums) {
    total += num;
  }

  return total / nums.length;
}
