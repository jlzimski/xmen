// API KEY = f71dfe271bd670c7684da61f3894c9f6
// URL = api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherKey}`;
const weatherKey = "f71dfe271bd670c7684da61f3894c9f6";

fetch(url + weatherKey)
    .then(response => response.json())
    .then(json => display(json));

function display(json) {
    console.log(json);
}