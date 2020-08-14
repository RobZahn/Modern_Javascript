// ********************************
// Parallel vs. Sequential Requests
// ********************************

// Sequential:

// async function get3Pokemon() {
//   // these requests are happening in sequence. the first has to finish before the next will run.
//   const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
//   const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
//   const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
//   console.log(poke1.data);
//   console.log(poke2.data);
//   console.log(poke3.data);
// }

// // Parallel:

async function get3Pokemon() {
  // these requests are happening in parallel. In this case, prom1, prom2, prom3 contain a promise and NOT the value of the resolved promise.
  const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
  const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
  const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');

  const poke1 = await prom1;
  const poke2 = await prom2;
  const poke3 = await prom3;

  console.log(poke1.data);
  console.log(poke2.data);
  console.log(poke3.data);
}

get3Pokemon();

function changeBodyColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
}

async function lightShowSequential() {
  await changeBodyColor('teal', 1000);
  await changeBodyColor('pink', 1000);
  await changeBodyColor('indigo', 1000);
  await changeBodyColor('green', 1000);
}

async function lightShowParallel() {
  const p1 = changeBodyColor('teal', 1000);
  const p2 = changeBodyColor('pink', 1000);
  const p3 = changeBodyColor('indigo', 1000);
  const p4 = changeBodyColor('green', 1000);
  await p1;
  await p2;
  await p3;
  await p4;
}

// lightShowSequential();
// lightShowParallel();

// _____________________________________________________________________________

// Promise.all() - helper method that collects all promises into an array.

async function get3PokemonRefactored() {
  // these requests are happening in parallel. In this case, prom1, prom2, prom3 contain a promise and NOT the value of the resolved promise.
  const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
  const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
  const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');

  const results = await Promise.all([prom1, prom2, prom3]);
  console.log(results); // [{…}, {…}, {…}] -> array containing 3 response objects
  printPokemon(results);
}

const printPokemon = results => {
  for (let pokemon of results) {
    console.log(pokemon.data.name);
  }
};

get3PokemonRefactored();
// bulbasaur
// ivysaur
// venusaur
