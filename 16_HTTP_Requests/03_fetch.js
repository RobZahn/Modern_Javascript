// *****
// Fetch
// *****

// Newer way of making requests via JS. Supports promises.
// Not supported by IE.

// Fetch returns a response that contains among other things a body which is a readable stream. To access this stream we use .json(), which returns a promise.

// Fetch will not throw an error for a 404 or 500 error even if there is a catch.
// It must be written manually.

// Basic Syntax:

fetch('https://swapi.dev/api/planetsy/')
  .then(response => {
    if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

    response.json().then(planets => {
      for (let planet of planets.results) {
        console.log(planet.name);
      }
    });
  })
  .catch(err => {
    console.log('Something went wrong.');
    console.log(err);
  });

// ___________________________________________________________________________

// Chaining Fetch Requests:
