// let weather;

const getData = async function getWeatherData(userLocation) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=6a0e226f90fe438f90b02617211408&q=${userLocation}&aqi=no`);
        const data = await response.json();
        const processedData = processData(data); //Passes API data to the object parser
        return processedData;
    } catch (err) {
        console.log('Not a valid location');
    };
}

const processData = function processWeatherData(data) {
    const city = data.location.name;
    const region = data.location.region;
    const temperature = data.current.temp_f;
    const condition = data.current.condition.text;
    const conditionIcon = data.current.condition.icon;
    const humidity = data.current.humidity;
    const wind = data.current.wind_mph;

    console.log(city, region, temperature, condition, humidity, wind) //Test

    const weatherObject = new MyWeather(city, region, temperature, condition, conditionIcon,humidity, wind);
    return weatherObject;
}

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

//Display the default weather information 
const loadDefault = async function loadDefaultWeather() {
    const weatherData = await getData('Tracy');
    renderDisplay(weatherData);
}

document.onload = loadDefault();

//Submit button to search for new weather data
const submitLocation = async function submitLocation(event) {
    event.preventDefault();
    const location = document.getElementById('location-form').value;
        if (location === '' || location == null) {
            console.log('Form is not filled');
            return;
        };
        const weatherData = await getData(location);
        renderDisplay(weatherData);
    //Clears the input form
    document.getElementById('location-form').value = null; 
}

document.querySelector('#submit-icon').onclick = () => submitLocation(event);

//Debugging area:















