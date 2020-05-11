const btn = document.querySelector('button');

btn.addEventListener('mouseover', function () {
  const height = Math.floor(Math.random() * window.innerHeight);
  const width = Math.floor(Math.random() * window.innerWidth);
  btn.style.left = `${width}px`;
  btn.style.top = `${height}px`;
});

btn.addEventListener;

// IMPORTANT: The Window has a property called window.screen which lists the properties
// of a computer's physical monitor screen. availHeight, availWidth, etc can be
// used to effectively keep animations and things from moving off screen. This
// is assuming the user's window is full-screened.

// window.innerHeight and window.innerWidth will return the actual current
// dynamic height and width of the browser window.
console.log(window.screen.height); // 1080
console.log(window.screen.width); // 1920

console.log(window.innerHeight); // 618
console.log(window.innerWidth); // 676
