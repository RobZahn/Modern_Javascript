const btn = document.querySelector('button');

const moveXNew = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currentLeft = element.getBoundingClientRect().left;

      if (elRight + amount > bodyBoundary) {
        reject({ bodyBoundary, elRight, amount });
      } else {
        element.style.transform = `translateX(${currentLeft + amount}px)`;
        resolve();
      }
    }, delay);
  });
};

// moveXNew(btn, 300, 1000)
//   .then(() => {
//     return moveXNew(btn, 300, 1000);
//   })
//   .then(() => {
//     return moveXNew(btn, 300, 1000);
//   })
//   .then(() => {
//     return moveXNew(btn, 300, 1000);
//   })
//   .then(() => {
//     console.log('Done!');
//   })
//   .catch(() => {
//     console.log("Can't Move Off Screen!");
//   });

// Using implicit returns to shorten this:

moveXNew(btn, 100, 1000)
  .then(() => moveXNew(btn, 100, 1000))
  .then(() => moveXNew(btn, 100, 1000))
  .then(() => moveXNew(btn, 100, 1000))
  .then(() => moveXNew(btn, 100, 1000))
  .then(() => moveXNew(btn, 100, 1000))
  .then(() => moveXNew(btn, 100, 1000))
  .then(() => moveXNew(btn, 100, 1000))
  .catch(({ bodyBoundary, elRight, amount }) => {
    console.log(`Body is ${bodyBoundary}px wide.`);
    console.log(`Element is at ${elRight}px, ${amount}px is too large!`);
  });
