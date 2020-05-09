// // document.getElementsByClassName() selects all DOM elements with a given class and returns a list of JS objects.

document.getElementsByClassName('header'); // HTMLCollection [h1.header]
document.getElementsByClassName('special'); // HTMLCollection(4) [p.special, li.special, li.special, li.special]

document.getElementsByClassName('chickens'); // HTMLCollection []

//______________________________________________________________________________

// Target 'special' paragraph within the UL:

const ul = document.getElementsByTagName('ul')[0]; // <-- target first ul with [0]

ul.getElementsByClassName('special'); // HTMLCollection(2) [li.special, li.special]
