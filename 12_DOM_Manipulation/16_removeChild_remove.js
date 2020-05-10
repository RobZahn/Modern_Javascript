// removeChild() is the opposite of addChild()

// syntax: parent.removeChild('element to be removed')

// Remove 2nd LI in 2nd UL, class of special:

const ul2 = document.querySelector('section ul');

const removeMe = ul2.querySelector('.special'); // <li class="special">Peas</li>

ul2.removeChild(removeMe);

//______________________________________________________________________________

// remove() is a method that removes the target element. Much easier to use than removeChild().

// Remove the H1:

h1.remove();
