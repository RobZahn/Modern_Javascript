// *****
// Await
// *****

// Can only be used inside of a function declared with async.
// Await will pause execution of the function until a promise is resolved.

// _____________________________________________________________________________

// Without Await:

function getPlanets() {
  return axios.get('https://swapi.dev/api/planets/');
}

getPlanets().then(res => {
  console.log(res.data);
});

// _____________________________________________________________________________

// With Await:

// Feels just like a normal synchronous function - does not require .then()

async function getPlanetsAwait() {
  const res = await axios.get('https://swapi.dev/api/planets/');
  console.log(res.data);
}

getPlanetsAwait();

// _____________________________________________________________________________

// Error Handling in Async Funcs:

async function getPlanetsAwait1() {
  try {
    const res = await axios.get('https://swapi.dev/api/planetssss/');
    console.log(res.data);
  } catch (error) {
    console.log('In Catch!', error);
  }
}

getPlanetsAwait1();

// In case of 404 error:

// In Catch! Error: Request failed with status code 404
// at e.exports (spread.js:25)
// at e.exports (spread.js:25)
// at XMLHttpRequest.l.onreadystatechange (spread.js:25)
