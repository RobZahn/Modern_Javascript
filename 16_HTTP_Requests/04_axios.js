// *****
// Axios
// *****

// Axios is not native JS but an external library for making HTTP requests.
// Parses JSON automatically.
// Bad status codes will be caught automatically.

axios
  .get('https://swapi.dev/api/planetsy/')
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.log(err);
  });
