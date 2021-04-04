const search = document.querySelector("#search");
const searchBtn = document.querySelector(".searchBtn");
const weather = document.querySelector(".weather");

const eventListener = () => {
  const value = search.value;
  callWeatherAPI(value).then((res) => showData(res));
  search.value = "";
};

const callWeatherAPI = async (state) => {
  return await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${state}&units=Metric&appid=8524b52b9820f98b254987bd91c0fe80`
  )
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err));
};
const showData = (data) => {
  console.log(data);
  if (data.cod === "404") {
    alert("Entered City Not Found");
    clearWeather();
    return;
  }
  clearWeather();
  let output = `
  <div class="city">
        <img src="icon.png" height="200px" width="200px" alt="icon" />
        <h3 class="cityName">${data.name}</h3>
      </div>
      <h1 class="temp">${data.main.temp}&#176;C</h1>
      <h3 class="cond">${data.weather[0].main}</h3>
      <p class="minMax">${data.main.temp_min}/${data.main.temp_max}</p>`;
  weather.insertAdjacentHTML("afterbegin", output);
};

const clearWeather = () => {
  weather.innerHTML = "";
};

searchBtn.addEventListener("click", eventListener);
search.addEventListener("keyup", (e) => {
  console.log(e.keyCode);
  if (e.keyCode === 13) {
    eventListener();
  }
});
