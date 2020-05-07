// Object Methods

// We can add functions as properties to our objects. They're called methods.

// This is useful for grouping similar pieces of functionality together:

const math = {
  multiply: function (x, y) {
    return x * y;
  },

  divide: function (x, y) {
    return x / y;
  },

  square: function (x) {
    return x * x;
  }
};

math.multiply;
// ƒ (x, y) {
//    return x * y;
// }

math.multiply(2, 4);
// --> Method style call denoted by the object.method() syntax
