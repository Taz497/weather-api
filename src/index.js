// api url
const api_url = "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8";

// Defining async function
function fetchDemo() {
  return fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=dhaka&unit=metric&appid=1636391821c200596baec77debe541c5"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      return json;
    });
}

fetchDemo().then(function (result) {
  console.log(result);
});

// Calling that async function
