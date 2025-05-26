"use strict";
const url = 'https://api.github.com/users/semenetsoleksandr'
const gitLogin = document.getElementById('github-name') as HTMLElement;
const gitBio = document.getElementById('github-bio') as HTMLElement;
const gitLink = document.getElementById('github-link') as HTMLElement;
const gitMainName = document.getElementById('git-main-name') as HTMLElement;
const gitFooterName = document.getElementById('git-footer-name') as HTMLElement;
const getAvatar = document.getElementById('avatar') as HTMLElement;
const getTown = document.getElementById('git-town') as HTMLElement;
const getWork = document.getElementById('git-work') as HTMLElement;
const localStorageData = localStorage.getItem('git_info') 
const localStorageTime = localStorage.getItem('last_update')
const lastUpdate = new Date(<string>localStorageTime)

if (localStorageTime != null &&
    ((Date.now() - lastUpdate.getTime()) / (1000 * 60 * 60)) < 6 &&
    localStorageTime != null) {
    const data = JSON.parse(<string>localStorageData)
    gitData(data)
}
else {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            gitData(data)
            localStorage.setItem('git_info', JSON.stringify(data))
            localStorage.setItem('last_update', new Date().toString())
        })
}

interface IGitHubUser {
    name: string
    bio:string
    html_url:string
    login:string
    avatar_url:string
    location:string
    company:string
}

function gitData(data: IGitHubUser ) {
    gitLogin.innerText = data.name
    gitBio.innerText = data.bio
    gitLink.setAttribute('href', data.html_url)
    gitLink.innerText = data.login
    gitMainName.innerText = data.name
    gitFooterName.innerText = `Autor: ${data.name}`
    getAvatar.setAttribute('src', data.avatar_url)
    getAvatar.style.borderRadius = '50%'
    getTown.innerHTML = `<strong>Town: </strong>${data.location}`
    getWork.innerHTML = `<strong>Work: </strong>${data.company}`
}
