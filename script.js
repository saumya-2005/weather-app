
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '1be24d197dmsh103d13824e9900fp1bab7ejsn638f687da6a3',
    'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
  }
};
const getWeather = (city) => {
  cityName.innerHTML = city
  const timestamp = new Date().getTime();
  fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + city, options)
    .then(response => response.json())
    .then((response) => {
      console.log(response)
      const condition = response.current.condition.text;

      const lastUpdated = response.current.last_updated;
      console.log("Condition:",);
      console.log("Last Updated:", lastUpdated);

      if (condition === "Mist") {
        document.body.style.backgroundImage = "url('images/mist.jpg')";
      } else if (condition === "Sunny") {
        document.body.style.backgroundImage = "url('images/sunny.jpg')";
      } else if (condition === "Rain") {
        document.body.style.backgroundImage = "url('images/rain.jpg')";
      } else if (condition === "Cloudy") {
        document.body.style.backgroundImage = "url('images/cloudy.jpg')";
      } else if (condition === "fog") {
        document.body.style.backgroundImage = "url('images/fog.jpg')";
      } else if (condition === "Partly cloudy") {
        document.body.style.backgroundImage = "url('images/partly cloudy.jpg')";
      } else if (condition === "Mist") {
        document.body.style.backgroundImage = "url('images/mist.jpg')";
      } else if (condition === "Light rain") {
        document.body.style.backgroundImage = "url('images/patchy light rain.jpeg')";
      } else if (condition === "Overcast") {
        document.body.style.backgroundImage = "url('images/cloudy.jpg')";
      } else if (condition === "Light rain shower") {
        document.body.style.backgroundImage = "url('images/patchy light rain.jpeg')";
      } else if (condition === "Clear") {
        document.body.style.backgroundImage = "url('images/sunny.jpg')";
      }


    const lowerCaseCondition = condition.toLowerCase();

      const temp = response.current.temp_c;
      const tempBox = document.getElementById("temperatureBox");

      if (temp < 10) {
        tempBox.style.backgroundColor = "#e0f2fe"; // Cold
      } else if (temp >= 10 && temp <= 25) {
        tempBox.style.backgroundColor = "#fef9c3"; // Mild
      } else if (temp > 25 && temp <= 35) {
        tempBox.style.backgroundColor = "#ffe5b4"; // Warm
      } else {
        tempBox.style.backgroundColor = "#fecaca"; // Hot
      }

      const humidityValue = response.current.humidity;
      const humidityBox = document.getElementById("humidityContainer"); // your container ID

      if (humidityValue < 40) {
        humidityBox.style.backgroundColor = "#e0f7fa"; // light blue (dry)
      } else if (humidityValue <= 60) {
        humidityBox.style.backgroundColor = "#fff3cd"; // soft yellow (comfortable)
      } else {
        humidityBox.style.backgroundColor = "#fde2e2"; // light pink (humid)
      }

      const windSpeed = response.current.wind_kph;
      const windBox = document.getElementById("windContainer");

      if (windSpeed < 10) {
        windBox.style.backgroundColor = "#e0f7fa"; // Calm breeze (light blue)
      } else if (windSpeed <= 25) {
        windBox.style.backgroundColor = "#fef9c3"; // Normal wind (soft yellow)
      } else {
        windBox.style.backgroundColor = "#ffd6d6"; // Strong wind (light pink/red)
      }



      const iconUrl = "https:" + response.current.condition.icon;
      document.getElementById("conditionIcon").src = iconUrl;
      document.getElementById("cloud").textContent = response.current.condition.text;

      let emoji = "🌈";
if (lowerCaseCondition.includes("sunny")) emoji = "☀️";
else if (lowerCaseCondition.includes("rain")) emoji = "🌧️";
else if (lowerCaseCondition.includes("cloud")) emoji = "☁️";

document.getElementById("cloud").innerHTML = `${emoji} ${condition}`;

   
//Data fetching for other cities
const cities = ["Kanpur", "Delhi", "Lucknow", "Bengaluru", "Mumbai"];

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '1be24d197dmsh103d13824e9900fp1bab7ejsn638f687da6a3',
    'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
  }
};

const populateRow = async (city) => {
  try {
    const response = await fetch(
      `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`,
      options
    );
    const data = await response.json();

    const row = document.getElementById(`${city}-row`);
    if (!row) return;

    row.querySelector(".temp").textContent = `${data.current.temp_c}℃`;
    row.querySelector(".humidity").textContent = `${data.current.humidity}%`;
    row.querySelector(".wind").textContent = `${data.current.wind_kph} km/h`;
    row.querySelector(".condition").textContent = data.current.condition.text;
    row.querySelector(".visibility").textContent = `${data.current.vis_km} km`;
    row.querySelector(".last-updated").textContent = data.current.last_updated;
  } catch (err) {
    console.error(`Error fetching weather for ${city}:`, err);
  }
};

const updateAllRows = () => {
  cities.forEach(city => populateRow(city));
};

document.addEventListener("DOMContentLoaded", () => {
  updateAllRows();
});






      feelslike_c.innerHTML = response.current.feelslike_c
      humidity2.innerHTML = response.current.humidity
      pressure_mb.innerHTML = response.current.pressure_mb
      temp_c2.innerHTML = response.current.temp_c
      uv.innerHTML = response.current.uv
      vis_km.innerHTML = response.current.vis_km
      wind_kph2.innerHTML = response.current.wind_kph
      precip_mm.innerHTML = response.current.precip_mm
      dewpoint_c.innerHTML = response.current.dewpoint_c
      gust_kph.innerHTML = response.current.wind_kph
      wind_dir.innerHTML = response.current.wind_dir
      windchill_c.innerHTML = response.current.windchill_c
      heatindex_c.innerHTML = response.current.heatindex_c
    })
    .catch(err => console.error("Error fetching weather:", err));
};
// Example usage
// submit.addEventListener("click", (e) => {
//   e.preventDefault()
//   getWeather(city.value);
// });
document.addEventListener("DOMContentLoaded", () => {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
  });

  updateAllRows(); // Keep this here too
});
const cities = ["Kanpur", "Delhi", "Lucknow", "Bengaluru", "Mumbai"];

const populateRow = async (city) => {
  try {
    const response = await fetch(
      `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`,
      options
    );
    const data = await response.json();

    const row = document.getElementById(`${city}-row`);
    if (!row) return;

    row.querySelector(".temp").textContent = `${data.current.temp_c}℃`;
    row.querySelector(".humidity").textContent = `${data.current.humidity}%`;
    row.querySelector(".wind").textContent = `${data.current.wind_kph} km/h`;
    row.querySelector(".condition").textContent = data.current.condition.text;
    row.querySelector(".visibility").textContent = `${data.current.vis_km} km`;
    row.querySelector(".last-updated").textContent = data.current.last_updated;
  } catch (err) {
    console.error(`Error fetching weather for ${city}:`, err);
  }
};

const updateAllRows = () => {
  cities.forEach(city => populateRow(city));
};

document.addEventListener("DOMContentLoaded", () => {
  updateAllRows();
});
