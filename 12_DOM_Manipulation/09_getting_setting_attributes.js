// getAttribute() returns the value for a given attribute. Useful when there is not a built-in method for selecting a certain HTML attribute.

const range = document.querySelector('input[type="range"]');

range.getAttribute('max'); // 500

// getAttribute() returns null if there is no match found:

range.getAttribute('lol'); // null

//______________________________________________________________________________

// setAttribute() allows us to assign a new value to a given attribute. Takes two arguments: the target attribute and the desired value:

range.setAttribute('min', '-500');
