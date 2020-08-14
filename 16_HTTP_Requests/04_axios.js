// *****
// Axios
// *****

// Axios is not native JS but an external library for making HTTP requests.
// Parses JSON automatically.
// Bad status codes will be caught automatically.

axios
  .get('https://swapi.dev/api/planets/')
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.log(err);
  });

// ___________________________________________________________________________

// Sequential requests:

const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
  return axios.get(url);
};

const printPlanets = ({ data }) => {
  console.log(data);
  for (let planet of data.results) {
    console.log(planet.name);
  }
  return Promise.resolve(data.next);
};

fetchNextPlanets()
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .catch(err => {
    console.log(err);
  });
