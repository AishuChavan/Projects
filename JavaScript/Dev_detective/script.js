const modename = document.querySelector("[data-mode]");
const modeimgbtn = document.querySelector("[data-mode-img]");
const iconMode = document.querySelector("[icon-mode]");
const searchtab = document.querySelector("[user-searchInput]");
const searchBtn = document.querySelector(".btn");
const userPhoto = document.querySelector("[data-userphoto]");
const username = document.querySelector("[data-username]");
const userId = document.querySelector("[data-userid]");
const DateJoin = document.querySelector("[data-join]");
const bio = document.querySelector(".bio");
const repos = document.querySelector("[data-repos-value]");
const follower = document.querySelector("[data-follower]");
const following = document.querySelector("[data-following]");
const locationn = document.querySelector("[data-locat]");
const email = document.querySelector("[data-email]");
const twiteer = document.querySelector("[data-twit]");
const organisation = document.querySelector("[data-organisation]");
const headsection = document.querySelector(".head-section");
const searchsection = document.querySelector(".search-section");
const profilesection = document.querySelector(".profile-section");
const followsection = document.querySelector(".follow");
const locationsection = document.querySelector(".location");
const mainsection = document.querySelector(".main-container");
const wrapper = document.querySelector(".wrapper");


let userName = "AishuChavan";
let currentmode = "Dark";


callapi(userName);

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    userName = searchtab.value;
    callapi(userName);
});

modeimgbtn.addEventListener('click', () => {
    addingclass();
});

function addingclass() {
    if (currentmode == "Dark") {
        currentmode = "light";
    }
    else {
        currentmode = "Dark";
    }
    
    modename.innerText = currentmode;
    iconMode.classList.toggle("fa-sun");
    iconMode.classList.toggle("fa-moon");
    headsection.classList.toggle('active');
    searchsection.classList.toggle('active');
    profilesection.classList.toggle('active');
    followsection.classList.toggle('active');
    locationsection.classList.toggle('active');
    mainsection.classList.toggle('active');
    wrapper.classList.toggle('active');
    bio.classList.toggle('active');
}


async function callapi(usernaame) {
    try {
        const response = await fetch(`https://api.github.com/users/${usernaame}`);
        const information = await response.json();
        renderinfo(information);
    }
    catch {
        alert("error in fetching ");
    }
}
function renderinfo(data) {

    if (data == undefined) {
        alert("USER NOT FOUND");
    }
    else {
        userPhoto.src = `${data?.avatar_url}`;
        username.innerText = `${data?.name}`;
        userId.innerText = `${data?.login}`;
        DateJoin.innerText = `${data?.created_at}`;
        bio.innerText = `${data?.bio}`;
        repos.innerText = `${data?.public_repos}`;
        follower.innerText = `${data?.followers}`;
        following.innerText = `${data?.following}`;
        locationn.innerText = `${data?.location}`;
        email.innerText = `${data?.email}`;
        twiteer.innerText = `${data?.twitter_username}`;
        organisation.innerText = `${data?.company}`;
    }
}