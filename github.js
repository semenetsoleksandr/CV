const url = 'https://api.github.com/users/semenetsoleksandr'
const gitLogin = document.getElementById('github-name')
const gitBio = document.getElementById('github-bio')
const gitLink = document.getElementById('github-link')
const gitMainName = document.getElementById('git-main-name')
const gitFooterName = document.getElementById('git-footer-name')
const getAvatar = document.getElementById('avatar')
const getTown = document.getElementById('git-town')
const getWork = document.getElementById('git-work')
const localStorageData = localStorage.getItem('git_info')
const localStorageTime = localStorage.getItem('last_update')
const lastUpdate = new Date(localStorageTime)

if (localStorageTime != null &&
    ((Date.now() - lastUpdate.getTime()) / (1000 * 60 * 60)) < 6 &&
    localStorageTime != null) {
    const raw = localStorage.getItem('git_info')
    const data = JSON.parse(raw)
    gitData(data)
}
else {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            gitData(data)
            localStorage.setItem('git_info', JSON.stringify(data))
            localStorage.setItem('last_update', new Date())
        })
}

function gitData(data) {
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
