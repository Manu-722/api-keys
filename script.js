const apiKey = "88e1f3e172d57d58b17692421cd9cd70";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather`;
// Get HTML elements
const locationInput = document.getElementById("locationInput");
const searchButton = document.getElementById("searchButton");
const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");
// Event listener for search button
searchButton.addEventListener("click", () => {
  const location = locationInput.value.trim(); // FIXED: changed from `ariaValueMax` to `value`
  if (location) {
    fetchWeather(location);
  }
});
// Function to fetch and display weather
function fetchWeather(location) {
  const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Update the webpage with weather information
      locationElement.textContent = `${data.name}, ${data.sys.country}`;
      temperatureElement.textContent = `Temperature: ${Math.round(data.main.temp)}°C`;
      descriptionElement.textContent = `Weather: ${data.weather[0].description}`;
    })
    .catch(error => {
      // Handle errors
      locationElement.textContent = "Error fetching weather data";
      temperatureElement.textContent = "";
      descriptionElement.textContent = "";
      console.error("Error:", error);
    });
}
// Optional: Load a default city on page load
fetchWeather("Nairobi");
