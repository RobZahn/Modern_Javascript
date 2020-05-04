// Functions As Return Values

function makeBetweenFunc(min, max) {
  return function (val) {
    return val >= min && val <= max;
  };
}

const inAgeRange = makeBetweenFunc(18, 100);

inAgeRange(68); // true
inAgeRange(17); // false

const isChild = makeBetweenFunc(0, 18);

isChild(5); // true
isChild(20); // false

//___________________________________________________________________________

function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

const triple = multiplyBy(3);
triple(5); //15

const double = multiplyBy(2);
double(8); //16

const halve = multiplyBy(0.5);
halve(9); // 4.5
