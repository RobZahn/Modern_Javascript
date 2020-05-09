// parentElement is a property that returns the direct parent element of the target.

const firstLI = document.querySelector('li');

firstLI.parentElement;
{
  /* <ul>
  <li class="special">First Thing</li>
  <li>Second Thing</li>
  <li class="special">Third Thing</li>
</ul> */
}

firstLI.parentElement.parentElement; // <body>...</body>

//______________________________________________________________________________

// children is a property that returns an HTML Collection containing all the child elements of the target.

ul.children; // HTMLCollection(3)[(li.special, li, li.special)];

ul.children[0].innerText; // First Thing

//______________________________________________________________________________

// nextElementSibling / previousElementSibling are properties that return the next or previous sibling element of the target.

firstLI.nextElementSibling; // <li>Second Thing</li>

const thirdLI = firstLI.nextElementSibling.nextElementSibling; // <li class="special">Third Thing</li>

thirdLI.previousElementSibling;
