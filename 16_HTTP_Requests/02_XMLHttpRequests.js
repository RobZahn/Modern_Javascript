// **********************
// XHR - XMLHttpRequest()
// **********************

// XHR is a JavaScript API to create AJAX requests. Its methods provide the ability to send network requests between the browser and a server.

// Clunky and outdated, has essentially been replaced by Fetch and Axios.

// Basic Syntax:

const myReq = new XMLHttpRequest();

myReq.onload = function () {
  const data = JSON.parse(this.responseText);
  console.log(data);
};

myReq.onerror = function (err) {
  console.log('Error!', err);
};

myReq.open('get', 'https://icanhazdadjoke.com/', true);
myReq.setRequestHeader('Accept', 'application/json');
// myReq.send();

// From Star Wars API:

const planetReq = new XMLHttpRequest();

planetReq.addEventListener('load', function () {
  console.log('It worked!');
  const planets = JSON.parse(this.responseText);
  for (let planet of planets.results) {
    console.log(planet.name);
  }
});

planetReq.addEventListener('error', () => {
  console.log('Error!');
});

planetReq.open('GET', 'https://swapi.dev/api/planets/');
planetReq.send();
console.log('Request Sent');

// _____________________________________________________________________________

// Chaining Requests

const firstReq = new XMLHttpRequest();

firstReq.addEventListener('load', function () {
  console.log('First request worked');
  const planets = JSON.parse(this.responseText);
  const filmUrl = planets.results[0].films[0];
  const filmReq = new XMLHttpRequest();

  filmReq.addEventListener('load', function () {
    console.log('Second request worked');
    const filmData = JSON.parse(this.responseText);
    console.log(filmData);
  });

  filmReq.addEventListener('error', e => {
    console.log('Error!', e);
  });

  filmReq.open('GET', filmUrl);
  filmReq.send();
});

firstReq.addEventListener('error', () => {
  console.log('Error!');
});

firstReq.open('GET', 'https://swapi.dev/api/planets/');
firstReq.send();
console.log('Request Sent');
