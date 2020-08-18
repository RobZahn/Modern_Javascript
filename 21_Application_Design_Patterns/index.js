const fetchData = async () => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'e1d3aa51',
      s: 'avengers'
    }
  });

  console.log(response.data);
};

fetchData();
