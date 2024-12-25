// require('dotenv').config()
// import * as dotenv from 'dotenv'
// dotenv.config()

const apiKey = "0990ca8f6b3e2c6a99ff66bbaba6a14d";
console.log(apiKey);

const city = "chennai";

async function getWeatherData() {
  const city = document.getElementById("name").value;
  console.log("name:", city);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    let weather = document.querySelector(".weather");
    let error = document.querySelector(".error");
    if (data.cod == 200) {
      error.style.display = "none";
      weather.style.display = "block";

      let weatherIcon = document.querySelector(".weather-icon img");
      document.getElementById("temp").innerHTML =
        Math.round(data.main.temp) + "°C";
      document.getElementById("place").innerHTML = data.name;
      document.getElementById("humidity").innerHTML = data.main.humidity + "%";
      document.getElementById("windSpeed").innerHTML = data.wind.speed + "km/h";

      if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "./assets/cloud.png";
      } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "./assets/rain.png";
      } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "./assets/drizzle.png";
      } else if (data.weather[0].main === "Snow") {
        weatherIcon.src = "./assets/snow.png";
      } else {
        weatherIcon.src = "./assets/clear.png";
      }
    } else {
      error.style.display = "block";
      weather.style.display = "none";
    }
  } catch (error) {
    console.log(error);
  }
}

// console.log("data:>>", data);
// console.log("climate:", data.weather[0].main);
// console.log("tem:", Math.round(data.main.temp));
// console.log("name:", data.name);
// console.log("wind speed", data.wind.speed);
// console.log("humidity:", data.main.humidity);
