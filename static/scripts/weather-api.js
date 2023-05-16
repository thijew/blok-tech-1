const weatherApi = document.querySelector('.weatherApi');


async function fetchWeather() {
    try {
        const url = "https://api.open-meteo.com/v1/forecast?latitude=52.56&longitude=4.61&daily=temperature_2m_max,temperature_2m_min,rain_sum&current_weather=true&timezone=Europe%2FBerlin"
        let response = await fetch(url);
        let weather = await response.json();
        console.log(weather);

        // Display the weather data in the HTML
        weatherApi.innerHTML = `
        <ul>
          <li>Hoog: ${weather.daily.temperature_2m_max} °C</li>
          <li>Laag: ${weather.daily.temperature_2m_min} °C</li>
          <li>Regenval: ${weather.daily.rain_sum} mm</li>
        </ul>
      `;
    } catch (error) {
        console.log('Error fetching weather data:', error);
    }
}
    fetchWeather();
    console.log(weatherApi);
