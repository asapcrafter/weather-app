# Weather Checker App
## Live Preview: [Weather App](https://asapcrafter.github.io/weather-app/)
A weather application that takes in a ZIP code or city name. Current information such as temperature, wind speed, location name, and weather status is displayed.

### Description
The app features an API from weatherapi.com and asynchronous JavaScript (async/await). 

```javascript
// Fetches API JSON data using async function
const getData = async function getWeatherData(userLocation) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key={keyid}=${userLocation}&aqi=no`);
        const data = await response.json();
        // Passes API data to the object parser
        const processedData = processData(data);
        return processedData;
    } catch (err) {
        console.log('Not a valid location');
    };
}
```

The JSON data is used to create a Weather class object. This class object is then displayed as a parameter to the DOM.
```javascript
class MyWeather {
    constructor(city, region, temperature, condition, conditionIcon,humidity, wind) {
        this.city = city;
        this.region = region;
        this.temperature = temperature;
        this.condition = condition;
        this.conditionIcon = conditionIcon;
        this.humidity = humidity;
        this.wind = wind;
    };
}
```

```javascript
/// Renders the weather information through the DOM~
const renderDisplay = function renderDisplayOnDOM(weather) {
    const city = document.querySelector('.city');
    const region = document.querySelector('.region');
    const temperature = document.querySelector('.temperature');
    const condition = document.querySelector('.condition');
    const conditionIcon = document.querySelector('#condition-icon')
    const wind = document.querySelector('.wind');
    
    city.innerHTML = weather.city; 
    region.innerHTML = weather.region;
    temperature.innerHTML = `${weather.temperature}°F`;
    condition.innerHTML = weather.condition;
    conditionIcon.src = weather.conditionIcon;
    wind.innerHTML = `Wind: ${weather.wind} mph`; 
}
```
