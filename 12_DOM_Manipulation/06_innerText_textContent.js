// innerText is a property on an HTML element that returns the text in between the tags.

const body = document.querySelector('body');

const h1 = document.querySelector('h1');
h1.innerText; // "My Webpage"

// innerText will return the text for any elements that are nested inside a parent element:

const ul1 = document.querySelector('ul');

ul1.innerText;
// "First Thing
// Second Thing
// Third Thing"

// In the above example, the text of each LI is returned.

//______________________________________________________________________________

// textContent is different from innerText in that it will return the content of ALL elements including <script> and <style> elements. In contrast, innerText only shows 'human-readable' elements.

// textContent will also return hidden elements and respects white space and formatting.
