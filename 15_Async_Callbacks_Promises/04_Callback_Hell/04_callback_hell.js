const btn = document.querySelector('button');

// *********
// Version 1
// *********

// This is ridiculous:

// setTimeout(() => {
//   btn.style.transform = 'translateX(100px)';
//   setTimeout(() => {
//     btn.style.transform = 'translateX(200px)';
//     setTimeout(() => {
//       btn.style.transform = 'translateX(300px)';
//       setTimeout(() => {
//         btn.style.transform = 'translateX(400px)';
//         setTimeout(() => {
//           btn.style.transform = 'translateX(500px)';
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// *********
// Version 2
// *********

// This is considerably cleaner. The function moveX is set up to receive a
// callback.

// const moveX = (element, amount, delay, callback) => {
//   setTimeout(() => {
//     element.style.transform = `translateX(${amount}px)`;
//     if (callback) callback();
//   }, delay);
// };

// moveX(btn, 100, 1000, () => {
//   moveX(btn, 200, 1000, () => {
//     moveX(btn, 300, 1000, () => {
//       moveX(btn, 400, 1000, () => {
//         moveX(btn, 500, 1000);
//       });
//     });
//   });
// });

// *********
// Version 3
// *********

// Version where we check if the button is about to move off the screen
// and if so, we will tell it to stop.

const moveX2 = (element, amount, delay, onSuccess, onFail) => {
  setTimeout(() => {
    const bodyBoundary = document.body.clientWidth;
    const elRight = element.getBoundingClientRect().right;
    const currentLeft = element.getBoundingClientRect().left;

    if (elRight + amount > bodyBoundary) {
      onFail();
    } else {
      element.style.transform = `translateX(${currentLeft + amount}px)`;
      onSuccess();
    }
  }, delay);
};

// moveX2(btn, 100, 1000, () => {
//   moveX2(btn, 100, 1000, () => {
//     moveX2(btn, 100, 1000, () => {
//       moveX2(btn, 100, 1000, () => {
//         moveX2(btn, 400, 1000); // <-- DONE - Can't Go Offscreen!
//       });
//     });
//   });
// });

// This is a completely confusing mess for a human to try and parse and it's
// only 2 callbacks deep:

moveX2(
  btn,
  100,
  1000,
  () => {
    // success
    moveX2(
      btn,
      400,
      1000,
      () => {
        moveX2(
          btn,
          700,
          1000,
          () => {
            console.log('Still screen real estate left');
          },
          () => {
            alert('Cannot Move Further!');
          }
        );
      },
      () => {
        // fail
        alert('Cannot Move Further!');
      }
    );
  },
  () => {
    // fail
    alert('Cannot Move Further!');
  }
);
