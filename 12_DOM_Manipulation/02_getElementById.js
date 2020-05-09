// document.getElementById() selects a DOM element based on its ID and returns a JS object.

document.getElementById('bear-photo');

//<img id="bear-photo" src="https://images.unsplash.com/photo-1573920111312-04f1b25c6b85?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1268&amp;q=80" alt=""></img>

// The return looks like normal HTML in the Chrome console, which is deceptive.

// Using console.dir() we can see a full list of all the properties of an object.

const img = document.getElementById('bear-photo');

console.dir(img);

//img#bear-photo
// accessKey: ""
// align: ""
// alt: ""
// ariaAtomic: null
// ariaAutoComplete: null
// ariaBusy: null
// ariaChecked: null
// etc...

const p = document.getElementById('main');

{
  /* <p id="main">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sint,
  magni dolorum sapiente voluptate quia praesentium autem! Veniam delectus,
  placeat excepturi in porro minima quo laudantium temporibus, aliquid
  repellendus similique.
</p> */
}

console.dir(p);

// p#main
// accessKey: ""
// align: ""
// ariaAtomic: null
