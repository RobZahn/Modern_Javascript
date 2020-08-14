// *****
// Fetch
// *****

// Newer way of making requests via JS. Supports promises.
// Not supported by IE.

// Fetch returns a response that contains among other things a body which is a readable stream. To access this stream we use .json(), which returns a promise.

// Fetch will not throw an error for a 404 or 500 error even if there is a catch.
// It must be written manually.

// Basic Syntax:

fetch('https://swapi.dev/api/planets/')
  .then(response => {
    if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

    return response.json();
  })
  .then(planets => {
    for (let planet of planets.results) {
      console.log(planet.name);
    }
  })
  .then(() => {
    console.log('-----');
  })
  .catch(err => {
    console.log('Something went wrong.');
    console.log(err);
  });

// ___________________________________________________________________________

// Chaining Fetch Requests:

fetch('https://swapi.dev/api/planets/')
  .then(response => {
    if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

    return response.json();
  })
  .then(planets => {
    console.log(`Fetched first planet - ${planets.results[0].name}`);
    const filmURL = planets.results[0].films[0];
    return fetch(filmURL);
  })
  .then(response => {
    if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

    return response.json();
  })
  .then(movieData => {
    console.log(`Fetched first film - ${movieData.title}`);
  })
  .then(() => {
    console.log('-----');
  })
  .catch(err => {
    console.log('Something went wrong.');
    console.log(err);
  });

// ___________________________________________________________________________

// Refactoring Fetch chains:

const checkStatusAndParse = response => {
  if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

  return response.json();
};

const printPlanets = planets => {
  console.log('--------------------');
  console.log('Loaded 10 planets...');
  console.log('--------------------');
  for (let planet of planets.results) {
    console.log(planet.name);
  }
  return Promise.resolve(planets.next); // Creates new resolved promise to pass on to another .then()
};

const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
  return fetch(url);
};

fetchNextPlanets()
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .catch(err => {
    console.log('Something went wrong.');
    console.log(err);
  });
