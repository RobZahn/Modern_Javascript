// *****************
// Factory Functions
// *****************

// A factory function is any function which is not a class or constructor that returns a (presumably new) object.
// In JavaScript, any function can return an object. When it does so without the new keyword, it’s a factory function.

// Standalone functions:

function hex(r, g, b) {
  return '#'((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .slice(1);
}
function rgb(r, g, b) {
  return `rgb(${r}, ${g}, ${b})`;
}

// Factory Function example:

function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  };
  color.hex = function () {
    const { r, g, b } = this;
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  };

  return color;
}

const firstColor = makeColor(35, 255, 255);
firstColor.rgb(); // "rgb(35, 255, 255)"
firstColor.hex(); // "#23ffff"
firstColor.r = 255;
firstColor.rgb(); // "rgb(255, 255, 255)"
