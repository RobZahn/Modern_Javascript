// *******************************
// Resolving & Rejecting w/ Values
// *******************************

const fakeRequest = url => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        '/users': [
          { id: 1, username: 'Bilbo' },
          { id: 5, username: 'Esmerelda' }
        ],

        '/about': 'This is the about page.'
      };

      const data = pages[url];

      if (data) {
        resolve({ status: 200, data });
      } else {
        reject({ status: 404 });
      }
    }, 3000);
  });
};

fakeRequest('/about')
  .then(response => {
    console.log('Status Code:', response.status);
    console.log('Data:', response.data);
    console.log('Request Worked!');
  })
  .catch(response => {
    console.log(response.status);
    console.log('Request Failed!');
  });
