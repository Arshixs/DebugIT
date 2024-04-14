async function fetchData() {
  const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=5&search=Attack on Titan';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5bdeba8ba9msh600ec9005e21d10p171930jsn8c99c616eb5b',
      'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    
    // Log the fetched data to the console
    console.log(data);
  } catch (error) {
    console.error('Error fetching anime data:', error);
  }
}

// Call the fetchData function
fetchData();
