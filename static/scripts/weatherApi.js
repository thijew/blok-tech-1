const weatherApi = document.querySelector('.weatherApi');


async function fetchWeather() {
    try {
        const url = "https://api.open-meteo.com/v1/forecast?latitude=52.36&longitude=4.91&daily=weathercode,temperature_2m_max,temperature_2m_min,rain_sum&current_weather=true&timezone=Europe%2FBerlin"
        let response = await fetch(url)
        let weather = await response.json()
        console.log(weather)

        // Display the weather data in the HTML
        
    } catch (error) {
        console.log('Error fetching weather data:', error);
    }
}
    fetchWeather()
    console.log(weatherApi)
