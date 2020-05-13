// ******************************
// Return Promise With A Function
// ******************************

const makeDogPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();

      if (rand < 0.5) {
        resolve();
      } else {
        reject();
      }
    }, 5000);
  });
};

// We can chain .then() and .catch() together without having to reference the
// promise again:

makeDogPromise()
  .then(() => {
    console.log('Yay we got a dog!');
  })
  .catch(() => {
    console.log('No dog. :((');
  });
