const apiKey = "5d54622b3f8a7bb63e40c9b48818e3c2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
 
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }
    else{
        var data = await response.json();
    console.log(data); 

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "https://i.ibb.co/Gk1WJPT/clouds.png";
    }
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "https://i.ibb.co/rsP4YbF/clear.png";
    }
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "https://i.ibb.co/gjwv0Jt/rain.png";
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "https://i.ibb.co/SvRdqSL/drizzle.png";
    }
    else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "https://i.ibb.co/bs4C6wD/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }


}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);

})