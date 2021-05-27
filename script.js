const api = {
    key : 'fd8fa8e68af1fe17c1f0e137d8bd3495',
    base : 'https://api.openweathermap.org/data/2.5/'
}

// document.querySelector('.click-button').addEventListener('click',newWebsite);
// function newWebsite() {
//     // location.href= 'https://google.com/';  //opens the website on the same page
//     window.open('https://github.com');   //opens the website on a new page
// };

let searchBox = document.querySelector('.weather-input');
searchBox.addEventListener('keypress',handleSearchBox);


let searchButton = document.querySelector('.weather-button');
searchButton.addEventListener('click',myfunction);

if(searchBox.value===''){
    search = 'Baripada';
    fetch(`${api.base}weather?q=${search}&appid=${api.key}&units=metric`)
    .then(weather => weather.json())
    .then(displayResults);
}



function handleSearchBox(event) {
    if(event.keyCode === 13){
        handleSearchResult(searchBox.value);
    }
    
}

function myfunction(){
    fetch(`${api.base}weather?q=${searchBox.value}&appid=${api.key}&units=metric`)
    .then(weather => {return weather.json();})
    .then(displayResults);
}


function handleSearchResult(search){
    fetch(`${api.base}weather?q=${search}&appid=${api.key}&units=metric`)
    .then(weather => weather.json())
    .then(displayResults);
}

function displayResults(weather){
    document.querySelector('.city').innerText = `${weather.name}, ${weather.sys.country}`;
    const date = new Date();
    document.querySelector('.date').innerText = dateBuilder(date);
    document.querySelector('.temp').innerText = `${weather.main.temp}°c`;
    document.querySelector('.sky').innerText = weather.weather[0].main;
    document.querySelector('.hi-low').innerText = `${weather.main.temp_max}°c/${weather.main.temp_min}°c`

};

function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }