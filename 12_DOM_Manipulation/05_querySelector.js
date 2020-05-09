// document.querySelector() is a newer all-in-one method to select a single element. We pass in a CSS selector. If there are multiple elements with the same class or tag, it will give back only the first one.

document.querySelector('h1'); // <-- tag
document.querySelector('#red'); // <-- id
document.querySelector('.big'); // <-- class

// We can be more specific in order to get an element other than the first one on the page:

document.querySelector('section ul li.special'); // <li class="special">Peas</li>

document.querySelector('input[type=password]'); // <input type="password" placeholder="password">

//______________________________________________________________________________

// document.querySelectorAll() returns all matching elements in a NodeList collection.

document.querySelectorAll('input');
// NodeList(3) [input, input, input]
// 0: input
// 1: input
// 2: input
// length: 3
// __proto__: NodeList

document.querySelectorAll('.special');
// NodeList(4) [p.special, li.special, li.special, li.special]
// 0: p.special
// 1: li.special
// 2: li.special
// 3: li.special
// length: 4
// __proto__: NodeList

// NOTE: The differences between a NodeList and an HTMLCollection are not super important for now. They are both array-like objects that contain JS objects. NodeLists have some additional JS functionality such as .forEach(), etc.
