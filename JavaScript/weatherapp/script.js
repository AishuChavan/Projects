const userTab=document.querySelector("[data-userWeather");
const searchTab=document.querySelector("[data-searchWeather]");
const userContainer=document.querySelector(".Weather-container");
const grantAccessContainer=document.querySelector(".grant-location-container")
const searchForm=document.querySelector("[data-searchForm]");
const loadingScreen=document.querySelector(".loading-container");
const userInfoContainer=document.querySelector(".user-info-container");


//need of variables
 let currentTab=userTab;
 const API_KEY="98d82d9785b03cab69cbe418379a2a16";
 currentTab.classList.add("current-tab");

 //panding work
 getfromSessionStorage();


 function switchTab(clickedTab){
    if(clickedTab!=currentTab)
    {
        currentTab.classList.remove("current-tab");
        currentTab=clickedTab;
        currentTab.classList.add("current-tab");
        if(!searchForm.classList.contains('active'))
        {
            userInfoContainer.classList.remove('active');
            grantAccessContainer.classList.remove('active');
            searchForm.classList.add('active');
        }
        else{
            //main pahale search wale tag pr tha ,ab your wheathr tab visible krna hai
             searchForm.classList.remove('active');
             userInfoContainer.classList.remove('active');
            //ab main your weather tab me aagya hu ,toh weather bhi display krna padega,so let's
            //check local storage first for coordinates,if we haved saved them there.
            getfromSessionStorage();
        }
    }
 }
 userTab.addEventListener('click',()=>
 {
    //pass clicked tab as input parameter
    switchTab(userTab);
 });
 searchTab.addEventListener('click',()=>{
    switchTab(searchTab);
 });


 //checkif coordinates are already present in session storage
 function getfromSessionStorage()
 {
    const localCoordinates=sessionStorage.getItem("user-coordinates");
    if(!localCoordinates)
    {
        //agar local coordintaes nhi hai
        grantAccessContainer.classList.add('active');
        loadingScreen.classList.remove('active');
        userInfoContainer.classList.remove('active');

    }
    else{
        const coordinates=JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }

 }
 async function fetchUserWeatherInfo(coordinates)
 {
    const {lat,lon}=coordinates;
    //make grantcontainer invisible
    grantAccessContainer.classList.remove('active');
    //make loader visible
    loadingScreen.classList.add('active');

    //API call
    try{
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        );
        const data=await response.json();
        loadingScreen.classList.remove('active');
        userInfoContainer.classList.add('active');
        renderWeatherInfo(data);
    }

    catch(err)
    {
        loadingScreen.classList.remove('active');
        //
    }
 }
 function renderWeatherInfo(weatherInfo)
 {
    //firstly ,we have to fetch elements
    console.log("render");
    console.log(weatherInfo);
    const cityName=document.querySelector("[data-cityName]");
    const countryIcon=document.querySelector("[data-countryIcon]");
    const desc=document.querySelector("[data-weatherDesc]");
    const weatherIcon=document.querySelector("[data-weatherIcon]");
    const temp=document.querySelector("[data-temp]");
    const windspeed=document.querySelector("[data-windspeed]");
    const humidity=document.querySelector("[data-humidity]");
    const cloudiness=document.querySelector("[data-cloudines]");
    //fetch value from weatherinfo object and put in ui elements
    if(weatherInfo.name==undefined)
    {
        userInfoContainer.classList.remove('active');
        loadingScreen.classList.remove('active');

    }
    else{
        loadingScreen.classList.remove('active');
        userInfoContainer.classList.add('active');
        cityName.innerText=weatherInfo?.name;
        let country = weatherInfo?.sys?.country;
        let res = country.toLowerCase();
        countryIcon.innerHTML = `<img src="https://flagcdn.com/144x108/${res}.png" alt=""></img>`;
        desc.innerText=weatherInfo?.weather?.[0]?.description;
        weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png" alt=""></img>`;
        temp.innerText= `${(weatherInfo?.main?.temp - 273).toPrecision(4)+ '°C'}`;
        windspeed.innerText=`${weatherInfo?.wind?.speed} m/s`;
        humidity.innerText=`${weatherInfo?.main?.humidity}%`;
        cloudiness.innerText=`${weatherInfo?.clouds?.all}%`;
    }
}   

function getLocation()
{
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        //hw-show an alert for no geolocation support available
        alert("Location Deined"); 
    }
}
function showPosition(position)
{
    const userCoordinates={
        lat:position.coords.latitude,
        lon:position.coords.longitude,
    }
    sessionStorage.setItem('user-coordinates',JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);
}




const grantAccessButton=document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener('click',getLocation);

const searchInput=document.querySelector("[data-searchInput]");
searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let cityname=searchInput.value;
    if(searchInput.value == "")return;

    fetchSearchWeatherInfo(cityname);
    searchInput.value="";
}
);
async function fetchSearchWeatherInfo(city)
{
    loadingScreen.classList.add('active');
    userInfoContainer.classList.remove('active');
    grantAccessContainer.classList.remove('active');

    try{
        const response=await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        );
        const data=await response.json();
       // loadingScreen.classList.remove('active');
      //  userInfoContainer.classList.add('active');
        renderWeatherInfo(data);
    }
    catch(err)
    {
        //hw
        loadingScreen.classList.remove('active');
    }
}