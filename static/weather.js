//ophalen weather op je huidige locatie

fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=bd5e378503939ddaee76f12ad7a97608")
.then(res => res.json())
.then(json => document.getElementById("weather").innerText = json.weather[0].main)

