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
    const result = await response.json(); // Parse JSON response
    return result.data; // Return the entire result object
  } catch (error) {
    console.error(error);
    return null; // Return null or handle the error appropriately
  }
}

// Since fetchData returns a promise, you need to await it or use .then() to handle its result
async function fetchDataAndLog(num) {
  const list = await fetchData();
  console.log(list[num])
  return list[num];
}

// Call the async function to execute the code
const obj = fetchDataAndLog(0);
// Assume you have a JavaScript string
const myString = obj.title;
console.log(myString)

// Get the div element by its id
const stringDisplayDiv = document.getElementById("1");

// Set the innerHTML property of the div to display the string
stringDisplayDiv.innerHTML = myString;

