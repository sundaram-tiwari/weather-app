const apiKey = "98e13008a500af4eab457173fb504102";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.btn i');
const weatherImg = document.querySelector('.weather-icon');

const checkWeather = async (city) => {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
    document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h';

    if (data.weather[0].main == 'Clear') {
        weatherImg.src = 'images/clear.png';
    }
    else if (data.weather[0].main == 'Clouds') {
        weatherImg.src = 'images/clouds.png';
    }
    else if (data.weather[0].main == 'Drizzle') {
        weatherImg.src = 'images/drizzle.png';
    }
    else if (data.weather[0].main == 'Humidity') {
        weatherImg.src = 'images/humidity.png';
    }
    else if (data.weather[0].main == 'Mist') {
        weatherImg.src = 'images/mist.png';
    }
    else if (data.weather[0].main == 'Rain') {
        weatherImg.src = 'images/rain.png';
    }
    else if (data.weather[0].main == 'Snow') {
        weatherImg.src = 'images/snow.png';
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});