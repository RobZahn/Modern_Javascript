// ***************
// Multiple Awaits
// ***************

const btn = document.querySelector('button');

const moveX = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      console.log(bodyBoundary);
      const currentRight = element.getBoundingClientRect().right;
      const currentLeft = element.getBoundingClientRect().left;
      if (currentRight + amount > bodyBoundary) {
        reject({
          bodyBoundary,
          currentLeft: currentLeft.toFixed(2),
          currentRight: currentRight.toFixed(2),
          amount
        });
      } else {
        element.style.transform = `translateX(${currentLeft + amount}px)`;
        resolve();
      }
    }, delay);
  });
};

async function animateRight(ele, amount) {
  await moveX(ele, amount, 1000);
  await moveX(ele, amount, 1000);
  await moveX(ele, amount, 1000);
  await moveX(ele, amount, 1000);
  await moveX(ele, amount, 1000);
  await moveX(ele, amount, 1000);
  await moveX(ele, amount, 1000);
  await moveX(ele, amount, 1000);
}

animateRight(btn, 100).catch(err => {
  console.log('Cannot move off-screen!', err);
  animateRight(btn, -100);
});
