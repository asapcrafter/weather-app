const userLocation = 95376
let weatherData


const getData = async function getWeatherData(userLocation) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=6a0e226f90fe438f90b02617211408&q=${userLocation}&aqi=no`);
        const data = await response.json();
        weatherData = data;
        processData(data);
    } catch (err) {
        console.log(err);
    };
}

const processData = function processWeatherData(data) {
    location = 
    temperature = data.current.temp_f
    
}

//Debugging stuff
console.log(getData(95376))

getData(95376)














