// *********************
// Constructor Functions
// *********************

// Factory functions are not ideal because methods assigned as properties to the resulting objects are duplicated each time.

const color = makeColor(35, 255, 150);
color.hex(); // "#23ff96"
color.rgb(); // "rgb(35, 255, 150)"

const black = makeColor(0, 0, 0);
black.hex(); // "#000000"
black.rgb(); // "rgb(0, 0, 0)"

// As shown below, the method .hex() that is assigned to color is NOT the same as the one assigned to black.

color.hex === color.black; // false

// Conversely, the built-in String prototype method .slice() is the same for two different string literals:

'hi'.slice === 'how are you?'.slice; // true

// _____________________________________________________________________________

// Constructor Function Syntax:

// When a constructor function is called with the new keyword:

// 1. Creates a blank, plain JavaScript object;
// 2. Links (sets the constructor of) this object to another object;
// 3. Passes the newly created object from Step 1 as the this context;
// 4. Returns this if the function doesn't return an object.

function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

new Color(255, 255, 255); // Color {r: 255, g: 255, b: 255}

// We can now add methods to the Color prototype like so:

Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r}, ${g}, ${b})`;
};

const color1 = new Color(0, 0, 0);

console.dir(color1);
// Color
// b: 0
// g: 0
// r: 0
// __proto__:
// rgb: ƒ ()
// constructor: ƒ Color(r, g, b)
// __proto__: Object

Color.prototype.hex = function () {
  const { r, g, b } = this;
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};

const color2 = new Color(100, 100, 100);
color2.hex(); // "#646464"

color1.hex === color2.hex; // true

Color.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

color2.rgba(); // "rgba(100, 100, 100, 1)"
