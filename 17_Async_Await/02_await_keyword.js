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
