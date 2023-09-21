const weather = document.querySelector(".js-weather");

const API_KEY = "3c6cf9c7150a58ff9451df08f7f88d6b";

function onGeoOk(position) {
const lat = position.coords.latitude;
const lon = position.coords.longitude;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
fetch(url)
.then((response) => response.json())
.then((data) => {
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
});
}
function onGeoError() {
alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);