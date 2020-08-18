// Query Selectors
const input = document.querySelector('input');
const target = document.querySelector('#target');

const fetchData = async searchTerm => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'e1d3aa51',
      s: searchTerm
    }
  });

  if (response.data.Error) return [];

  return response.data.Search;
};

const onInput = async event => {
  const movies = await fetchData(event.target.value);
  console.log(movies);

  for (let movie of movies) {
    const div = document.createElement('div');

    div.innerHTML = `
    <h2>${movie.Title}</h2>
    <img src="${movie.Poster}" width="200">
    `;

    target.append(div);
  }
};

// Event Handlers
input.addEventListener('input', debounce(onInput, 500));
