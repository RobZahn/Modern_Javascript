// style is a property that returns an object containing a massive list of properties

h1.style;
// CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}

// IMPORTANT: the style property can be used to set new style attributes to the target element BUT we cannot READ existing styles that are implemented via CSS. We can only read styles that have been set via in-line HTML

h1.style.color = 'orchid';

h1; // <h1 class="header" style="color: orchid;">My Webpage is cool</h1>

// Notice that the style is added in-line

const firstP = document.querySelector('p');

firstP.style.color = 'white';
firstP.style.backgroundColor = 'black';

// NOTE: The CSS attribute background-color and others like it are camel cased in JavaScript.

//______________________________________________________________________________

// Change styles of all LI's on the page:

const allLIs = document.querySelectorAll('li');

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

allLIs.forEach((li, idx) => {
  const color = colors[idx];
  li.style.color = color;
});

// NOTE: Because setting styles using the style property adds in-line styling, any styles added using CSS classes or IDs will be overwritten because in-line styles are more specific.
